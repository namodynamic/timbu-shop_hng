"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useRouter } from "next/navigation";
import { Pagination } from "./Pagination";
import Loader from "./Loader";
import ProductModal from "./ProductModal";

interface Product {
  id: string;
  name: string;
  description: string | null;
  availability_quantity: number;
  current_price: number;
  photos: string[];
}

interface ProductListProps {
  initialProducts: Product[];
  initialPage: number;
  initialTotalPages: number;
}

const ProductList: React.FC<ProductListProps> = ({
  initialProducts,
  initialPage,
  initialTotalPages,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(initialPage);
  const [totalPages, setTotalPages] = useState<number>(initialTotalPages);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`/api/products?page=${page}`);
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await res.json();
        if (!data.items || !Array.isArray(data.items)) {
          throw new Error("API response does not contain an array of items");
        }

        const productsData: Product[] = data.items.map((item: any) => ({
          id: item.id,
          name: item.name,
          description: item.description,
          availability_quantity: item.available_quantity,
          current_price:
            item.current_price && item.current_price.length > 0
              ? item.current_price[0]?.USD?.[0] || 0
              : 0,
          photos: item.photos.map(
            (photo: any) => `https://api.timbu.cloud/images/${photo.url}`
          ),
        }));

        setProducts(productsData);
        setTotalPages(Math.ceil(data.total / 10));
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page]);

  if (loading) {
    return <Loader />;
  }

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set("page", newPage.toString());
    router.push(newUrl.toString(), { scroll: false });
  };

  return (
    <div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 sm:gap-4 gap-5 place-items-center">
        {products.map((product) => (
          <div key={product.id} onClick={() => handleProductClick(product)}>
            <ProductCard product={product} />
          </div>
        ))}

        <ProductModal
          isOpen={isModalOpen}
          onClose={closeModal}
          product={selectedProduct}
        />
      </div>
      {totalPages > 1 && (
        <div className="my-4 w-full">
          <Pagination
            totalPages={totalPages}
            page={page}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default ProductList;
