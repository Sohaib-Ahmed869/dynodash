import React from "react";
import Logo from "../Assets/Logo.png";
import contactIcon from "../Assets/contact-icon.png";
import { FaChevronDown } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import userIcon from "../Assets/user.png";

const Navbar = () => {
  return (
    <div className="navbar flex justify-between px-8 h-full">
      <div>
        <img
          src={Logo}
          alt="Logo"
          className="h-20 p-4 cursor-pointer"
          onClick={() => (window.location.href = "/dashboard")}
        />
      </div>
      <div
        className="flex border-r border-l border-gray-400 hover:cursor-pointer items-center justify-center px-8 gap-4 whitespace-nowrap"
        onClick={() => (window.location.href = "/contact")}
      >
        <div className="flex justify-center items-center h-full">
          <img src={contactIcon} alt="Contact" />
        </div>
        <div className="flex items-center justify-center flex-col h-full">
          <p className="text-xs">Get Quick Support</p>
          <p className="text-xl font-semibold">+27 87 153 1926</p>
        </div>
      </div>
      <div className="flex items-center justify-center cursor-pointer px-4">
        <p
          className="text-black font-semibold"
          onClick={() => (window.location.href = "/")}
        >
          HOME
        </p>
      </div>
      <div className="flex items-center justify-center cursor-pointer px-4">
        <p
          className="text-black font-semibold whitespace-nowrap"
          onClick={() => (window.location.href = "/browse")}
        >
          BROWSE EQUIPMENT
        </p>
      </div>
      <div class="group relative cursor-pointer">
        <div class="flex items-center justify-center bg-white px-4 h-full">
          <a class="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-1">
            MENU
          </a>
          <span>
            <FaChevronDown className="text-black font-bold" />
          </span>
        </div>
      </div>
      <div class="group relative cursor-pointer">
        <div class="flex items-center justify-center bg-white px-4 h-full">
          <a class="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-1">
            EQUIPMENTS
          </a>
          <span>
            <FaChevronDown className="text-black font-bold" />
          </span>
        </div>
        <div class="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
          <a
            class="my-2 block border-b border-gray-100 py-1 font-semibold text-sm text-gray-500 hover:text-black md:mx-2"
            onClick={() => (window.location.href = "/excavatorrent")}
          >
            EXCAVATORS ON RENT
          </a>
        </div>
      </div>
      <div class="group relative cursor-pointer">
        <div class="flex items-center justify-center bg-white px-4 h-full">
          <a class="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-1">
            PAGES
          </a>
          <span>
            <FaChevronDown className="text-black font-bold" />
          </span>
        </div>
        <div
          class="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible"
          style={{ width: "150px" }}
        >
          <a
            class="my-2 block border-b border-gray-100 py-1 font-semibold text-sm text-gray-500 hover:text-black md:mx-2"
            onClick={() => (window.location.href = "/members")}
          >
            MEMBERS DIRECTORY
          </a>
          <a
            class="my-2 block border-b border-gray-100 py-1 font-semibold text-sm text-gray-500 hover:text-black md:mx-2"
            onClick={() => (window.location.href = "/services")}
          >
            SERVICES
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center cursor-pointer px-4">
        <p
          className="text-black font-semibold"
          onClick={() => (window.location.href = "/categories")}
        >
          SHOP
        </p>
      </div>
      <div className="flex items-center justify-center cursor-pointer px-4">
        <p
          className="text-black font-semibold"
          onClick={() => (window.location.href = "/careers")}
        >
          CAREERS
        </p>
      </div>
      <div className="flex items-center justify-center cursor-pointer px-4">
        <p
          className="text-black font-semibold"
          onClick={() => (window.location.href = "/about")}
        >
          ABOUT
        </p>
      </div>
      <div className="flex items-center justify-center px-4 border-l border-gray-400">
        <div className="mr-2">
          <img src={userIcon} alt="User" className="rounded-full h-6 w-6" />
        </div>
        <p
          className="font-semibold text-[#efb007] cursor-pointer whitespace-nowrap"
          onClick={() => (window.location.href = "/registeration")}
        >
          SIGN UP
        </p>
        <p className="font-semibold mx-1">/</p>
        <p
          className="text-black font-semibold cursor-pointer"
          onClick={() => (window.location.href = "/login")}
        >
          LOGIN
        </p>
      </div>
      {/* <div className="flex items-center justify-center cursor-pointer">
                <p className="text-black font-semibold">NEWS</p>
            </div> */}
      {/* <div
        className="flex items-center justify-center cursor-pointer"
        onClick={() => (window.location.href = "/dashboard")}
      >
        <MdSearch size={27} className="text-black" />
      </div> */}
      {/* <div className="bg-yellow-400 h-24 w-24 flex items-center justify-center cursor-pointer">
        <MdShoppingCart
          size={27}
          className="text-white"
          onClick={() => (window.location.href = "/cart")}
        />
      </div> */}
    </div>
  );
};

export default Navbar;
