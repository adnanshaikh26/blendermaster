import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleNavbar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuIcon = !isMenuOpen ? (
    <>
      <i className="ri-menu-line"></i>
    </>
  ) : (
    <>
      <i className="ri-close-large-fill"></i>
    </>
  );

  return (
    <>
      <header className="w-full h-[80px] leading-[80px] flex justify-center">
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo Start */}
            <div className="flex items-center gap-[10px]">
              <span className="w-[35px] h-[35px] bg-smallTextColor text-white text-[18px] font-[500px] rounded-full flex items-center justify-center">
                BM
              </span>
              <div className="leading-[20px]">
                <Link to="/">
                  <h2 className="font=[700] text-smallTextColor text-sm sm:text-sm md:text-xl lg:text-xl xl:text-xl">
                    BlendMaster
                  </h2>
                </Link>
              </div>
            </div>
            {/* Logo End */}
            {/* Menu Start */}
            <div className="menu">
              <ul className="hidden md:flex md:items-center md:gap-10">
                <li>
                  <Link
                    className="font-[600] text-smallTextColor py-3 px-3 rounded-[20px] hover:bg-smallTextColor hover:text-white duration-500 ease-in"
                    to="/ourdrinks"
                  >
                    Our Drink
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-[600] text-smallTextColor py-3 px-3 rounded-[20px] hover:bg-smallTextColor hover:text-white duration-500 ease-in"
                    to="/vibe"
                  >
                    Vibe
                  </Link>
                </li>

                <li>
                  <Link
                    className="font-[600] text-smallTextColor py-3 px-3 rounded-[20px] hover:bg-smallTextColor hover:text-white duration-500 ease-in"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            {/* Menu End */}
            {/* Right Side Start */}
            <div className="flex items-center gap-4">
              <button className="hidden sm:hidden md:flex items-center gap-4 md:text-smallTextColor md:font-[600] md:border md:border-solid md:border-smallTextColor md:py-4 md:px-4 md:max-h-[40px] md:rounded md:hover:text-white md:hover:bg-smallTextColor md:duration-500 md:ease-in ">
                <i className="ri-store-fill"> Store</i>
              </button>
              <button
                onClick={toggleNavbar}
                className="text-2xl text-smallTextColor md:hidden"
              >
                {menuIcon}
              </button>
            </div>
            {/* Right Side End */}
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <ul className="flex flex-col items-center gap-10 ">
          <li>
            <Link
              className="font-[600] text-smallTextColor py-3 px-3 rounded-[20px] hover:bg-smallTextColor hover:text-white duration-500 ease-in"
              to="/ourdrinks"
            >
              Our Drink
            </Link>
          </li>
          <li>
            <Link
              className="font-[600] text-smallTextColor py-3 px-3 rounded-[20px] hover:bg-smallTextColor hover:text-white duration-500 ease-in"
              to="/vibe"
            >
              Vibe
            </Link>
          </li>

          <li>
            <Link
              className="font-[600] text-smallTextColor py-3 px-3 rounded-[20px] hover:bg-smallTextColor hover:text-white duration-500 ease-in"
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}
