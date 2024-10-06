import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa";

const footerLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/#contact" },
  { title: "Blog", link: "/blog" },
];

const BannerImg = {
  backgroundImage: `url('https://th.bing.com/th/id/OIP.96wcHPC3YJRYkLKkuJxy5wHaDt?rs=1&pid=ImgDetMain')`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Footer = () => {
  return (
    <div className="text-white mb-20">
      <div className="container" style={BannerImg}>
        <div className="grid md:grid-cols-3 pb-44 pt-5">
          {/* company detail */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={BannerImg} alt="" className="max-w-[500px]" />
            </h1>
            <p>46573iu5tjkhgfmbhvfgrt64reysgfhjcbxn </p>
          </div>
          {/* footer link */}
          <div className="">
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                  Importt Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {footerLinks.map((data) => (
                    <li
                      className="cursor-pointer hover:text-orange-400 hover:translate-x-1 duration-300 text-gray-300"
                      key={data.link}
                    >
                      <span>{data.title}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                  Importt Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {footerLinks.map((data) => (
                    <li
                      className="cursor-pointer hover:text-orange-400 hover:translate-x-1 duration-300 text-gray-300"
                      key={data.link}
                    >
                      <span>{data.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* social links */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mt-6">
              <a href="">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>Noida, Uttur Pradesh</p>
              </div>
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>Noida, Uttur Pradesh</p>
              </div>
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>Noida, Uttur Pradesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
