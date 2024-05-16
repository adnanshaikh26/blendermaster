import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import shadowImage from "../../assets/cup_shadow.png";
import berryShake from "../../assets/All-Berry-Bang_cup.png";
import berryShakeINd from "../../assets/All-Berry-Bang_ingredients-1.png";
import bananaShake from "../../assets/Banana-Buzz_cup.png";
import bananaShakeInd from "../../assets/Banana-Buzz_ingredients.png";
import berryCrushShake from "../../assets/Berry-Crush_cup.png";
import berryCrushShakeInd from "../../assets/Berry-Crush_ingredients.png";
import blueBerryShake from "../../assets/Blueberry-Blast_cup.png";
import blueBerryShakeInd from "../../assets/Blueberry-Blast_ingredients.png";

export default function Ourdrinks() {
  return (
    <>
      <Header />
      <div className="w-full h-80 bg-[url(https://www.boostjuice.com.au/img/banners/girls_watermelon_tablet.jpg)] bg-no-repeat bg-fit bg-center bg-scroll"></div>
      <div className="container bg-[url(https://www.boostjuice.com.au/img/placeholders/blue_bkg_texture.png)]">
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 p-1">
          <div className="flex items-center justify-center">
            <div className="w-1/3 rounded-full p-5 hover:bg-[#fffcfc5b] duration-500 ease-in">
              <h1 className="text-center text-[3vmax] text-white ">
                <i className="ri-drinks-2-fill"></i>
              </h1>
              <h2 className="text-center text-[1.3vmax] font-[600] text-white ">
                Smoothie
              </h2>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-1/3 rounded-full p-5 hover:bg-[#fffcfc5b] duration-500 ease-in">
              <h1 className="text-center text-[3vmax] text-white">
                <i className="ri-drinks-2-fill"></i>
              </h1>
              <h2 className="text-center text-[1.3vmax] font-[600] text-white">
                Blended
              </h2>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-1/3 rounded-full p-5 hover:bg-[#fffcfc5b] duration-500 ease-in">
              <h1 className="text-center text-[3vmax] text-white">
                <i className="ri-drinks-2-fill"></i>
              </h1>
              <h2 className="text-center text-[1.3vmax] font-[600] text-white">
                Juice
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 ">
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="relative overflow-hidden flex items-end justify-center p-5 h-[300px]"
        >
          <img
            src={berryShake}
            alt="shadow"
            className="absolute   hover:opacity-0 hover:scale-50 duration-[1s] ease-in "
          />
          <img
            src={shadowImage}
            alt="shadow"
            className="absolute  hover:opacity-0 duration-1000 ease-in"
          />
          <img
            src={berryShakeINd}
            alt="shadow"
            className="absolute  opacity-0 hover:opacity-100 duration-1000 ease-in"
          />
          <h2 className="text-[1.1vmax] font-[500] text-gray-500">
            ALL BERRY BANG
          </h2>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="relative overflow-hidden flex items-end justify-center p-5 h-[300px]"
        >
          <img
            src={bananaShake}
            alt="shadow"
            className="absolute   hover:opacity-0 hover:scale-50 duration-[1s] ease-in "
          />
          <img
            src={shadowImage}
            alt="shadow"
            className="absolute  hover:opacity-0 duration-1000 ease-in"
          />
          <img
            src={bananaShakeInd}
            alt="shadow"
            className="absolute  opacity-0 hover:opacity-100 duration-1000 ease-in"
          />
          <h2 className="text-[1.1vmax] font-[500] text-gray-500">
            BANANA BUZZ
          </h2>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="relative overflow-hidden flex items-end justify-center p-5 h-[300px]"
        >
          <img
            src={berryCrushShake}
            alt="shadow"
            className="absolute   hover:opacity-0 hover:scale-50 duration-[1s] ease-in "
          />
          <img
            src={shadowImage}
            alt="shadow"
            className="absolute  hover:opacity-0 duration-1000 ease-in"
          />
          <img
            src={berryCrushShakeInd}
            alt="shadow"
            className="absolute  opacity-0 hover:opacity-100 duration-1000 ease-in"
          />
          <h2 className="text-[1.1vmax] font-[500] text-gray-500">
            BERRY CRUSH
          </h2>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="relative overflow-hidden flex items-end justify-center p-5 h-[300px]"
        >
          <img
            src={blueBerryShake}
            alt="shadow"
            className="absolute   hover:opacity-0 hover:scale-50 duration-[1s] ease-in "
          />
          <img
            src={shadowImage}
            alt="shadow"
            className="absolute  hover:opacity-0 duration-1000 ease-in"
          />
          <img
            src={blueBerryShakeInd}
            alt="shadow"
            className="absolute  opacity-0 hover:opacity-100 duration-1000 ease-in"
          />
          <h2 className="text-[1.1vmax] font-[500] text-gray-500">
            BLUEBERRY BLAST
          </h2>
        </div>
      </div>

      <Footer />
    </>
  );
}
