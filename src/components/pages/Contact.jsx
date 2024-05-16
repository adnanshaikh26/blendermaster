import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="w-full flex justify-center items-center pt-10 pb-10 bg-[url(https://theme.zdassets.com/theme_assets/1403143/b6298368feb4792318eed5ada4ee089ca76d9b3a.png)] bg-cover">
        <div
          className=" w-1/3 bg-smallTextColor p-5 m-5 rounded-sm shadow-lg"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h1 className=" text-white font-[800] text-[3.5vmax] text-center">
            Help Center
          </h1>
          <div className="flex gap-3 items-center justify-center text-white text-[1.5vmax] ">
            <i className="ri-search-line"></i>
            <input
              type="text"
              className="text-[1.2vmax] text-gray-500  rounded-md border-0 px-2 py-1"
              placeholder="Any Enquiry"
            />
          </div>
        </div>
      </div>
      <div className=" container gap-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 p-10">
        {/* Card ONE */}
        <div
          className="rounded overflow-hidden shadow-lg"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div className="overflow-hidden h-[55%]">
            <img
              src="https://theme.zdassets.com/theme_assets/1403143/c2d0b26f2aa684f595f5364471da547cdf957b4c.jpg"
              alt="GirlIMage"
              className="w-full h-full hover:scale-110 overflow-hidden duration-500 ease-in-out"
            />
          </div>
          <div className="px-5 py-6 text-center">
            <h2 className="text-[1.9vmax] text-smallTextColor font-[600]">
              Find Store
            </h2>
            <p className=" text-[1vmax] text-gray-700 font-[500]">
              Find store in your area
            </p>
            <button className="px-3 bg-primaryColor py-2 mt-2 rounded text-white hover:bg-white hover:text-primaryColor duration-500 ease-in hover:border-l-primaryColor hover:border-b-2">
              View Store
            </button>
          </div>
        </div>
        {/* Card TWO */}
        <div
          className="rounded overflow-hidden shadow-lg"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="overflow-hidden h-[55%]">
            <img
              src="https://theme.zdassets.com/theme_assets/1403143/8b267751ed5210be6ff60dfb676841536d10ca3d.jpg"
              alt="GirlIMage"
              className="w-full hover:scale-110 overflow-hidden duration-500 ease-in-out "
            />
          </div>
          <div className="px-5 py-6 text-center">
            <h2 className="text-[1.9vmax] text-smallTextColor font-[600]">
              Birthday Boost
            </h2>
            <p className=" text-[1vmax] text-gray-700 font-[500]">
              Learn how they work
            </p>
            <button className="px-3 bg-primaryColor py-2 mt-2 rounded text-white hover:bg-white hover:text-primaryColor duration-500 ease-in hover:border-l-primaryColor hover:border-b-2">
              View Article
            </button>
          </div>
        </div>
        {/* Card THREE */}
        <div
          className="rounded overflow-hidden shadow-lg"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <div className="overflow-hidden h-[55%]">
            <img
              src="https://theme.zdassets.com/theme_assets/1403143/7d8d6d62c8d209c4ee323c4b94b53fddffa689aa.jpg"
              alt="GirlIMage"
              className="w-full hover:scale-110 duration-500 ease-in-out"
            />
          </div>
          <div className="px-5 py-6 text-center">
            <h2 className="text-[1.9vmax] text-smallTextColor font-[600]">
              Feedback
            </h2>
            <p className=" text-[1vmax] text-gray-700 font-[500]">
              Have feedback? Use our simple form to let us know
            </p>
            <button className="px-3 bg-primaryColor py-2 mt-2 rounded text-white hover:bg-white hover:text-primaryColor duration-500 ease-in hover:border-l-primaryColor hover:border-b-2">
              View Store
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
