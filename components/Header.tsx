"use client";

import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const isActive = pathname === "/cart";

  return (
    <>
      <section className="bg-[#595651] justify-center flex items-center  sm:h-[235px]">
        <Image
          src="/images/avocado.png"
          width={427}
          height={249}
          alt="logo"
          className="absolute flex max-sm:hidden justify-center items-center text-center -top-[22px] -left-[120px] opacity-[50%] transform"
        />
        <Image
          src="/images/avocado1.png"
          width={517}
          height={235}
          alt="logo"
          className="absolute flex max-sm:hidden justify-center items-center text-center top-[32px] -right-[32px] opacity-[50%]  transform"
        />
        <div className="flex flex-col wrapper items-center">
          <Image
            src="/images/logo.png"
            width={85}
            height={91}
            alt="logo"
            className=""
          />

          <h1 className="text-[#A3D9A5] font-manrope text-lg font-bold leading-[27.32px] text-right">
            Discover Nature&apos;s Essence
          </h1>
          <p className=" text-white text-center font-manrope font-bold text-base leading-tight">
            Pure, Natural, and Therapeutic Essential Oils Delivered to Your
            Doorstep
          </p>
        </div>
      </section>

      <section className="wrapper">
        <div className="flex justify-between">
          <ul className="flex flex-1 justify-center items-center gap-[50px]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li
                  className="text-[#EEEBE9] hover:text-[#D4A373]"
                  key={link.href}
                >
                  <a
                    href={link.href}
                    className={isActive ? "text-[#D4A373]" : ""}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {isActive ? (
            <Link
              className=" bg-[#D4A373] hover:bg-[#D4A373]/50 rounded-[5px] h-[60px] w-[60px] flex items-center justify-center"
              href="/cart"
            >
              <Image
                src="/icons/cart-active.svg"
                width={39}
                height={30}
                alt="cart"
                className="cursor-pointer"
              />
            </Link>
          ) : (
            <Link
              className=" bg-[#F2E2D4] hover:bg-[#F2E2D4]/50 rounded-[5px] h-[60px] w-[60px] flex items-center justify-center"
              href="/cart"
            >
              <Image
                src="/icons/cart.svg"
                width={39}
                height={30}
                alt="cart"
                className="cursor-pointer"
              />
            </Link>
          )}
        </div>
      </section>
    </>
  );
};
export default Header;
