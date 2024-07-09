import ProductCard from "@/components/ProductCard";
import { bestSellers, products } from "@/constants";

const Products = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between">
        <div className="wrapper">
      <div className="mt-16 grid lg:grid-cols-5 md:grid-cols-3  sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-5">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
     

     <div className="mt-10">
      <h2 className="font-manrope text-lg font-bold leading-[27.32px] text-left text-[#8D7A6B]">Best Sellers</h2>

      <div className="mt-16 grid lg:grid-cols-5 md:grid-cols-3  sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-5">
        {bestSellers.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
     </div>
        </div>
    </section>
  );
};
export default Products;
