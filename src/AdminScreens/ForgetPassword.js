import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

const ForgetPassword = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center text-left mt-10 p-20">
        <div className="items-start text-center">
          <p className="text-4xl font-semibold text-black">Forgot Password?</p>
          <p className="text-xl text-gray-400 mt-6">
            {" "}
            Don't worry! It occurs. Please enter the email address<br></br> linked with
            your account.
          </p>
        </div>

        <div className="px-10 mt-10 w-1/3 items-center justify-center flex flex-col">
          <input
            type="text"
            className="border border-gray-300 w-full p-5 mt-1 text-slate-700 text-bold text-xl"
            placeholder="Enter your email address"
          />

          <button className="text-sm text-white bg-yellow-500 p-2 mt-10 py-3 w-5/6" onClick={() => window.location.href = "/admin/otpverification"}>
            SEND CODE
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ForgetPassword;
