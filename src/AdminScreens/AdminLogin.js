import React, { useState } from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [hidden, setHidden] = useState(true);
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center text-left mt-10 p-20">
        <div className="items-start text-left">
          <p className="text-2xl font-bold text-black">Login</p>
        </div>
        <div className="px-10 shadow-2xl rounded-lg text-left mt-10 w-1/3 border border-gray-300 py-20">
          <p className="text-sm text-black">
            Username or email address{" "}
            <span className="text-red-500 font-bold">*</span>
          </p>
          <input
            type="text"
            className="border border-gray-300 w-full p-2 mt-1"
          />

          <p className="text-sm text-black mt-4">
            Password <span className="text-red-500 font-bold">*</span>
          </p>
          <input
            type="password"
            className="border border-gray-300 w-full p-2 mt-1"
          ></input>
          <div className="flex flex-col mt-4">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <p className="text-sm text-black">Remember me</p>
            </div>
            <button className="text-sm text-white bg-yellow-500 p-2 mt-4">
              Login
            </button>
            <div className="flex flex-row items-center mt-4 justify-between">
              <p className="text-sm text-gray-400 underline cursor-pointer" onClick={() => window.location.href = "/admin/forgetPassword"}>
                Lost your password?
              </p>
              <p className="text-sm text-gray-400 underline cursor-pointer" onClick={() => window.location.href = "/register"}>
                Create new Account!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLogin;
