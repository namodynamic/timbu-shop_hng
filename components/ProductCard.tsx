import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ imgURL, name, price, availability }: ProductProps) => {
  return (
    <div className="flex flex-col h-[277px] justify-center items-center border-r shadow-md w-[210px]">
      <div className="h-[237px] p-2">
        <Image src={imgURL} alt={name} className="w-[121px] h-[121px]" />

        <div className="mt-5 flex justify-between font-manrope text-xs font-bold text-[#8D7A6B] gap-10 items-center">
          <p className=" leading-[16.39px]">{name}</p>
          <p className="font-montserrat text-xs">{price}</p>
        </div>
        <div className=" flex justify-between text-[#D4A373] font-manrope text-xs font-bold gap-10 items-center">
          <p className=" leading-[16.39px]">⭐⭐⭐⭐☆</p>
          <p className="font-montserrat text-xs">– +</p>
        </div>
        <div className=" flex justify-between gap-10 items-center">
          <p className="font-manrope text-[#A3D9A5] text-xs font-normal leading-[16.39px] text-left">
            {availability}
          </p>
          <p className="text-[#8D7A6B]">❶</p>
        </div>
      </div>
      <Link
        href="/cart"
        className="text-sm text-center items-center justify-center bg-[#A3D9A5] hover:bg-[#b9ebbb] h-[40px] leading-normal w-full"
      >
        <p className="font-manrope text-sm font-semibold leading-[20.49px] hover:text-white p-2 text-[#FBF6F1]">
          Add to Cart
        </p>
      </Link>
    </div>
  );
};
export default ProductCard;
