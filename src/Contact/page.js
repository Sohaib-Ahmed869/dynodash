import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import contactpagebg from "../Assets/contactpagebg.png";
import FooterLogo from "../Assets/FooterLogo.png";
import Logo from "../Assets/Logo.png";
import { BiLocationPlus } from "react-icons/bi";
import { BiPhone } from "react-icons/bi";
import { MdArrowForward } from "react-icons/md";
import { BsClock } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          position: "relative",
          width: "100%", // Set the width as needed

          backgroundImage: `url(${contactpagebg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-48 flex flex-col"
      ></div>
      <div className="justify-center items-center flex flex-col mt-10">
        <button
          className="text-white py-5 px-6 rounded-0 hover:text-gray-900 flex items-center mt-2"
          style={{ backgroundColor: "#EFB007" }}
        >
          HOME <MdArrowForward className="ml-4" />{" "}
          <span className="ml-4">CONTACT US</span>
        </button>
      </div>
      <div className="flex flex-row p-40 pt-20 ">
        <div className="flex flex-col w-1/3 bg-black rounded pt-36 pb-36 pr-10 pl-10">
          <img src={FooterLogo} alt="FooterLogo" className="h-24 p-4 w-48" />
          <h1 className="text-lg text-white mt-5">
            Aiusmod tempor incididunt labore dnim ad minim veniam quis nostrsd
            exercitation ullamco.
          </h1>
          <div className="flex flex-row items-center mt-10">
            <BiLocationPlus
              size={28}
              className="text-2xl text-white mr-3 bg-gray-600 p-2 rounded-full"
            />
            <div className="flex flex-col">
              <p className="text-lg text-yellow-500">Need Help? Call Us</p>
              <p className="text-lg text-gray-400">
                35 Oakridge Lane, NJ 08102
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center mt-10">
            <BiPhone
              size={28}
              className="text-2xl text-white mr-3 bg-gray-600 p-2 rounded-full"
            />
            <div className="flex flex-col">
              <p className="text-lg text-yellow-500">Need Help? Call Us</p>
              <p className="text-lg text-gray-400">+1 123 456 7890</p>
            </div>
          </div>
          <div className="flex flex-row items-center mt-10">
            <BsClock
              size={28}
              className="text-2xl text-white mr-3 bg-gray-600 p-2 rounded-full"
            />
            <div className="flex flex-col">
              <p className="text-lg text-yellow-500">Working Time</p>
              <p className="text-lg text-gray-400">
                Monday to Saturday: 9am to 7pm Sunday: Closed
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center mt-10">
            <BsLinkedin
              size={28}
              className="text-2xl text-white mr-3 bg-gray-600 p-2 rounded-full"
            />
            <FaFacebookF
              size={28}
              className="text-2xl text-white mr-3 bg-gray-600 p-2 rounded-full"
            />
            <FaTwitter
              size={28}
              className="text-2xl text-white mr-3 bg-gray-600 p-2 rounded-full"
            />
            <FaInstagram
              size={28}
              className="text-2xl text-white mr-3 bg-gray-600 p-2 rounded-full"
            />
            <FaYoutube
              size={28}
              className="text-2xl text-white mr-3 bg-gray-600 p-2 rounded-full"
            />
            <BsWhatsapp
              size={28}
              className="text-2xl text-white bg-gray-600 p-2 rounded-full"
            />
          </div>
        </div>
        <div className="flex flex-col w-2/3 p-20">
          <h1 className="text-2xl font-bold">Need an Equipment on Rent?</h1>
          <p className="text-2xl font-bold text-gray-900">Send Us A Message</p>
          <div className="flex flex-row items-center mt-10">
            <input
              type="text"
              placeholder="Your Name"
              className="w-1/2 p-3 bg-gray-100 mr-3 mt-10"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-1/2 p-3 bg-gray-100 mt-10"
            />
          </div>
          <input
            type="text"
            placeholder="Your Subject"
            className="w-full p-3 bg-gray-100 mt-10"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 bg-gray-100 mt-10 h-48"
          ></textarea>
          <button className="bg-white text-black font-bold py-3 px-6 flex items-center mt-10 w-56 border-2 border-black hover:bg-black hover:text-white">
            SEND MESSAGE{" "}
            <MdArrowForward size={22} className="ml-4 text-yellow-500" />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
