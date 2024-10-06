import React from "react";
import { GrSecure } from "react-icons/gr";

const Banner = () => {
  return (
    <div className="min-h-[500px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <div className="">
            <img
              src="https://th.bing.com/th?id=OIP.H5ajVhkvftT1lMyaUuknGgHaEy&w=311&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              alt=""
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>

          {/* text detail section  */}
          <div className="flex flex-col justify-center tracking-wide gap-6 sm:pt-0">
            <h1 className="text-3xl sm:text-gray-500 font-bold ">
              Winner Sale upto 50%
            </h1>
            <p className="text-sm text-gray-500 tracking-wide leading-5">
              Lorem ipsum dosit amet consecletur adpissciing fawue
            </p>

            <div className="">
              <div className="flex items-center gap-4 ">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Quanlity Products</p>
              </div>
              <div className="flex items-center gap-4 ">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Quanlity Products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
