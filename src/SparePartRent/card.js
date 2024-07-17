import React from "react";

const Card = ({ item }) => {
  return (
    <div className="card h-40 flex flex-col border justify-between items-center shadow mb-56">
      <div className="relative flex flex-col h-full">
        <img src={item.image} alt="rentalitem1" className="h-full" />
      </div>
      <h1 className="text-xl font-bold text-slate-900 mt-5">{item.name}</h1>
      <p className="text-gray-500 text-sm mt-2 text-left p-2">
        Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit. Ut
        <br></br> elit tellus, luctus nec ullamcorper<br></br> mattis, pulvinar
        dapibus leo.
      </p>

      <button
        className="flex flex-row items-center text-center justify-center bg-[#efb007] text-white p-3 w-full h-1/4 rounded-0 border border-white text-sm font-semibold hover:bg-black transition duration-200"
        onClick={() => (window.location.href = "/partdetails")}
      >
        VIEW DETAILS
      </button>
    </div>
  );
};

export default Card;
