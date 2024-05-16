import React from "react";

export default function Footer() {
  return (
    <footer className=" bg-smallTextColor  text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-bold">BlendMaster</h2>
            <p>
              Our company specializes in providing you with a healthy
              alternative to the regular soft drinks. Our blends are created
              using fresh ingredients and a balance of flavor, and each of our
              drinks are available in various fruit flavors.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-bold">Links</h2>
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
            <a href="/" className="hover:text-gray-300">
              About
            </a>
            <a href="/" className="hover:text-gray-300">
              Products
            </a>
            <a href="/" className="hover:text-gray-300">
              Contact
            </a>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-bold">Address</h2>
            <p>1234 Street Name, City, Country</p>
            <p>Email: info@boostjuice.com</p>
            <p>Phone: +1 123 456 7890</p>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-bold">Social Media</h2>
            <div className="flex gap-2">
              <a
                href="/"
                className=" px-2 py-1 hover:bg-primaryColor  rounded-3xl duration-500 ease-in"
              >
                <i className="ri-facebook-fill"></i>
              </a>
              <a
                href="/"
                className=" px-2 py-1 hover:bg-primaryColor  rounded-3xl duration-500 ease-in"
              >
                <i className="ri-twitter-x-line"></i>
              </a>
              <a
                href="/"
                className=" px-2 py-1 hover:bg-primaryColor  rounded-3xl duration-500 ease-in"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a
                href="/"
                className=" px-2 py-1 hover:bg-primaryColor  rounded-3xl duration-500 ease-in"
              >
                <i className="ri-linkedin-fill"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
