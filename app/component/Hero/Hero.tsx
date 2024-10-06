"use client";

/* eslint-disable no-var */
import React from "react";
import Slider from "react-slick";

const images = [
  {
    id: 1,
    src: "https://unsplash.com/photos/a-person-is-working-on-a-laptop-computer-IqhbpZU84_M",
    alt: "Hình 1",
    description:
      "Mô tả cho Hình 1: Hình ảnh này thể hiện một chiếc áo sơ mi nam màu xanh đậm, được thiết kế với chất liệu cotton thoáng mát, thích hợp cho cả môi trường văn phòng và các buổi đi chơi cuối tuần. Áo có các chi tiết may tinh tế, mang đến sự lịch lãm và trẻ trung cho người mặc.",
  },
  {
    id: 2,
    src: "https://unsplash.com/photos/a-person-reaching-out-of-a-window-with-their-hand-dojbCAzOf5w",
    alt: "Hình 2",
    description:
      "Mô tả cho Hình 2: Hình ảnh này giới thiệu một chiếc quần jeans nam phong cách hiện đại, được làm từ chất liệu denim bền bỉ. Với thiết kế ôm sát và kiểu dáng thời trang, chiếc quần này rất phù hợp cho những buổi dạo phố hoặc đi chơi cùng bạn bè. Bạn có thể kết hợp quần jeans với áo thun hoặc áo khoác để tạo nên phong cách riêng.",
  },
  {
    id: 3,
    src: "https://unsplash.com/photos/a-black-and-white-photo-of-a-woman-with-two-faces-g74DVwoIGvM",
    alt: "Hình 3",
    description:
      "Mô tả cho Hình 3: Hình ảnh này thể hiện một chiếc áo khoác nam kiểu dáng bomber, mang đến sự ấm áp và phong cách cho người mặc trong những ngày se lạnh. Với chất liệu chống gió và khả năng giữ nhiệt tốt, áo khoác này là lựa chọn lý tưởng cho các buổi đi chơi hay dã ngoại. Chi tiết khóa kéo và túi xách tiện lợi giúp tăng thêm tính năng cho sản phẩm.",
  },
];

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative overflow-hidden min-h-[500] sm:min-h-[650px] bg-gray-100 flex justify-center items-end dark:bg-gray-950 dark:text-white duration-200">
      {/* backgroung pattern */}
      <div className="h-[700px] w-[700px] bg-orange-400/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {images.map((data) => (
            <div className="" key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className=" flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <div className="">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                      Lorem isum cloer sit
                    </h1>
                    <p className="text-sm">
                      Hình ảnh này thể hiện một chiếc áo khoác nam kiểu dáng bom
                    </p>
                  </div>
                  {/* text content section */}
                  <div className="">
                    <button className="bg-gradient-to-r from-primary to-orange-700 hover:scale-105 duration-200 text-black py-2 px-4">
                      Order now
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className=" order-1 sm:order-2">
                  <div className="">
                    <img
                      src="/images/shrimp.png"
                      alt="Người đang làm việc trên máy tính xách tay"
                      className="w-[300px] h-[300px] sm:h-[450px] h-[450px] sm:scale-125 sm:scale-100 object-contain mx-auto "
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
