import { Pagination } from "@/components/Pagination";
import ProductCard from "@/components/ProductCard";
import ProductList from "@/components/ProductList";
import { bestSellers, products } from "@/constants";

interface Product {
  id: string;
  name: string;
  description: string | null;
  availability_quantity: number;
  current_price: number;
  photos: string[];
}
const initialProducts: Product[] = [];
const initialPage = 1;
const initialTotalPages = 10;

const Products = () => {
  return (
    <section className="flex 1min-h-screen flex-col mb-20 items-center justify-center">
      <div className="wrapper">
        <ProductList
          initialProducts={initialProducts}
          initialPage={initialPage}
          initialTotalPages={initialTotalPages}
        />

        <div className="mt-10">
          <h2 className="font-manrope text-lg font-bold leading-[27.32px] text-left text-[#8D7A6B]">
            Best Sellers
          </h2>

          <div className="mt-16 grid lg:grid-cols-5 md:grid-cols-3  sm:grid-cols-2 grid-cols-2 sm:gap-4 gap-5 place-items-center">
            {/* {bestSellers.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))} */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Products;
