"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  name: string;
  description: string | null;
  availability_quantity: number;
  current_price: number;
  photos: string[];
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
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

        console.log(productsData);
        setProducts(productsData);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 sm:gap-4 gap-5 place-items-center">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
