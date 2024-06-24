import React from "react";
import profilepic from "../Assets/profilepic.png";
import rentalitem1 from "../Assets/rentalitem1.png";
import rentalitem2 from "../Assets/rentalitem2.png";

const MyAccount = () => {
  return (
    <div className="flex flex-col p-10 gap-3">
      <img src={profilepic} alt="profilepic" className="w-32 h-32" />
      <h1 className="text-2xl text-black font-bold">I am Rure Posh.</h1>
      <p className="text-md text-gray-500">
        The user has not shared any details about their biography.
      </p>
      <h2 className="text-xl text-black font-semibold">Products</h2>
      <div className="flex flex-row gap-3">
        <img src={rentalitem1} alt="rentalitem1" className="w-48 h-32" />
        <img src={rentalitem2} alt="rentalitem2" className="w-48 h-32" />
        <img src={rentalitem1} alt="rentalitem1" className="w-48 h-32" />
        <img src={rentalitem2} alt="rentalitem2" className="w-48 h-32" />
      </div>
    </div>
  );
};

export default MyAccount;
