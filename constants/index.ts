import { item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15 } from "@/public/images";


export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/orders", label: "Orders" },
];



export const products = [
    {
        imgURL: item1,
        name: "Argon Oil",
        price: "$30",
        availability: "In Stock 14",
    },
    {
        imgURL: item2,
        name: "Virgin oil",
        price: "$30",
        availability: "In Stock 28",
    },
    {
        imgURL: item3,
        name: "Vitamin C extract",
        price: "$20",
        availability: "In Stock 20",
    },
    {
        imgURL: item4,
        name: "Argon oil",
        price: "$30",
        availability: "In Stock 10",
    },
    {
        imgURL: item5,
        name: "Mint Serum",
        price: "$30",
        availability: "In Stock 4",
    },
    {
        imgURL: item6,
        name: "Coconut Oil",
        price: "$30",
        availability: "In Stock 14",
    },
    {
        imgURL: item7,
        name: "Lavender Oil",
        price: "$20",
        availability: "In Stock 4",
    },
    {
        imgURL: item8,
        name: "Avocado Oil",
        price: "$25",
        availability: "In Stock 14",
    },
    {
        imgURL: item9,
        name: "Peppermint gel",
        price: "$30",
        availability: "In Stock 14",
    },
    {
        imgURL: item10,
        name: "Tumeric extract",
        price: "$20",
        availability: "In Stock 12",
    },
    {
        imgURL: item11,
        name: "Vitamin C + Tumeric",
        price: "$25",
        availability: "In Stock 14",
    },
    {
        imgURL: item12,
        name: "Eucalyptus Oil",
        price: "$30",
        availability: "In Stock 14",
    },
    {
        imgURL: item13,
        name: "Snake Oil",
        price: "$30",
        availability: "In Stock 14",
    },
    {
        imgURL: item14,
        name: "Vitamin E oil",
        price: "$30",
        availability: "In Stock 14",
    },
    {
        imgURL: item15,
        name: "Massage oil",
        price: "$30",
        availability: "In Stock 12",
    },
];

export const bestSellers = products.slice(5, 9);

export const footerLinks = [
  {
    title: "Social Media:",
    links: [
      { name: "Instagram", link: "www.instagram.com" },
      { name: "Facebook", link: "www.facebook.com" },
      { name: "Twitter", link: "www.twitter.com" },
      
    ],
  },
  {
    title: "About",
    links: [
      { name: "Home", link: "/" },
      { name: "Products", link: "/products" },
      { name: "Checkout", link: "/checkout" },
      { name: "Cart", link: "/cart" },
    ],
  },
  
];

