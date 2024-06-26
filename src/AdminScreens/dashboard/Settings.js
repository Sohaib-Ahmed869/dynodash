import React from "react";

const Settings = () => {
  return (
    <div className="px-3 flex-col gap-3">
      <div>
        <p className="text-md  text-slate-900">Store Name</p>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 bg-gray-100 mr-3 mt-2"
        />
      </div>
      <div className="mt-5">
        <p className="text-md  text-slate-900">Store Address</p>

        <input
          type="email"
          placeholder="Your Address"
          className="w-full p-3 bg-gray-100 mt-2"
        />
      </div>
      <div className="flex flex-row items-center mt-5">
        <div className="w-1/2">
          <p className="text-md  text-slate-900">City</p>

          <input
            type="email"
            placeholder="Your city"
            className="w-full p-3 bg-gray-100 mt-2"
          />
        </div>
        <div className="w-1/2 ml-2">
          <p className="text-md  text-slate-900">Postal Code</p>

          <input
            type="email"
            placeholder="Your postal code"
            className="w-full p-3 bg-gray-100 mt-2"
          />
        </div>
      </div>
      <div className="flex flex-row items-center mt-5">
        <div className="w-1/2">
          <p className="text-md  text-slate-900">Country</p>

          <input
            type="email"
            placeholder="Your country"
            className="w-full p-3 bg-gray-100 mt-2"
          />
        </div>
        <div className="w-1/2 ml-2">
          <p className="text-md  text-slate-900">Phone</p>

          <input
            type="email"
            placeholder="Your phone"
            className="w-full p-3 bg-gray-100 mt-2"
          />
        </div>
      </div>
      <div className="mt-5 flex">
        <div className="w-1/2">
          <p className="text-md  text-slate-900 mt-5">Email</p>
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <p className="text-md  text-slate-900">
              Send me emails about my store
            </p>
          </div>
        </div>
        <div>
          <p className="text-md  text-slate-900 mt-5">Store Schedule</p>
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <p className="text-md  text-slate-900">
              Store has open and close schedule
            </p>
          </div>
        </div>
      </div>
      <button className="bg-yellow-500 text-white font-bold py-3 px-6 items-center mt-10 w-full hover:bg-black hover:text-white">
        UPDATE SETTINGS
      </button>
    </div>
  );
};

export default Settings;
