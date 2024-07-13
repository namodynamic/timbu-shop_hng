import { formatAmount } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  description: string | null;
  availability_quantity: number;
  current_price: number;
  photos: string[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({product}) => {
  const amount = formatAmount(product.current_price);
  console.log('Photos:', product.photos);

  return (
    <div className="flex flex-col sm:h-[277px] h-[193px] w-full sm:w-[220px] justify-center items-center hover:bg-slate-50 border-r shadow-md">
      <div className="sm:h-[237px] h-[200px] p-2">
        <Image
          src={product.photos[0]}
          alt={product.name}
          width={70}
          height={100}
          className="w-full h-[75px] sm:h-[121px]"
        />

        <div className="mt-5 flex justify-between font-manrope text-xs font-bold text-[#8D7A6B] gap-10 items-center">
          <p className=" leading-[16.39px]">{product.name}</p>
          <p className="font-montserrat text-xs">{amount}</p>
        </div>
        <div className=" flex justify-between text-[#D4A373] font-manrope text-xs font-bold gap-10 items-center">
          <p className=" leading-[16.39px]">⭐⭐⭐⭐☆</p>
          <p className="font-montserrat text-xs">– +</p>
        </div>
        <div className=" flex justify-between gap-10 items-center">
          <p className="font-manrope text-[#A3D9A5] text-xs font-normal leading-[16.39px] text-left">
            In Stock  {product.availability_quantity}
          </p>
          <p className="text-[#8D7A6B]">❶</p>
        </div>
      </div>
      <Link
        href="/cart"
        className="text-sm text-center items-center justify-center bg-[#A3D9A5] hover:bg-[#b9ebbb] sm:h-[40px] leading-normal w-full"
      >
        <p className="font-manrope text-sm font-semibold leading-[20.49px] hover:text-white sm:p-2 text-[#FBF6F1]">
          Add to Cart
        </p>
      </Link>
    </div>
  );
};
export default ProductCard;
