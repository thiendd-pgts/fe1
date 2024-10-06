"use client";

import AOS from "aos";
import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa";

const ProductData = [
  {
    _id: 1,
    src: "/images/shrimp.png",
    age: 24,
    gender: "Male",
    email: "jimmy@gmail.com",
  },
  {
    _id: 2,
    src: "/images/bambooshootE.png",
    age: 20,
    gender: "Female",
    email: "elena@gmail.com",
  },
  {
    _id: 3,
    src: "/images/flesh.png",
    age: 25,
    gender: "Female",
    email: "caroline@gmail.com",
  },
  {
    _id: 4,
    src: "/images/fish.png",
    age: 23,
    gender: "Male",
    email: "elan@gmail.com",
  },
];
const Products = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="mt-14 mb-12 fade-up">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm text-orange-400">
            {" "}
            Top selltin Product for you
          </p>
          <h1 className="text-3xl font-bold">Products</h1>
          <p>abcss</p>
        </div>
        {/* body section */}
        <div className="">
          <div className="grid grid-cols-1 sm: grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card setion */}
            {ProductData.map((data) => (
              <div
                className=""
                key={data._id}
                data-aos="fade-up"
                data-oas-delay={data.age}
              >
                <img
                  data-aos="fade-up"
                  src={data.src}
                  alt=""
                  className="h-[220px] h-[150px] object-cover rounded-sm"
                />
                <h3 data-aos="fade-up" className="font-bold">
                  {data.email}
                </h3>
                <p data-aos="fade-up" className="text-sm text-gray-500">
                  {data.gender}
                </p>
                <div data-aos="fade-up" className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span className="">{data.age}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
