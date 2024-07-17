import React, { useState } from "react";
import bg from "../Assets/freightshippingBG.png";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { MdArrowForward } from "react-icons/md";
import { FaWarehouse } from "react-icons/fa";
import { BiBox } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { GoAlert } from "react-icons/go";

const FreightShipping = () => {
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
      ></div>
      <div className="flex flex-col items-center justify-center mt-10 w-full">
        <button
          className="text-white py-5 px-6 rounded-0 hover:text-gray-900 flex items-center"
          style={{ backgroundColor: "#EFB007" }}
        >
          HOME <MdArrowForward className="ml-4" />{" "}
          <span className="ml-4">Freight Shipping</span>
        </button>
        <div className="flex flex-col items-center justify-center mt-10 w-full p-36 pt-10">
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            "At DynoDash, we provide seamless freight services to deliver cargo
            of any size using our extensive network of trusted delivery
            companies. Please fill out the form below to get started with your
            shipment."
          </h1>

          <div className="form-container flex flex-col items-center justify-center mt-10 w-full p-20 border-4 rounded-xl">
            <h1 className="text-2xl font-bold text-gray-800 text-center">
              Shipping Details
            </h1>
            <div className="flex flex-row items-center justify-between w-full mt-10">
              <h2 className="text-lg font-bold text-gray-800">Cargo Details</h2>
              <select className="border-0 rounded-md p-2">
                <option value="small">Internation (SI)</option>
                <option value="medium">Domestic (SD)</option>
                <option value="large">Local (SL)</option>
              </select>
            </div>
            <div className="flex flex-row items-center justify-between w-full mt-10">
              <div className="flex flex-col w-1/2">
                <h2 className="text-lg font-bold text-gray-800">Category</h2>
                <select className="border-2 border-gray-300 rounded-md p-2">
                  <option value="small">Internation (SI)</option>
                  <option value="medium">Domestic (SD)</option>
                  <option value="large">Local (SL)</option>
                </select>
              </div>
              <p className="text-lg font-bold text-blue-800 underline">
                HS CODES
              </p>
            </div>
            <div className="flex flex-col w-full mt-10">
              <h2 className="text-lg font-bold text-gray-800">
                Request Details
              </h2>
              <div className="flex flex-row items-center w-full mt-5 gap-5">
                <div className="flex items-center shadow-md rounded-full p-4 hover:border-gray-800 hover:border-2 cursor-pointer">
                  <BiBox className="text-2xl mr-3 text-gray-800" />
                  <p className="text-lg font-bold text-gray-800">Shipping</p>
                </div>
                <div className="flex items-center shadow-md rounded-full p-4 hover:border-gray-800 hover:border-2 cursor-pointer">
                  <FaWarehouse className="text-2xl mr-3 text-gray-800" />
                  <p className="text-lg font-bold text-gray-800">Warehouse</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between w-full gap-10">
              <div className="flex flex-col w-1/2">
                <h1 className="text-gray-800 text-me font-bold mt-5 mb-5">
                  TRANSPORTATION BY
                </h1>
                <select className="border-2 border-gray-300 rounded-md p-4">
                  <option value="small">Internation (SI)</option>
                  <option value="medium">Domestic (SD)</option>
                  <option value="large">Local (SL)</option>
                </select>
              </div>
              <div className="flex flex-col w-1/2">
                <h1 className="text-gray-800 text-md font-bold mt-5 mb-5">
                  CONTAINER TYPE
                </h1>
                <select className="border-2 border-gray-300 rounded-md p-4">
                  <option value="small">20' Standard</option>
                  <option value="medium">40' Standard</option>
                  <option value="large">40' High Cube</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-between w-full gap-10">
              <div className="flex flex-col w-1/2">
                <h1 className="text-gray-800 text-me font-bold mt-5 mb-5">
                  CONTAINER QUANTITY
                </h1>
                <input
                  type="number"
                  className="border-2 border-gray-300 rounded-md p-4"
                  placeholder="Enter Quantity"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <h1 className="text-gray-800 text-md font-bold mt-5 mb-5">
                  WEIGHT
                </h1>
                <input
                  type="number"
                  className="border-2 border-gray-300 rounded-md p-4"
                  placeholder="Enter Weight"
                />
              </div>
            </div>
            <div className="flex items-center justify-between w-full gap-10">
              <div className="flex flex-col w-1/2">
                <h1 className="text-gray-800 text-me font-bold mt-5 mb-5">
                  FROM
                </h1>
                <div className="flex items-center border-2 border-gray-300 rounded-md p-4">
                  <GrLocation className="text-2xl mr-3 text-gray-800" />
                  <input
                    type="text"
                    className="border-0 w-full focus:outline-none"
                    placeholder="Enter Destination"
                  />
                </div>
              </div>
              <div className="flex flex-col w-1/2">
                <h1 className="text-gray-800 text-md font-bold mt-5 mb-5">
                  TO
                </h1>
                <div className="flex items-center border-2 border-gray-300 rounded-md p-4">
                  <GrLocation className="text-2xl mr-3 text-gray-800" />
                  <input
                    type="text"
                    className="border-0 w-full focus:outline-none"
                    placeholder="Enter Origin"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between w-full gap-10">
              <div className="flex flex-col w-1/2">
                <h1 className="text-gray-800 text-me font-bold mt-5 mb-5">
                  FREIGHT BASIS (LINER TERMS)
                </h1>
                <select className="border-2 border-gray-300 rounded-md p-4">
                  <option value="small">Select Freight Basis</option>
                  <option value="medium">Domestic (SD)</option>
                  <option value="large">Local (SL)</option>
                </select>
              </div>
              <div className="flex flex-col w-1/2">
                <h1 className="text-gray-800 text-md font-bold mt-5 mb-5 flex items-center">
                  READY TO LOAD
                  <span className="ml-2 text-gray-500 border-2 p-1 rounded-full cursor-pointer w-5 h-5 text-center justify-center items-center flex font-bold">
                    i
                  </span>
                </h1>
                <div className="flex items-center border-2 border-gray-300 rounded-md p-4">
                  <input
                    type="date"
                    className="border-0 w-full focus:outline-none"
                    placeholder="Enter Origin"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full mt-10">
              <h2 className="text-lg font-bold text-gray-800">
                Financing & payment deferral
              </h2>
            </div>
            <div className="w-full p-10" style={{ backgroundColor: "#F8F9FD" }}>
              <div className="checkbox flex items-center">
                <input type="checkbox" className="mr-2" />
                <p className="text-gray-800 text-xl font-bold">
                  I am interested in accessing Trade, Logistics or Inventory
                  Finance
                </p>
              </div>
              <p className="text-gray-800 text-xl">
                This solution provides access to finance for exporters,
                importers and logistics companies across the globe for
                receivables and payables.
              </p>
            </div>
            <div className="w-full mt-10">
              <h2 className="text-lg font-bold text-gray-800">
                Additional Information
              </h2>
            </div>
            <div className="text-area w-full mt-5">
              <textarea
                className="border-2 border-gray-300 rounded-md p-4 w-full h-48"
                placeholder="Enter Additional Information"
              />
            </div>
            <div className="flex flex-col w-full mt-10">
              <h2 className="text-lg font-bold text-gray-800">
                Contact Details
              </h2>
            </div>
            <div className="p-10 mt-5 w-full" style={{ backgroundColor: "#FFF5ED" }}>
              <div className="flex flex-row items-center w-full">
                <GoAlert className="text-4xl text-orange-500 mr-5" />
                <p className="text-lg font-bold text-gray-800">
                  Please fill out the form below or sign in to your account.
                  Your progress won't get lost.
                </p>
              </div>
              <div className="text-orange-500 flex items-center mt-5">
                <h1 className="text-lg font-bold">Sign in</h1>
                <MdArrowForward className="text-2xl ml-2" />
              </div>
            </div>
            <div className="flex flex-col w-full mt-10">
              <h2 className="text-lg font-bold text-gray-800">Sign up</h2>
            </div>
            <div className="flex items-center justify-between w-full gap-10">
              <div className="flex flex-col w-1/2">
                <h1 className="text-gray-800 text-me font-bold mt-5 mb-5">
                  FIRST NAME
                </h1>
                <input
                  type="text"
                  className="border-2 border-gray-300 rounded-md p-4"
                  placeholder="Enter first name"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <h1 className="text-gray-800 text-md font-bold mt-5 mb-5">
                  LAST NAME
                </h1>
                <input
                  type="text"
                  className="border-2 border-gray-300 rounded-md p-4"
                  placeholder="Enter last name"
                />
              </div>
            </div>

            <div className="flex items-center justify-between w-full gap-10">
              <div className="flex flex-col w-1/2">
                <h1 className="text-gray-800 text-me font-bold mt-5 mb-5">
                  EMAIL
                </h1>
                <input
                  type="text"
                  className="border-2 border-gray-300 rounded-md p-4"
                  placeholder="Enter email"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <h1 className="text-gray-800 text-md font-bold mt-5 mb-5">
                  COMPANY NAME
                </h1>
                <input
                  type="text"
                  className="border-2 border-gray-300 rounded-md p-4"
                  placeholder="Enter company name"
                />
              </div>
            </div>
            <div className="flex items-center justify-between w-full gap-10">
              <div className="flex flex-col w-1/2">
                <h1 className="text-gray-800 text-me font-bold mt-5 mb-5">
                  PHONE NUMBER
                </h1>
                <input
                  type="text"
                  className="border-2 border-gray-300 rounded-md p-4"
                  placeholder="Enter Phone Number"
                />
              </div>
            </div>
            <div className="w-full">
              <p className="text-gray-800  mt-10 text-left">
                By creating an account, you agree to our
                <span className="text-blue-800 underline cursor-pointer">
                  {" "}
                  Terms & Conditions{" "}
                </span>
                and
                <span className="text-blue-800 underline cursor-pointer">
                  {" "}
                  Privacy Policy
                </span>
              </p>
              <button
                className="text-white py-3 px-8 rounded-0 hover:text-gray-900 flex items-center mt-10 rounded-xl font-semibold"
                style={{ backgroundColor: "#EFB007" }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreightShipping;
