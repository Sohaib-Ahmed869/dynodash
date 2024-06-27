import React, { useRef, useEffect, useState } from "react";
import Navbar from "../Components/navbar";
import servicesbg from "../Assets/servicesbg.png";
import Footer from "../Components/footer";
import { MdArrowForward } from "react-icons/md";
import rentalitem1 from "../Assets/rentalitem1.png";
import rentalitem2 from "../Assets/rentalitem2.png";

const data = [
  {
    image: rentalitem1,
    name: "Compact Excavator",
    operating_weight: "1.5 Ton",
    manufacture_year: "2019",
    digging_weight: "4.1 meter",
    max_reach: "3.8 meter",
    rental_price: "320",
    perdaycost: "110",
    perweekcost: "400",
    permonthcost: "1300",
  },
  {
    image: rentalitem2,
    name: "Mini Excavator upto 5T",
    operating_weight: "2.0 Ton",
    manufacture_year: "2020",
    digging_weight: "4.5 meter",
    max_reach: "4.2 meter",
    rental_price: "350",
    perdaycost: "130",
    perweekcost: "450",
    permonthcost: "1400",
  },
  {
    image: rentalitem1,
    name: "Hydraulic Excavator",
    operating_weight: "1.8 Ton",
    manufacture_year: "2021",
    digging_weight: "4.0 meter",
    max_reach: "3.9 meter",
    rental_price: "340",
    perdaycost: "120",
    perweekcost: "410",
    permonthcost: "1350",
  },
  {
    image: rentalitem2,
    name: "Standard Excavator",
    operating_weight: "1.6 Ton",
    manufacture_year: "2018",
    digging_weight: "4.2 meter",
    max_reach: "4.1 meter",
    rental_price: "330",
    perdaycost: "115",
    perweekcost: "420",
    permonthcost: "1325",
  },
  {
    image: rentalitem1,
    name: "Zero Tail Excavator",
    operating_weight: "1.9 Ton",
    manufacture_year: "2022",
    digging_weight: "4.4 meter",
    max_reach: "4.3 meter",
    rental_price: "360",
    perdaycost: "135",
    perweekcost: "430",
    permonthcost: "1380",
  },
  {
    image: rentalitem2,
    name: "Electric Mini Excavator",
    operating_weight: "1.4 Ton",
    manufacture_year: "2020",
    digging_weight: "3.9 meter",
    max_reach: "3.7 meter",
    rental_price: "310",
    perdaycost: "105",
    perweekcost: "395",
    permonthcost: "1275",
  },
  {
    image: rentalitem1,
    name: "Diesel Excavator",
    operating_weight: "2.1 Ton",
    manufacture_year: "2021",
    digging_weight: "4.6 meter",
    max_reach: "4.5 meter",
    rental_price: "370",
    perdaycost: "140",
    perweekcost: "460",
    permonthcost: "1450",
  },
  {
    image: rentalitem2,
    name: "Crawler Excavator",
    operating_weight: "1.7 Ton",
    manufacture_year: "2019",
    digging_weight: "4.0 meter",
    max_reach: "3.8 meter",
    rental_price: "335",
    perdaycost: "118",
    perweekcost: "415",
    permonthcost: "1330",
  },
];

const Services = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          position: "relative",
          width: "100%", // Set the width as needed
          backgroundImage: `url(${servicesbg})`, // Set the background image
          backgroundSize: "cover", // Cover the entire div
          backgroundPosition: "center", // Center the background image
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
        className="h-48 flex flex-col justify-center items-center"
      ></div>
      <div className="flex flex-col items-center justify-center mt-10">
        <button
          className="text-white py-5 px-6 rounded-0 hover:text-gray-900 flex items-center"
          style={{ backgroundColor: "#EFB007" }}
        >
          HOME <MdArrowForward className="ml-4" />{" "}
          <span className="ml-4">SERVICES</span>
        </button>
        <div className=" w-3/4 shadow-2xl justify-center items-center gap-4 p-6 mx-20 my-10 grid grid-cols-2">     
          {data.map((item) => (
            <div className="w-full flex flex-col items-center bg-white">
              <div className="flex">
                <img
                  src={item.image}
                  alt=""
                  className="h-auto w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                />
                <div className="flex flex-col w-1/2 px-2">
                  <h1 className=" text-gray-800 text-xl font-bold px-2 pt-2 mt-0">
                    {item.name}
                  </h1>
                  <div className="flex justify-start">
                    <p className="text-gray-400 text-sm px-2 pb-2">
                      Pioneer of the equipment rental industry.
                    </p>
                  </div>
                </div>
                <div>
                  <h1 className=" text-[#efb007] text-3xl font-bold px-3 mt-0 w-3/10">
                    ${item.rental_price}<span className="text-2xl text-black font-normal">/Day</span>
                  </h1>
                </div>
              </div>
              {/* <div className="line w-full bg-gray-200 h-1"></div> */}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
