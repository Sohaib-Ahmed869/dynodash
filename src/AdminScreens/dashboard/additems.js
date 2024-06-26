import React from "react";
import { BiPlus } from "react-icons/bi";
const AddItems = () => {
  return (
    <div className="flex-col gap-3 p-16 pt-0 justify-center">
      <div className="flex flex-col border border-gray-200 p-10 shadow-xl">
        <div>
          <p className="text-md  text-slate-900">
            Add Title <span className="font-bold text-red-700">*</span>
          </p>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 mr-3 mt-2"
          />
        </div>
        <div className="mt-5">
          <p className="text-md  text-slate-900">
            Description <span className="font-bold text-red-700">*</span>
          </p>

          <textarea
            type="email"
            className="w-full p-3 border border-gray-300 mt-2 h-36"
          />
        </div>
        <div className="mt-5">
          <p className="text-md  text-slate-900">
            Add Image<span className="font-bold text-red-700 ml-1">*</span>
          </p>

          <input
            type="file"
            className="w-full p-3 border border-gray-300 mt-2"
          />
        </div>
        <div className="mt-5">
          <p className="text-md  text-slate-900">
            Add Gallery<span className="font-bold text-red-700 ml-1">*</span>
          </p>

          <div className="border-2 h-28 border-gray-300 mt-2 items-center justify-center flex border-dashed">
            SELECT{" "}
            <BiPlus
              size={25}
              className="ml-2 rounded-full bg-black text-white"
            />
          </div>
        </div>
        <div className="mt-5 flex flex-col">
          <p className="text-md  text-slate-900 mt-5">
            Delivery <span className="font-bold text-red-700">*</span>
          </p>
          <div className="flex items-center mt-2">
            <div className="flex items-center">
              <input type="radio" className="mr-2" id="yes" name="delivery" />
              <p for="yes">Delivery</p>
            </div>
            <div className="flex items-center ml-2">
              <input type="radio" className="mr-2" id="no" name="delivery" />
              <p for="no">Self Pickup</p>
            </div>
          </div>
        </div>
        <p className="text-md  text-slate-900 mt-5">
          Specification<span className="font-bold text-red-700 ml-1">*</span>
        </p>
        <div className="flex flex-row items-center mt-5">
          <div className="w-1/2">
            <p className="text-md  text-slate-900">Title</p>

            <input
              type="email"
              placeholder=""
              className="w-full p-3 border border-gray-300 mt-2"
            />
          </div>
          <div className="w-1/2 ml-2">
            <p className="text-md  text-slate-900">Address</p>

            <input
              type="email"
              placeholder=""
              className="w-full p-3 border border-gray-300 mt-2"
            />
          </div>
        </div>
        <div className="flex flex-row items-center mt-5">
          <div className="w-1/2">
            <p className="text-md  text-slate-900">Phone</p>

            <input
              type="email"
              placeholder=""
              className="w-full p-3 border border-gray-300 mt-2"
            />
          </div>
          <div className="w-1/2 ml-2">
            <p className="text-md  text-slate-900">Email</p>

            <input
              type="email"
              placeholder=""
              className="w-full p-3 border border-gray-300 mt-2"
            />
          </div>
        </div>

        <div className="w-full mt-5">
          <p className="text-md  text-slate-900">Working Hours</p>

          <input
            type="email"
            placeholder=""
            className="w-full p-3 border border-gray-300 mt-2"
          />
        </div>

        <div className="w-full mt-5">
          <p className="text-md  text-slate-900">Add Flyer</p>
          <div className="border-2 h-28 border-gray-300 mt-2 items-center justify-center flex border-dashed">
            SELECT{" "}
            <BiPlus
              size={25}
              className="ml-2 rounded-full bg-black text-white"
            />
          </div>
        </div>
        <div className="w-full mt-2 items-center justify-center mx-auto flex">
          <button className="bg-yellow-500 text-white py-3 px-6 items-center mt-10 w-96 hover:bg-black hover:text-white">
            ADD TO LISTING 
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
