import React from "react";
import Logo from "../Assets/Logo.png";
import contact from "../Assets/contact.png";
import { FaChevronDown } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md"; 
const Navbar = () => {
    return (
        <div className="navbar flex justify-between items-center">
            <img src={Logo} alt="Logo" className="ml-5 h-24 p-4" />
            <button className="border-r border-l border-gray-400">
                <img src={contact} alt="Contact" />
            </button>
            <div className="flex items-center justify-center cursor-pointer">
                <p className="text-black font-semibold">MENU</p>
                <FaChevronDown className="text-black ml-2" />
            </div>
            <div className="flex items-center justify-center cursor-pointer">
                <p className="text-black font-semibold">EQUIPMENTS</p>
                <FaChevronDown className="text-black ml-2" />
            </div>
            <div className="flex items-center justify-center cursor-pointer">
                <p className="text-black font-semibold">PAGES</p>
                <FaChevronDown className="text-black ml-2" />
            </div>
            <div className="flex items-center justify-center cursor-pointer">
                <p className="text-black font-semibold">SHOP</p>
            </div>
            <div className="flex items-center justify-center cursor-pointer">
                <p className="text-black font-semibold">NEWS</p>
            </div>
            <div className="flex items-center justify-center cursor-pointer">
                <p className="text-black font-semibold">CONTACT</p>
            </div>
            <div className="flex items-center justify-center cursor-pointer">
                <MdSearch size={27} className="text-black" />
            </div>
            <div className="bg-yellow-400 h-24 w-24 flex items-center justify-center cursor-pointer">
                <MdShoppingCart size={27} className="text-white" />
            </div>

        </div>
    )
}

export default Navbar;