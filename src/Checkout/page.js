import React, { useState } from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

const Checkout = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [hidden, setHidden] = useState(true);
  return (
    <div>
      <Navbar />
      <div className="flex w-full justify-center items-start text-left mt-10 pb-20 gap-8">
        <div className="px-10 shadow-lg rounded-lg text-left mt-10 w-1/4 border border-gray-300 pt-5 pb-10">
          <div className="items-start text-left mb-7 mt-2">
            <p className="text-1xl font-bold text-black">BILLING ADDRESS</p>
          </div>
          <p className="text-sm text-black mt-4">
            Email Address <span className="text-red-500 font-bold">*</span>
          </p>
          <input
            type="text"
            className="border border-gray-300 w-full p-2 mt-1"
          />

          <p className="text-sm text-black mt-4">
            First Name <span className="text-red-500 font-bold">*</span>
          </p>
          <input
            type="text"
            className="border border-gray-300 w-full p-2 mt-1"
          />

          <p className="text-sm text-black mt-4">
            Last Name <span className="text-red-500 font-bold">*</span>
          </p>
          <input
            type="text"
            className="border border-gray-300 w-full p-2 mt-1"
          />

          <p className="text-sm text-black mt-4">
            Address <span className="text-red-500 font-bold">*</span>
          </p>
          <input
            type="text"
            className="border border-gray-300 w-full p-2 mt-1"
          />

          <div className="flex w-full gap-4">
            <div className="flex-1">
              <p className="text-sm text-black mt-4">
                Phone <span className="text-red-500 font-bold">*</span>
              </p>
              <input
                type="text"
                className="border border-gray-300 w-full p-2 mt-1"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm text-black mt-4">
                City <span className="text-red-500 font-bold">*</span>
              </p>
              <input
                type="text"
                className="border border-gray-300 w-full p-2 mt-1"
              />
            </div>
          </div>

          <div className="flex w-full gap-4">
            <div className="flex-1">
              <p className="text-sm text-black mt-4">
                State <span className="text-red-500 font-bold">*</span>
              </p>
              <input
                type="text"
                className="border border-gray-300 w-full p-2 mt-1"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm text-black mt-4">
                Zip Code <span className="text-red-500 font-bold">*</span>
              </p>
              <input
                type="text"
                className="border border-gray-300 w-full p-2 mt-1"
              />
            </div>
          </div>
        </div>
        <div className="px-10 shadow-lg rounded-lg text-left mt-10 w-1/4 border border-gray-300 pt-5 pb-10">
          <div className="items-start text-left mb-7 mt-2">
            <p className="text-1xl font-bold text-black">PAYMENT INFORMATION</p>
          </div>

          <p className="text-sm text-black mt-4">
            Card Number <span className="text-red-500 font-bold">*</span>
          </p>
          <input
            type="text"
            className="border border-gray-300 w-full p-2 mt-1"
          />

          <p className="text-sm text-black mt-4">
            Expiration Date <span className="text-red-500 font-bold">*</span>
          </p>
          <input
            type="text"
            className="border border-gray-300 w-full p-2 mt-1"
          />

          <p className="text-sm text-black mt-4">
            Security Code (CVC){" "}
            <span className="text-red-500 font-bold">*</span>
          </p>
          <input
            type="text"
            className="border border-gray-300 w-full p-2 mt-1"
          />

          <div className="flex flex-col mt-4">
            <button
              className="text-sm text-white bg-yellow-500 p-2 mt-4"
              onClick={() => (window.location.href = "/confirmation")}
            >
              SUBMIT & CHECKOUT
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
