import React from "react";

const BannerImg = {
  backgroundImage: `url('https://th.bing.com/th/id/OIP.96wcHPC3YJRYkLKkuJxy5wHaDt?rs=1&pid=ImgDetMain')`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subcribe = () => {
  return (
    <div
      className="mb-20 bg-gray-100 dark:bg-gray-80 text-white"
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-x-6 max-w-xl mx-auto">
          <h1 className="text-2xl text-center sm:text-left sm:text-left sm:text-4xl  font-semibold">
            Get notifield about new Products
          </h1>
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full p-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Subcribe;
