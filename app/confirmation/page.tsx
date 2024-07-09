import Image from "next/image";
import Link from "next/link";

const OrderConfirmation = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="wrapper mt-20">
        <Link
          href="/"
          className="absolute top-10 sm:right-40 right-0 p-4 cursor-pointer"
        >
          <Image src="/icons/cancel.svg" width={30} height={30} alt="back" />
        </Link>
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-manrope text-[25px] font-bold leading-[27.32px] text-left text-[#312B25]">
            Thanks for your Order!
          </h2>
          <p className="font-manrope sm:text-[24px] font-normal mt-5 sm:leading-[32.78px] text-left text-[#3F3730]">
            Your order confirmation and receipt has been sent to your email.
          </p>
        </div>
        <table className="w-full text-sm text-left ">
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
                  <p className="font-manrope sm:text-[12px] text-xs sm:leading-[27.32px] mt-5 text-left text-[#A3D9A5]">
                    1pcs
                  </p>
                </div>
              </td>
              <td className="px-6 py-4 font-medium text-[#8D7A6B]">$20</td>

              <td className="px-6 py-4 font-medium text-[#8D7A6B]">
                Processing
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
                  <p className="font-manrope sm:text-[12px] text-xs sm:leading-[27.32px] mt-5 text-left text-[#A3D9A5]">
                    2pcs
                  </p>
                </div>
              </td>
              <td className="px-6 py-4 font-medium text-[#8D7A6B]">$50</td>

              <td className="px-6 py-4 font-medium text-[#8D7A6B]">
                Processing
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
                  <p className="font-manrope sm:text-[12px] text-xs sm:leading-[27.32px] mt-5 text-left text-[#A3D9A5]">
                    4pcs
                  </p>
                </div>
              </td>
              <td className="px-6 py-4 font-medium text-[#8D7A6B]">$100</td>

              <td className="px-6 py-4 font-medium text-[#8D7A6B]">
                Processing
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default OrderConfirmation;
