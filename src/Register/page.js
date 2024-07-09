import React, { useState } from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

const RegisterStart = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center text-left mt-2">
        <div className="flex flex-col text-left p-20 w-full items-center">
          <div className="flex items-center justify-start w-1/3">
            <p className="text-2xl font-semibold text-black">Register</p>
          </div>
          <div className="px-10 shadow-2xl rounded-0 text-left w-1/3 border border-gray-300 py-10 mt-5">
            <p className="text-sm text-black mb-3">
              Email address <span className="text-red-500 font-bold">*</span>
            </p>
            <input
              type="text"
              className="border border-gray-300 w-full p-2 mt-1"
            />

            <p className="text-sm text-gray-600 mt-4">
              A link to set a new password will be sent to your email address.
            </p>
            <div className="flex flex-col mt-4">
              <div className="flex-col items-center">
                <div className="flex flex-row">
                  <input
                    type="radio"
                    className="mr-2"
                    id="customer"
                    name="role"
                  />
                  <p className="text-sm text-black">I am a customer</p>
                </div>
                <div className="flex flex-row mt-2">
                  <input
                    type="radio"
                    className="mr-2"
                    id="vendor"
                    name="role"
                  />
                  <p className="text-sm text-black">I am a vendor</p>
                </div>
              </div>
              <p className="text-sm p-4 mt-5 mb-5" style={{backgroundColor: "#D4EDDA", color: "#155724"}}>
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our privacy policy.
              </p>
              <button className="text-sm text-white bg-yellow-500 py-3 mt-2 w-1/2" onClick={() => window.location.href = "/register"}>
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterStart;
