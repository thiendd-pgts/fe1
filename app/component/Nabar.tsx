"use client";

import React from "react";
import { CiSearch } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { FaCaretDown } from "react-icons/fa";
import Darkmode from "./Darkmode";

const Menu = [
  { id: 1, name: "Trang Chủ", link: "#home" },
  { id: 2, name: "Giới Thiệu", link: "#about" },
  { id: 3, name: "Dịch Vụ", link: "#services" },
  { id: 4, name: "Liên Hệ", link: "#contact" },
];

const DropdownLink = [
  { id: 1, name: "Trang Chủ", link: "#home" },
  { id: 2, name: "Giới Thiệu", link: "#about" },
  { id: 3, name: "Dịch Vụ", link: "#services" },
  { id: 4, name: "Liên Hệ", link: "#contact" },
];

export default function Nabar() {
  return (
    <div className="shadow-sm bg-white dark:bg-gray-900 dark:text-white relative z-40">
      {/* upper class */}
      <div className="bg-orange-400/40 py-3 sm:py-0">
        <div className="container flex justify-between items-center">
          <div className="">
            <a href="" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src="/images/logo.png" alt="" className="w-10 uppercase" />
              Shopsy
            </a>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div className="group relative hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus-within:outline-none focus:border-1 focus:border-primary"
              />
              <CiSearch className="text-gray-500 group-hover:text-orange-500 absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            <div className="flex justify-between items-center ">
              <button className="bg-gradient-to-r from-orange-400 to-black transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group  ">
                <span className="group-hover:block hidden transition-all duration-200">
                  Order
                </span>
                <LuShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer " />
              </button>
              {/* Dark mode Switch  */}
              <div className="">
                <Darkmode />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* low class */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                className="inline-block px-4   hover:text-orange-400 duration-200"
                href={data.link}
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer  ">
            <a href="" className="flex items-center gap-[2px]  py-2">
              Trending product
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black">
              <ul>
                <li>
                  {DropdownLink.map((data) => (
                    <li key={data.id}>
                      <a
                        href={data.link}
                        className="inline-block w-full gap-[2px] px-2 rounded-md hover:bg-orange-400/20"
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
