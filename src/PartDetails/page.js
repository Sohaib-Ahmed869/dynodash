import React, { useState } from "react";
import rentalitem3 from "../Assets/part.png";
import bg from "../Assets/bg.png";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { MdArrowForward } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { FaCheck } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { BiMessage } from "react-icons/bi";
const data = {
  image: rentalitem3,
  name: "Pistons and Rings in Heavy Equipment Engines",
  description:
    "Pistons and rings are critical components in heavy equipment engines, ensuring efficient combustion and smooth operation. Pistons are responsible for converting the energy from the combustion of fuel and air into mechanical energy. They move up and down within the cylinder, driving the crankshaft. Piston rings are essential for maintaining a proper seal in the cylinder, preventing combustion gas leakage, and controlling oil consumption.",
  operating_weight: "1.5 Ton",
  manufacture_year: "2019",
  digging_weight: "4.1 meter",
  max_reach: "3.8 meter",
  rental_price: "320",
  perdaycost: "110",
  perweekcost: "400",
  permonthcost: "1300",
  weight: "1.5 Ton",
  gradeadility: "30°",
  location: " 354 Oakridge Lane, Camden NJ 08102 - USA",
};

const PartDetails = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          position: "relative",
          width: "100%", // Set the width as needed
          backgroundImage: `url(${bg})`, // Set the background image
          backgroundSize: "cover", // Cover the entire div
          backgroundPosition: "center", // Center the background image
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
        className="h-48 flex flex-col justify-center items-center"
      >
        <p className="text-4xl font-semibold text-white">{data.name}</p>
      </div>
      <div className="justify-center items-center flex flex-col mt-10 p-20 pt-0">
        <button
          className="text-white py-5 px-6 rounded-0 hover:text-gray-900 flex items-center"
          style={{ backgroundColor: "#EFB007" }}
        >
          HOME <MdArrowForward className="ml-4" />{" "}
          <span className="ml-4">GET "EXCAVATORS" ON RENT</span>{" "}
          <MdArrowForward className="ml-4" />{" "}
          <span className="ml-4">{data.name.toUpperCase()}</span>
        </button>
        <div className="flex flex-row mt-10 p-20 pt-0 w-full">
          <div className="w-2/3 text-left p-10 flex flex-col">
            <div className="flex flex-col">
              <img src={data.image} alt="rentalitem1" className="h-96"></img>
              <h1 className="text-black text-3xl font-bold mt-10 mb-0">
                {data.name}
              </h1>
              <p className="flex flex-row items-center text-gray-400 text-lg mt-3">
                <GoLocation className="text-2xl text-yellow-500 me-2" />
                {data.location}
              </p>
              <div className="line w-full bg-gray-200 h-1 mt-10 mb-10"></div>
              <p className="text-2xl font-semibold text-black">
                Best Yanmar powered hydraulic excavator for rent.
              </p>
              <p className="text-lg text-gray-500 mt-5">
                {data.description}  
              </p>


              <p className="text-lg text-gray-500 mt-5 flex flex-row items-center">
                <FaCheck className="text-sm text-yellow-500 me-3" />
                Nostrud exercitation ullamco laboris
              </p>

              <p className="text-lg text-gray-500 mt-5 flex flex-row items-center">
                <FaCheck className="text-sm text-yellow-500 me-3" />
                Ut aliquip ex ea reprehen deritin voluptate
              </p>

              <p className="text-lg text-gray-500 mt-5 flex flex-row items-center">
                <FaCheck className="text-sm text-yellow-500 me-3" />
                Adipisicing elit sed eiusmod tempor incididunt
              </p>

              <p className="text-lg text-gray-500 mt-5 flex flex-row items-center">
                <FaCheck className="text-sm text-yellow-500 me-3" />
                Labore dolore magna aliqua veniam nostrud
              </p>

              <div className="flex flex-row mt-5">
                <div className="flex flex-col w-1/2">
                  <p className="text-sm text-gray-600 p-10 pl-2 bg-gray-100">
                    Operating Weight:
                  </p>
                  <p className="text-sm text-gray-600 p-10 pl-2">
                    Manufacture Year:
                  </p>
                  <p className="text-sm text-gray-600 p-10 pl-2 bg-gray-100">
                    Digging Weight:
                  </p>
                  <p className="text-sm text-gray-600 p-10 pl-2">Max Reach:</p>
                  <p className="text-sm text-gray-600 p-10 pl-2 bg-gray-100">
                    Rental Price:
                  </p>
                </div>
                <div className="flex flex-col w-1/2 font-bold text-gray-800">
                  <p className="text-sm  p-10 pl-2 bg-gray-100">
                    {data.operating_weight}
                  </p>
                  <p className="text-sm p-10 pl-2">{data.manufacture_year}</p>
                  <p className="text-sm p-10 pl-2 bg-gray-100">
                    {data.digging_weight}
                  </p>
                  <p className="text-sm p-10 pl-2">{data.max_reach}</p>
                  <p className="text-sm p-10 pl-2 bg-gray-100">
                    {data.rental_price}
                  </p>
                </div>
              </div>

              <div className="flex flex-col mt-10">
                <h1 className="text-2xl font-bold text-black">Your Review</h1>
                <div className="flex flex-row mt-5 stars">
                  <label for="star1" className="text-2xl text-yellow-500">
                    ★
                  </label>
                  <label for="star1" className="text-2xl text-yellow-500">
                    ★
                  </label>
                  <label for="star1" className="text-2xl text-yellow-500">
                    ★
                  </label>
                  <label for="star1" className="text-2xl text-yellow-500">
                    ★
                  </label>
                  <label for="star1" className="text-2xl text-yellow-500">
                    ★
                  </label>
                </div>
                <input
                  id="name"
                  type="text"
                  className="border border-gray-300 bg-gray-100 w-full p-2 mt-5"
                  placeholder="Name"
                ></input>
                <input
                  id="email"
                  type="text"
                  className="border border-gray-300 bg-gray-100 w-full p-2 mt-5"
                  placeholder="Email"
                ></input>
                <textarea
                  className="border border-gray-300 w-full p-2 mt-5 bg-gray-100 h-48 mb-10"
                  placeholder="Write your review here"
                ></textarea>
                <button className="text-sm text-white bg-yellow-500 p-2 mt-4">
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/3 flex flex-col text-left mr-10 shadow-2xl bg-white">
            <div
              className="flex items-center flex-col justify-center p-10 border-l-4 border-yellow-500"
              style={{ backgroundColor: "#222222" }}
            >
              <p className="text-gray-200 text-lg">[Equipment Current Price]</p>
              <h1 className="text-4xl mb-2 font-bold text-white">
                $ {data.rental_price * 0.8}
              </h1>
              <h1 className=" text-gray-200 text-xl line-through">
                $ {data.rental_price}
              </h1>
            </div>
            <div
              className="bottom-0 flex flex-row items-center text-sm justify-between p-5 border-l-4 border-yellow-500 font-semibold"
              style={{ backgroundColor: "#8a8986" }}
            >
              <p className="text-white">$ {data.perdaycost} /Per Day</p>
              <p className="text-white">$ {data.perweekcost} /Per Week</p>
              <p className="text-white">$ {data.permonthcost} /Per Month</p>
            </div>

            <div className="flex flex-row items-center p-10 pb-2">
              <input
                type="date"
                className="border border-gray-300 bg-gray-100 w-full p-2 mt-1"
              ></input>
            </div>

            <div className="flex flex-row items-center p-10 pt-0">
              <input
                type="text"
                placeholder="Pickup Location"
                className="border border-gray-300 bg-gray-100 w-full p-2 mt-1"
              ></input>
            </div>

            <div className="flex flex-col  p-10 pt-0">
              <div className="justify-between flex items-center">
                <div className="flex flex-row items-center">
                  <input type="checkbox" className="me-2" />
                  <p className="text-gray-500">Landscape Forks</p>
                </div>
                <p className="text-gray-900 font-bold">$ 50/day</p>
              </div>
              <div className="justify-between flex items-center">
                <div className="flex flex-row items-center">
                  <input type="checkbox" className="me-2" />
                  <p className="text-gray-500">Pallete Forks</p>
                </div>
                <p className="text-gray-900 font-bold">$ 100/total</p>
              </div>
            </div>
            <div className="w-full p-10 pt-0">
              <button
                className="text-lg text-white bg-yellow-500 py-4 mt-4 w-full"
                onClick={() => (window.location.href = "/cart")}
              >
                BOOK NOW
              </button>
            </div>
            <div className="flex flex-col p-10 pt-0">
              <h2 className="text-2xl font-bold text-black">Author Profile</h2>
              <div className="flex flex-row items-center mt-5">
                <img
                  src={rentalitem3}
                  alt="author"
                  className="h-20 w-20 rounded-full"
                ></img>
                <div className="flex flex-col ms-3">
                  <h1 className="text-lg font-bold text-black">John Doe</h1>
                  <p className="text-gray-500">Member for last 2 years</p>
                </div>
              </div>
            </div>
            <div className="w-full p-10 pt-0 pb-2">
              <button className="text-lg text-white bg-yellow-500 py-4 mt-4 w-full">
                PROFILE
              </button>
            </div>
            <div className="w-full p-10 pt-0">
              <button className="text-lg text-gray-700 bg-gray-300 py-4 mt-4 w-full flex items-center justify-center">
                <BiMessage className="text-2xl me-2" />
                SEND A PRIVATE MESSAGE
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PartDetails;
