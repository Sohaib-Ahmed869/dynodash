import React from "react";
import Logo from "../Assets/Logo.png";
import contact from "../Assets/contact.png";
import { FaChevronDown } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";

const Navbar = () => {
  const [selectedOption, setSelectedOption] = React.useState("");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="navbar flex justify-between items-center">
      <img
        src={Logo}
        alt="Logo"
        className="ml-5 h-24 p-4 cursor-pointer"
        onClick={() => (window.location.href = "/")}
      />
      <button
        className="border-r border-l border-gray-400"
        onClick={() => (window.location.href = "/contact")}
      >
        <img src={contact} alt="Contact" />
      </button>
      <div class="group relative cursor-pointer">
        <div class="flex items-center justify-between bg-white px-4">
          <a
            class="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4"
          >
            MENU
          </a>
          <span>
            <FaChevronDown className="text-black font-bold" />
          </span>
        </div>
      </div>
      <div class="group relative cursor-pointer">
        <div class="flex items-center justify-between bg-white px-4">
          <a
            class="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4"
          >
            EQUIPMENTS
          </a>
          <span>
            <FaChevronDown className="text-black font-bold" />
          </span>
        </div>
        <div class="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
          <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-sm text-gray-500 hover:text-black md:mx-2" onClick={() => window.location.href = "/excavatorrent"}>
            EXCAVATORS ON RENT
          </a>
        </div>
      </div>
      <div class="group relative cursor-pointer">
        <div class="flex items-center justify-between bg-white px-4">
          <a
            class="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4"
          >
            PAGES
          </a>
          <span>
            <FaChevronDown className="text-black font-bold" />
          </span>
        </div>
        <div class="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
          <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-sm text-gray-500 hover:text-black md:mx-2" onClick={() => window.location.href = "/members"}>
            MEMBERS DIRECTORY
          </a>
          <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-sm text-gray-500 hover:text-black md:mx-2" onClick={() => window.location.href = "/services"}>
            SERVICES
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center cursor-pointer">
        <p
          className="text-black font-semibold"
          onClick={() => (window.location.href = "/categories")}
        >
          SHOP
        </p>
      </div>
      <div className="flex items-center justify-center cursor-pointer">
        <p
          className="text-black font-semibold"
          onClick={() => (window.location.href = "/careers")}
        >
          CAREERS
        </p>
      </div>
      <div className="flex items-center justify-center cursor-pointer">
        <p
          className="text-black font-semibold"
          onClick={() => (window.location.href = "/about")}
        >
          ABOUT
        </p>
      </div>
      <div
        className="flex items-center justify-center cursor-pointer"
        onClick={() => (window.location.href = "/login")}
      >
        <p
          className="text-black font-semibold"
          onClick={() => (window.location.href = "/login")}
        >
          LOGIN
        </p>
      </div>
      {/* <div className="flex items-center justify-center cursor-pointer">
                <p className="text-black font-semibold">NEWS</p>
            </div> */}
      <div
        className="flex items-center justify-center cursor-pointer"
        onClick={() => (window.location.href = "/dashboard")}
      >
        <MdSearch size={27} className="text-black" />
      </div>
      <div className="bg-yellow-400 h-24 w-24 flex items-center justify-center cursor-pointer">
        <MdShoppingCart
          size={27}
          className="text-white"
          onClick={() => (window.location.href = "/cart")}
        />
      </div>
    </div>
  );
};

export default Navbar;
