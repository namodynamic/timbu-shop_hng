'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlus, FaMinus } from 'react-icons/fa';

const initialCartItems = [
  { id: 1, name: 'Coconut Oil', price: 20.0, quantity: 1, image: '/images/item6.png', inStock: 13 },
  { id: 2, name: 'Virgin Oil', price: 25.0, quantity: 2, image: '/images/item2.png', inStock: 11 },
  { id: 3, name: 'Snake Oil', price: 25.0, quantity: 4, image: '/images/item13.png', inStock: 12 },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const increment = (id: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrement = (id: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const sumTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <section className="flex flex-col min-h-screen">
      <div className="wrapper">
        <Link href="/products">
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
            {cartItems.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="px-6 py-4 items-center flex max-sm:flex-col">
                  <Image
                    src={item.image}
                    alt="Product Image"
                    width={210}
                    height={180}
                    className="rounded-md object-cover"
                  />
                  <div>
                    <p className="font-manrope sm:text-[20px] text-xs font-bold sm:leading-[27.32px] text-left text-[#8D7A6B]">
                      {item.name}
                    </p>
                    <p className="text-[#D4A373]">⭐⭐⭐⭐☆</p>
                    <p className="font-manrope sm:text-[12px] text-xs sm:leading-[27.32px] mt-5 text-left text-[#A3D9A5]">
                      In Stock: {item.inStock}
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4 font-medium text-[#8D7A6B]">${item.price.toFixed(2)}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="h-8 w-8 text-[#D4A373]" onClick={() => decrement(item.id)}>
                      <FaMinus />
                    </button>
                    <span className="text-[#8D7A6B]">{item.quantity}</span>
                    <button className="h-8 w-8 text-[#D4A373]" onClick={() => increment(item.id)}>
                      <FaPlus />
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 font-medium text-[#8D7A6B]">
                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                  <div className="align-bottom mt-10 gap-2 flex" onClick={() => removeItem(item.id)}>
                    <p className="text-[20px]">✖ </p>
                    <p>Remove</p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between mt-10 text-bold sm:px-40 text-[#8D7A6B]">
          <p>Sum Total</p>
          <p>${sumTotal}</p>
        </div>

        <Link
          href="/checkout"
          className="font-manrope text-[16px] w-full px-10 py-2 border rounded-md mt-10 bg-[#D4A373] hover:bg-[#D4A373]/70 flex justify-center items-center font-bold leading-[21.86px] text-[#fff] text-center"
        >
          Checkout
        </Link>
      </div>
    </section>
  );
};

export default Cart;
