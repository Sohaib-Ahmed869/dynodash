import React from "react";

import PayPal from "../Assets/paypal.png";

const Withdraw = () => {
  return (
    <div className="px-3 flex-col gap-3">
      <div className="items-center mt-5 w-full border-2">
        <div className="border-b border-gray-300 justify-between flex bg-gray-200">
          <p className="text-xl  text-slate-900 p-2">Balance</p>
        </div>
        <div className="border-b border-gray-300 p-2 justify-between flex items-center">
          <div className="flex flex-row p-2">
            <p className="text-xl  text-slate-900">Total Balance: </p>
            <p className="text-xl  text-yellow-500 ml-2">$0.00</p>
          </div>
          <button className="bg-white hover:bg-black hover:text-white text-black border border-black py-2 px-4 rounded-0">
            Request Withdraw
          </button>
        </div>
      </div>

      <div className="items-center w-full border-2 mt-5">
        <div className="border-b border-gray-300 justify-between flex bg-gray-200">
          <p className="text-xl  text-slate-900 p-2">Payment Details</p>
        </div>
        <div className="border-b border-gray-300 p-2 justify-between flex items-center">
          <div className="flex flex-col p-2">
            <p className="text-xl  text-slate-900">Last Payment </p>
            <p className="text-md  text-gray-500">You have not approved any withdraw request yet.</p>
          </div>
          <button className="bg-white hover:bg-black hover:text-white text-black border border-black py-2 px-8 rounded-0">
            View Payment
          </button>
        </div>
      </div>

      <div className="items-center w-full border-2 mt-5">
        <div className="border-b border-gray-300 justify-between flex bg-gray-200">
          <p className="text-xl  text-slate-900 p-2">Payment Method</p>
        </div>
        <div className="border-b border-gray-300 p-2 justify-between flex items-center">
          <div className="flex flex-row p-2 items-center">
            <img src={PayPal} alt="paypal" className="w-6 h-6 mr-2" />
            <p className="text-lg  text-slate-500"> PayPal ( r*******@i********.net )</p>

            
          </div>
          <button className="bg-white hover:bg-black hover:text-white text-black border border-black py-2 px-14 rounded-0">
            Default
          </button>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
