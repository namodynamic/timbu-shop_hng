import Image from "next/image";
import Link from "next/link";

const Cart = () => {
  return (
    <section className="flex flex-col min-h-screen">
      <div className="wrapper">
      <Link href="/products" >
        <Image src="/icons/backicon.svg" width={30} height={30} alt="back" />
      </Link>
        <table className="w-full mt-10 text-sm text-left ">
          <thead className="text-md text-white bg-[#A3D9A5]">
            <tr>
              <th scope="col" className="px-6 py-3">
                Item
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-6 py-4 items-center flex max-sm:flex-col">
                <Image
                  src="/images/item6.png"
                  alt="Product Image"
                  width={210}
                  height={180}
                  className="rounded-md object-cover"
                />
                <div>
                  <p className="font-manrope sm:text-[20px] text-xs font-bold sm:leading-[27.32px] text-left text-[#8D7A6B]">
                    Coconut Oil
                  </p>
                  <p className="text-[#D4A373]">⭐⭐⭐⭐☆</p>
                  <p className="font-manrope sm:text-[12px] text-xs sm:leading-[27.32px] mt-5 text-left text-[#A3D9A5]">
                    In Stock: 13
                  </p>
                </div>
              </td>
              <td className="px-6 py-4 font-medium text-[#8D7A6B]">$20</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <button className="h-8 w-8 text-[#D4A373]">
                    <MinusIcon />
                  </button>
                  <span className="text-[#8D7A6B]">1</span>
                  <button className="h-8 w-8 text-[#D4A373]">
                    <PlusIcon />
                  </button>
                </div>
              </td>
              <td className="px-6 py-4 font-medium text-[#8D7A6B]">
                <p>$20</p>
                <div className="align-bottom mt-10 gap-2 flex">
                  <p className="text-[20px]">✖ </p>
                  <p>Remove</p>
                </div>
              </td>
            </tr>
            <tr className="border-b">
              <td className="px-6 py-4 items-center flex max-sm:flex-col">
                <Image
                  src="/images/item2.png"
                  alt="Product Image"
                  width={210}
                  height={180}
                  className="rounded-md object-cover"
                />
                <div>
                  <p className="font-manrope sm:text-[20px] text-xs font-bold sm:leading-[27.32px] text-left text-[#8D7A6B]">
                    Virgin Oil
                  </p>
                  <p className="text-[#D4A373]">⭐⭐⭐⭐☆</p>
                  <p className="font-manrope sm:text-[12px] text-xs sm:leading-[27.32px] mt-5 text-left text-[#A3D9A5]">
                    In Stock: 11
                  </p>
                </div>
              </td>
              <td className="px-6 py-4 font-medium text-[#8D7A6B]">$25</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <button className="h-8 w-8 text-[#D4A373]">
                    <MinusIcon />
                  </button>
                  <span className="text-[#8D7A6B]">2</span>
                  <button className="h-8 w-8 text-[#D4A373]">
                    <PlusIcon />
                  </button>
                </div>
              </td>
              <td className="px-6 py-4 font-medium text-[#8D7A6B]">
                <p>$50</p>
                <div className="align-bottom mt-10 gap-2 flex">
                  <p className="text-[20px]">✖ </p>
                  <p>Remove</p>
                </div>
              </td>
            </tr>

            <tr className="border-b">
              <td className="px-6 py-4 items-center flex max-sm:flex-col">
                <Image
                  src="/images/item13.png"
                  alt="Product Image"
                  width={210}
                  height={180}
                  className="rounded-md object-cover"
                />
                <div>
                  <p className="font-manrope sm:text-[20px] text-xs font-bold sm:leading-[27.32px] text-left text-[#8D7A6B]">
                    Snake Oil
                  </p>
                  <p className="text-[#D4A373]">⭐⭐⭐⭐☆</p>
                  <p className="font-manrope sm:text-[12px] text-xs sm:leading-[27.32px] mt-5 text-left text-[#A3D9A5]">
                    In Stock: 12
                  </p>
                </div>
              </td>
              <td className="px-6 py-4 font-medium text-[#8D7A6B]">$25</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <button className="h-8 w-8 text-[#D4A373]">
                    <MinusIcon />
                  </button>
                  <span className="text-[#8D7A6B]">4</span>
                  <button className="h-8 w-8 text-[#D4A373]">
                    <PlusIcon />
                  </button>
                </div>
              </td>
              <td className="px-6 py-4 font-medium text-[#8D7A6B]">
                <p>$100</p>
                <div className="align-bottom mt-10 gap-2 flex">
                  <p className="text-[20px]">✖ </p>
                  <p>Remove</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex justify-between mt-10 text-bold sm:px-40 text-[#8D7A6B]">
          <p>Sum Total</p>
          <p>$170.00</p>
        </div>

        <Link
          href="/checkout"
          className="font-manrope  text-[16px] w-full px-10 py-2 border rounded-md mt-10 bg-[#D4A373] hover:bg-[#D4A373]/70 flex justify-center items-center font-bold leading-[21.86px] text-[#fff] text-center"
        >
          Proceed
        </Link>
      </div>
    </section>
  );
};
export default Cart;

function MinusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
