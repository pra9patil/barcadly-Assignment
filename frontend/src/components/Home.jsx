import { useState } from "react";

function Home({cart ,addToCart}) {


  const product = [
    {
      id: 1,
      title: "My First Book of Pencil Control",
      author: "by Wonder House Books | 25 April 2018",
      price: 89,
      img: "https://m.media-amazon.com/images/I/810OOg88LoL._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
      status: "Order Received",
      userEmail:"",
    },
    {
      id: 2,
      title: "108 Panchatantra Stories",
      author: "by Maple Press  | 1 September 2020",
      price: 98,
      img: "https://m.media-amazon.com/images/I/71rmxx8P2qL._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
      status: "Order Received",
      userEmail:"",
    },
    {
      id: 3,
      title: "Amazing Questions & Answers Science",
      author: "by Om Books Editorial Team  | 25 November 2018",
      price: 143,
      img: "https://m.media-amazon.com/images/I/81Gbz0XnW7L._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
      status: "Order Received",
      userEmail:"",
    },
    {
      id: 4,
      title: "My First Book of Pencil Control",
      author: "by Wonder House Books | 25 April 2018",
      price: 57,
      img: "https://m.media-amazon.com/images/I/81Gbz0XnW7L._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
      status: "Order Received",
      userEmail:"",
    },
    {
      id: 5,
      title: "My First 1000 Words",
      author: "by Wonder House Books  | 1 January 2018",
      price: 149,
      img: "https://m.media-amazon.com/images/I/71O-FI7QApL._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
      status: "Order Received",
      userEmail:"",
    },
    {
      id: 6,
      title: "101 Panchatantra Stories for Children",
      author: "by Om Books Editorial Team | 30 September 2020",
      price: 135,
      img: "https://m.media-amazon.com/images/I/9173YBkMIsL._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
      status: "Order Received",
      userEmail:"",
    },
    {
      id: 7,
      title: "Pre-School Activities Pack ",
      author: "by Om Books Editorial Team  | 1 January 2021",
      price: 693,
      img: "https://m.media-amazon.com/images/I/913sv4sex3L._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
      status: "Order Received",
      userEmail:"",
    },
    {
      id: 8,
      title: "Early Learning Library Pack 1",
      author: "by Wonder House Books  | 6 December 2020",
      price: 289,
      img: "https://m.media-amazon.com/images/I/71xMttNhr7L._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
      status: "Order Received",
      userEmail:"",
    },
    {
      id: 9,
      title: "Blossom Moral Story Book for Kids ",
      author: "by Content Team at Target Publications",
      price: 80,
      img: "https://m.media-amazon.com/images/I/7122h3jWvEL._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
      status: "Order Received",
      userEmail:"",
    },
    {
      id: 10,
      title: "Brain Activity Book for Kids",
      author: "by Maple Press | 1 September 2021",
      price: 86,
      img: "https://m.media-amazon.com/images/I/7175YpTSa7L._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
      status: "Order Received",
      userEmail:"",
    },
    {
      id: 11,
      title: "Willy the Silly Panda",
      author: "by Rebecca Smith  | 14 December 2021",
      price: 120,
      img: "https://m.media-amazon.com/images/I/71-ocPGQIJL._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
      status: "Order Received",
      userEmail:"",
    },
    {
      id: 12,
      title: "Grandma's Bag of Stories",
      author: "by Sudha Murty | 1 January 2015",
      price: 157,
      img: "https://m.media-amazon.com/images/I/81jv44QdNwL._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
      status: "Order Received",
      userEmail:"",
    },
  ];

  <link
    rel="stylesheet"
    href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
    integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
    crossorigin="anonymous"
  />;

  return (
    <div className="w-10/12 my-10 mx-auto ">
      <h1 className="text-3xl font-bold my-8">
        Welcome to our E-Commerce Store
      </h1>
      <div className="grid grid-cols-3 gap-10">
        {product.map((item) => (
          <div key={item.id} className="border p-4 hover:scale-105 shadow-lg hover:shadow-2xl">
            <div className="flex justify-center h-52">
                <img src={item.img} alt="" />
            </div>
            <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
            <p className="text-gray-700  text-2xl font-semibold mb-2">${item.price}</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => addToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home;
