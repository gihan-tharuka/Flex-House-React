import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="navbar">
      <div
        className="flex bg-black justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white navbar"
        style={{ backgroundColor: "black" }}
      >
        <h1 className="w-full text-3xl font-bold text-[#3b59a9]">
          Flex House
        </h1>
        <ul className="hidden md:flex">
          <li className="p-4">Home</li>
          <li className="p-4">About</li>
          <li className="p-4">Pricing</li>
          <li className="p-4">Contact</li>
          <li className="p-4">Services</li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[80%] h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
            Flex House
          </h1>
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 border-b border-gray-600">Pricing</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Services</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;