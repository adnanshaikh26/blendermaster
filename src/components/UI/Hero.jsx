import React from "react";
// import CountUp from "react-countup/build/CountUp";
import heroimg from "../../assets/Homepage_550x450-1-removebg-preview.png";

export default function Hero() {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center  sm:flex-col md:flex-row mb-7">
          <div className="w-full sm:basis-1/2">
            <h1
              data-aos="fade-right"
              data-aos-duration="1500"
              className=" text-headingColor font-[800] text-[5vmax] "
            >
              It's Lychee's World
            </h1>
            <h5
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" text-headingColor font-[600] text-[2.5vmin] "
            >
              3 NEW Lychee drinks!
            </h5>
            <button
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" bg-smallTextColor text-white py-2 px-3 mt-5 rounded hover:bg-primaryColor duration-500 ease-in  hover:text-smallTextColor"
            >
              LEARN MORE
            </button>
          </div>
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure
              className="flex items-center justify-center"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <img src={heroimg} alt="" />
            </figure>
          </div>
        </div>
      </div>
      <div className="container bg-[url('https://www.boostjuice.com.au/img/banners/group_laneway_tablet.jpg')] bg-cover p-5 ">
        <div className="flex items-center justify-center mt-8 mb-4">
          <div className="w-full sm:basis-1/2 flex flex-col items-center ">
            <h1
              data-aos="fade-right"
              data-aos-duration="1500"
              className=" text-white font-[800] text-[7vmax] text-center"
            >
              vibe.
            </h1>
            <h5
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" text-white font-[600] text-[2.5vmin] text-center"
            >
              This is it. This is the coolest, most exclusive club you’ll ever
              be a part of. It’s more glamourous than Mariah Carey’s life, it’s
              got more hidden benefits than the Illuminati, and if you download
              our Boost app then you’ll be swimming in free stuff and sweet
              deals for the rest of your life… or until you lose your card or
              delete the app.
            </h5>
            <button
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" bg-smallTextColor text-white py-2 px-3 mt-5 rounded hover:bg-primaryColor duration-500 ease-in hover:text-smallTextColor items-center"
            >
              TEACH ME MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
