import Image from "next/image";
import Link from "next/link";

const Checkout = () => {
  return (
    <section className="min-h-screen mt-20 wrapper">
      <Link href="/">
        <Image src="/icons/backicon.svg" width={30} height={30} alt="back" />
      </Link>
      <div className="flex flex-col items-center">
        <h1 className="font-manrope text-[24px] font-bold leading-[32.78px] text-left text-[#3F3730]">
          Checkout
        </h1>
      </div>
      <div className="justify-between flex flex-col gap-10 mt-10 sm:mt-20 sm:flex-row">
        <div className="flex flex-col w-full p-6">
          <div>
            <h3 className="font-manrope text-[16px] font-bold leading-[21.86px] text-left text-[#3F3730]">
              Contact Information
            </h3>
            <form className="flex flex-col mt-10">
              <div className="gap-5 w-full flex flex-col sm:flex-row">
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="murielonuorah@gmail.com"
                />
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  type="number"
                  placeholder="+2348111300219"
                />
              </div>
              <div className="gap-5 mt-5 w-full flex flex-col sm:flex-row">
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Francisca"
                />
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Onuorah"
                />
              </div>
            </form>
          </div>

          <div className="mt-5">
            <div className="flex justify-between">
              <h3 className="font-manrope text-[16px] font-bold leading-[21.86px] text-left text-[#3F3730]">
                Shipping Address
              </h3>
              <p className="font-manrope text-base font-bold leading-[21.86px] text-left text-[#D4A373]">
                Clear
              </p>
            </div>
            <form className="flex flex-col mt-5">
              <div className="gap-5 w-full flex flex-col sm:flex-row">
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  type="address"
                  placeholder="Micheal Okeleke street, 1st plaza 2nd floor, "
                />
              </div>

              <div className="gap-5 mt-5 w-full flex flex-col sm:flex-row">
                <select
                  className="flex h-10 w-full rounded-md border  px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="text"
                  name="state"
                >
                  <option value="">Delta</option>
                  <option value="1">Lagos</option>
                  <option value="2">Ebonyi</option>
                </select>
                <select
                  className="flex h-10 w-full rounded-md border  px-3 py-2 text-sm ring-offset-background  file:bg-transparent  placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="text"
                  name="city"
                >
                  <option value="">Lagos</option>
                  <option value="1">Asaba</option>
                  <option value="2">Abuja</option>
                </select>
              </div>

              <div className="gap-5 mt-5 w-[49%] flex flex-col sm:flex-row">
                <input
                  className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background  file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  type="number"
                  placeholder="1234"
                />
              </div>
            </form>
            <div className="flex mt-5  gap-6">
              <p className="font-manrope text-[22px] font-bold leading-[21.86px] text-left text-[#8D7A6B]">
                ☑
              </p>
              <p className="font-manrope text-[16px] font-bold leading-[21.86px] text-left text-[#3F3730]">
                Ship to another address
              </p>
            </div>
            <div className="flex mt-5  gap-6">
              <p className="font-manrope text-[22px] font-bold leading-[21.86px] text-left text-[#8D7A6B]">
                ☑
              </p>
              <p className="font-manrope text-[16px] font-bold leading-[21.86px] text-left text-[#3F3730]">
                Save this information for next time{" "}
              </p>
            </div>

            <Link
              href="/"
              className="font-manrope max-sm:hidden text-[16px] w-full px-10 py-2 border rounded-md mt-10 bg-[#D4A373] hover:bg-[#D4A373]/70 flex justify-center items-center font-bold leading-[21.86px] text-[#fff] text-center"
            >
              Proceed
            </Link>
          </div>
        </div>

        <div className="sm:w-[40%] shadow-sm  h-[290px] bg-[#D4A373]/5">
          <div className="p-10">
            <div className="grid gap-4">
              <div className="flex items-center border-b py-2 justify-between">
                <p>Sum Total</p>
                <p className="font-medium">$170.00</p>
              </div>
              <div className="flex items-center border-b py-2 justify-between">
                <p>Delivery Fee</p>
                <p className="font-medium">$12.00</p>
              </div>

              <div className="flex items-center justify-between font-medium text-lg">
                <p>Grand Total</p>
                <p>$182.00</p>
              </div>
            </div>
          </div>

          <div className="px-10">
            <h3 className="justify-center items-center text-center text-[20px] font-bold leading-[27.32px] text-[#3F3730]">
              Select Payment Method
            </h3>
            <div className="flex justify-between items-center mb-5 flex-row">
              <div className="gap-2 flex">
                <p className="text-[#D4A373]">◉</p>
                <p>Pay with card</p>
              </div>
              <div className="gap-2 flex items-center">
                <p className="text-[#D4A373]  text-[30px]">○</p>
                <p>Pay on Spot</p>
              </div>
            </div>
          </div>
        </div>

        <Link
          href="/"
          className="font-manrope text-[16px] sm:hidden w-full px-10 py-2 border rounded-md mt-10 bg-[#D4A373] hover:bg-[#D4A373]/70 flex justify-center items-center font-bold leading-[21.86px] text-[#fff] text-center"
        >
          Proceed
        </Link>
      </div>
    </section>
  );
};
export default Checkout;
