import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Vibe() {
  return (
    <>
      <Header />
      <div className=" w-full h-80 bg-[url('https://www.boostjuice.com.au/img/banners/group_laneway_desktop.jpg')] bg-cover bg-center "></div>
      <div className="container mt-[-10vh]">
        <div className="bg-smallTextColor flex flex-col items-center ">
          <h1
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="text-white text-[6vmax] font-[700] "
          >
            vibe
          </h1>
          <h2
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="text-white text-[3vmax] font-[600] "
          >
            CLUB
          </h2>
          <div data-aos="zoom-in" data-aos-duration="1500" className="w-1/2">
            <p className="text-white text-[2.8vmin] text-center font-[500]">
              Do you hate waiting? Do you like things really fast? Are you
              becoming impatient waiting for us to make our point? Well wait no
              more! When you become a Vibe member, you get to cut the queue
              forever when you order through the App! Vibe members get a ton of
              free stuff and all you have to do is register.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="flex gap-8 m-7"
          >
            <button className="text-white bg-primaryColor py-2 px-4 rounded hover:bg-[#fffcfc5b] duration-500 ease-in">
              SIGN IN
            </button>
            <button className="text-white bg-[#812F8F] py-2 px-4 rounded hover:bg-[#fffcfc5b] duration-500 ease-in">
              REGISTER
            </button>
          </div>
        </div>
        <section className="flex flex-col gap-4 items-center bg-[#F5F5F5]">
          <h1 className="text-[2.5vmax] font-[600] text-smallTextColor">
            How do I join?
          </h1>
          <p className="w-1/2 text-center text-gray-500 text-[2.8vmin] font-[500]">
            So you want in hey? Well, it ain’t that easy. You can’t just
            magically download the app and register your details and expect to
            be granted entry into our super exclusive Vibe Club. Wait. Actually,
            that’s exactly all you need to do. So go and do it so you can enjoy
            free Boost stuff and juicy deals!
          </p>
        </section>
        <div className="flex ">
          <div className="slanting-div-l">
            <div className="p-10">
              <h3 className="text-white text-[1.5vmax]">OPTION 1</h3>
              <h1 className="text-white text-[2vmax]">
                Download the Boost Juice App
              </h1>
              <p className="text-white text-[1.1vmax]">
                Your phone just got smarter! From the convenience of your
                fingers (or toes if you’re talented like that) you can order and
                customise your Boost from the App and strut your stuff past any
                queues. If that’s not enough, we give so much stuff away you’d
                think we we’re having a closing down sale! Which we aren’t.
                We’re here forever.
              </p>
            </div>
          </div>
          <div className="slanting-div-r">
            <div className="p-10">
              <h3 className="text-white text-[1.5vmax]">OPTION 2</h3>
              <h1 className="text-white text-[2vmax]">
                Get yourself a Vibe Card
              </h1>
              <p className="text-white text-[1.1vmax]">
                Oh you little hipster thing you! If tech is too cool at the
                moment, then scoot on over to your nearest Boost store, get
                yourself a Vibe card and register your details. Do it quickly
                before it becomes mainstream.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
