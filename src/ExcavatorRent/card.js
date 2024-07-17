import React from "react";

const Card = ({ item }) => {
  return (
    <div className="card h-40 w-full flex border border-gray-100 justify-between items-center shadow">
      <div className="flex justify-start w-3/4 h-full">
        <div className="relative flex flex-col h-full">
          <img src={item.image} alt="rentalitem1" className="h-full" />
          <div className="absolute bottom-0 flex flex-row justify-center w-full text-xs text-white bg-black p-1">
            ${item.perdaycost} / Day ${item.perweekcost} / Week $
            {item.permonthcost} / Month
          </div>
        </div>
        <div className="flex justify-start p-5">
          <div className="flex flex-col">
            <div className="">
              <h1 className="text-xl font-bold text-slate-900">{item.name}</h1>
              <div className="flex flex-row items-center text-sm">
                <p className="text-yellow-500 mr-3">View Details</p>
                <div className="border-r border-slate-600 h-6 mr-3"></div>
                <p className="text-yellow-500">Print Quotation</p>
              </div>
            </div>
            <div className="flex flex-col p-1 gap-1">
              <div className="flex w-full">
                <div className="flex flex-row items-center w-full">
                  <div className="flex flex-row items-center w-40">
                    <p className="text-black ml-1 text-xs">
                      Operating Weight: {item.operating_weight}
                    </p>
                  </div>
                  <div className="flex flex-row items-center w-40">
                    <p className="text-black ml-1 text-xs">
                      Manufacture Year: {item.manufacture_year}
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center w-40">
                    <p className="text-black ml-1 text-xs">
                      Digging Weight: {item.digging_weight}
                    </p>
                  </div>
                  <div className="flex flex-row items-center w-40">
                    <p className="text-black ml-1 text-xs">
                      Max Reach: {item.max_reach}
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center w-40">
                    <p className="text-black ml-1 text-xs">
                      Weight: {item.weight}
                    </p>
                  </div>
                  <div className="flex flex-row items-center w-40">
                    <p className="text-black ml-1 text-xs">
                      Gradeadility: {item.gradeadility}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-1/4 h-full border-l border-slate-300">
        <div className="p-3 h-3/4 flex flex-row item-center justify-center">
          <div className="flex flex-col item-center justify-center pr-2">
            <p className="text-2xl font-bold text-[#efb007]">
              ${item.rental_price * 0.8}
            </p>
            <p className="text-lg font text-gray-500 line-through text-right">
              ${item.rental_price}
            </p>
          </div>
        </div>
        <button
          className="flex flex-row items-center text-center justify-center bg-[#efb007] text-white p-3 w-full h-1/4 rounded-0 border border-white text-sm font-semibold hover:bg-black transition duration-200"
          onClick={() => (window.location.href = "/details")}
        >
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

export default Card;

/* <div className="flex flex-row justify-between">
        <div className="flex flex-row p-3 items-center">
          <MdArrowForward className="text-xl text-black border border-black rounded-full p-1" />
          <p className="text-black font-semibold ml-1">
            ${item.perdaycost} / Day
          </p>
        </div>
        <div className="flex flex-row p-3 items-center">
          <MdArrowForward className="text-xl text-black border border-black rounded-full p-1" />
          <p className="text-black font-semibold ml-1">
            ${item.perweekcost} / Week
          </p>
        </div>
        <div className="flex flex-row p-3 items-center">
          <MdArrowForward className="text-xl text-black border border-black rounded-full p-1" />
          <p className="text-black font-semibold ml-1">
            ${item.permonthcost} / Month
          </p>
        </div>
      </div> */
