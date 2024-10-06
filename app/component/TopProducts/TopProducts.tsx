import React from "react";

const TopProducts = () => {
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
  ];

  return (
    <div className="container">
      <div className="text-center mb-10 max-w-[600px] mx-auto">
        <p className="text-sm text-orange-400"> Top selltin Product for you</p>
        <h1 className="text-3xl font-bold">Products</h1>
        <p>abcss</p>
      </div>

      {/* body section */}
      <div className="grid grid-cols-1 sm: grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center md:gap-5">
        {ProductData.map((data) => (
          <div
            className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:bg-primary hoer:text-white relative shadow-xl duration-100 group max-w-[300px]"
            key={data._id}
          >
            {/* image section */}
            <div className="h-[100px]">
              <img
                src={data.src}
                alt=""
                className="max-w-[140px] block mx-auto 
                 transform -translate-y-20 group-hover:scale-105 
                 duration-300 drop-shadow-md"
              />
            </div>
            {/* detail section  */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
