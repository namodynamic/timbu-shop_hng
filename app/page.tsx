import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center  min-h-screen wrapper">
      <div className="flex flex-col">
        <div>
          <h2 className="font-manrope text-[25px] font-bold leading-[27.32px] text-left text-[#312B25]">
            Welcome to Your Oasis of Calm
          </h2>
          <p className="font-manrope text-[20px] font-normal leading-[27.32px] text-left text-[#3F3730] mt-5">
            Discover the power of nature with our premium essential oils. At
            Frin Essentials, we believe in the transformative power of pure,
            high-quality oils to enhance your well-being and create a tranquil
            environment. Whether you&apos;re looking to unwind after a long day,
            boost your mood, or support your overall health, we have the perfect
            blend for you.
          </p>
        </div>
        <h2 className="font-manrope text-[25px] font-bold leading-[27.32px] mt-10 text-left text-[#312B25]">
          Explore Our Collection
        </h2>
        <div className="flex sm:gap-20 gap-10 mt-10 max-sm:flex-col">
          <Image
            src="/images/item5.png"
            width={252}
            height={249}
            alt="avocado"
            className=""
          />
          <p className="max-w-[587px] font-manrope text-[20px] font-normal leading-[27.32px] text-left text-[#3F3730]">
            At <span className="font-bold">Frin Essentials</span>, we make
            shopping easy and enjoyable. Enjoy fast shipping, secure payment
            options, and a hassle-free return policy. We&apos;re dedicated to
            making your experience as smooth and pleasant as possible.
          </p>
        </div>
        <h2 className="font-manrope text-[25px] font-bold leading-[27.32px] mt-10 text-left text-[#312B25]">
          100% Pure and Natural
        </h2>
        <div className="flex sm:gap-20 gap-10 mt-10 max-sm:flex-col">
          <p className="max-w-[587px] font-manrope text-[20px] font-normal leading-[27.32px] text-left text-[#3F3730]">
            Our oils are free from additives, chemicals, and synthetic
            fragrances. You get only the best nature has to offer.
          </p>
          <Image
            src="/images/item12.png"
            width={252}
            height={249}
            alt="avocado"
            className=""
          />
        </div>
        <div className="flex sm:gap-20 gap-10 mt-10 max-sm:flex-col-reverse">
          <Image
            src="/images/item11.png"
            width={252}
            height={249}
            alt="avocado"
            className=""
          />
          <div className="flex flex-col">
            <h2 className="font-manrope text-[25px] font-bold leading-[27.32px] mt-10 text-left text-[#312B25]">
              Customer Satisfaction
            </h2>
            <p className="max-w-[587px] mt-5 font-manrope text-[20px] font-normal leading-[27.32px] text-left text-[#3F3730]">
              Your well-being is our top priority. Enjoy a seamless shopping
              experience with our user-friendly website and exceptional customer
              service.
            </p>
          </div>
        </div>
        <div className="flex sm:gap-20 gap-10 mt-10 max-sm:flex-col">
          <div className="flex flex-col">
            <h2 className="font-manrope text-[25px] font-bold leading-[27.32px] mt-10 text-left text-[#312B25]">
              Shop with Confidence
            </h2>
            <p className="max-w-[587px] mt-5 font-manrope text-[20px] font-normal leading-[27.32px] text-left text-[#3F3730]">
              Experience the magic of essential oils with Frin Essentials. Start
              exploring our collection and find your perfect scent today!{" "}
            </p>
          </div>
          <Image
            src="/images/item13.png"
            width={252}
            height={249}
            alt="avocado"
            className=""
          />
        </div>

        <div className="flex sm:gap-20 gap-10 mt-10 max-sm:flex-col-reverse">
          <Image
            src="/images/item6.png"
            width={252}
            height={249}
            alt="avocado"
            className=""
          />
          <div className="flex flex-col">
            <h2 className="font-manrope text-[25px] font-bold leading-[27.32px] mt-10 text-left text-[#312B25]">
              Ethically Sourced{" "}
            </h2>
            <p className="max-w-[587px] mt-5 font-manrope text-[20px] font-normal leading-[27.32px] text-left text-[#3F3730]">
              We partner with responsible growers and distillers to ensure
              sustainability and fairness.
            </p>
          </div>
        </div>
        <div></div>
      </div>
      <Link
        href="/products"
        className="bg-[#D4A373] rounded-[8px] hover:bg-[#ebc6a1] text-white font-manrope text-[20px]  font-normal leading-[27.32px] text-center w-full sm:w-[506px] px-10 py-3 mt-20"
      >
        View all Products{" "}
      </Link>
    </main>
  );
}
