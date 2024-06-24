import React from "react";
import CreditCard from "../Assets/creditcard.png";
import { BsCart } from "react-icons/bs";

const orderStats = [
  {
    title: "Total",
    value: 0,
  },
  {
    title: "Completed",
    value: 0,
  },
  {
    title: "Pending",
    value: 0,
  },
  {
    title: "Processing",
    value: 0,
  },
  {
    title: "Cancelled",
    value: 0,
  },
  {
    title: "Refunded",
    value: 0,
  },
  {
    title: "On hold",
    value: 0,
  },
];

const productStats = [
  {
    title: "Total",
    value: 0,
  },
  {
    title: "Live",
    value: 0,
  },
  {
    title: "Offline",
    value: 0,
  },
  {
    title: "Pending Review",
    value: 0,
  },
];

const DashboardSide = () => {
  return (
    <div className="flex flex-col p-10 py-2">
      <div className="flex flex-row items-center gap-2">
        <div className="w-1/2 flex-col flex border border-gray-300 p-2 h-96">
          <div className="border-b border-gray-300 p-2 justify-between flex h-24 items-center">
            <h1 className="text-2xl  text-slate-900">Net Sale</h1>
            <h1 className="text-2xl  text-yellow-500">$ 0.00</h1>
          </div>
          <div className="border-b border-gray-300 p-2 justify-between flex h-24 items-center">
            <h1 className="text-2xl  text-slate-900">Earning</h1>
            <h1 className="text-2xl  text-yellow-500">$ 0.00</h1>
          </div>
          <div className="border-b border-gray-300 p-2 justify-between flex h-24 items-center">
            <h1 className="text-2xl  text-slate-900">Pageview</h1>
            <h1 className="text-2xl  text-yellow-500">0</h1>
          </div>
          <div className="border-b border-gray-300 p-2 justify-between flex h-24 items-center">
            <h1 className="text-2xl  text-slate-900">Order</h1>
            <h1 className="text-2xl  text-yellow-500">0</h1>
          </div>
        </div>
        <div className="w-1/2 flex-col flex border border-gray-300 p-2 h-96">
          <div className="border-b border-gray-300 p-2 justify-between flex">
            <img src={CreditCard} alt="creditcard" className="w-6 h-6 mr-2" />
            <p className="text-xl  text-slate-900">Sales this month</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row  gap-2">
        <div className="items-center mt-5 w-1/2 border-2 p-1">
          <div className="border-b border-gray-300 p-2 justify-between flex">
            <BsCart className="w-6 h-6 mr-2" />
            <p className="text-xl  text-slate-900">Orders</p>
          </div>
          {orderStats.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-300 p-2 justify-between flex"
            >
              <p className="text-sm  text-slate-900">{item.title}</p>
              <p className="text-sm  text-yellow-500">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="items-center mt-5 w-1/2 border-2 p-1">
          <div className="border-b border-gray-300 p-2 justify-between flex">
            <BsCart className="w-6 h-6 mr-2" />
            <p className="text-xl  text-slate-900">Products</p>
          </div>
          {productStats.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-300 p-2 justify-between flex"
            >
              <p className="text-sm  text-slate-900">{item.title}</p>
              <p className="text-sm  text-yellow-500">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardSide;
