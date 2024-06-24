import React from "react";

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

const Order = () => {
  return (
    <div className="px-3 flex gap-3">
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
            <p className="text-sm  text-slate-500">{item.value}</p>
          </div>
        ))}
      </div>
      <div className="items-center mt-5 w-1/2 border-2 p-1">
        <div className="border-b border-gray-300 p-2 justify-between flex">
          <BsCart className="w-6 h-6 mr-2" />
          <p className="text-xl  text-slate-900">New Orders</p>
        </div>
        <div className="items-center flex justify-center mt-20">
          <p className="text-2xl  text-slate-900">No new orders found</p>
        </div>
      </div>
    </div>
  );
};

export default Order;
