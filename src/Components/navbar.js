import React from "react";
import Logo from "../Assets/Logo.png";
import contact from "../Assets/contact.png";
import { FaChevronDown } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md"; 
const Navbar = () => {
    return (
        <div className="navbar flex justify-between items-center">
            <img src={Logo} alt="Logo" className="ml-5 h-24 p-4 cursor-pointer" onClick={() => window.location.href = "/"}/>
            <button className="border-r border-l border-gray-400" onClick={() => window.location.href = "/contact"}>
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
                <p className="text-black font-semibold" onClick={() => window.location.href = "/categories"}>SHOP</p>
            </div>
            <div className="flex items-center justify-center cursor-pointer">
                <p className="text-black font-semibold" onClick={() => window.location.href = "/careers"}>CAREERS</p>
            </div>
            <div className="flex items-center justify-center cursor-pointer">
                <p className="text-black font-semibold" onClick={() => window.location.href = "/about"}>ABOUT</p>
            </div>
            <div className="flex items-center justify-center cursor-pointer" onClick={() => window.location.href = "/login"}>
                <p className="text-black font-semibold" onClick={() => window.location.href = "/login"}>LOGIN</p>
            </div>
            {/* <div className="flex items-center justify-center cursor-pointer">
                <p className="text-black font-semibold">NEWS</p>
            </div> */}
            <div className="flex items-center justify-center cursor-pointer" onClick={() => window.location.href = "/dashboard"}>
                <MdSearch size={27} className="text-black" />
            </div>
            <div className="bg-yellow-400 h-24 w-24 flex items-center justify-center cursor-pointer">
                <MdShoppingCart size={27} className="text-white" />
            </div>

        </div>
    )
}

export default Navbar;