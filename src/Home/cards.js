import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

import rentalitem1 from "../Assets/rentalitem1.png";
import rentalitem2 from "../Assets/rentalitem2.png";
import bullet from "../Assets/bullet.png";
import { MdArrowForward } from "react-icons/md";

import './cards.css';

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

const Cards = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={0}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {data.map((item) => (
        <SwiperSlide key={item.name} className="p-2 mb-20">
          <div className="card shadow-xl items-center justify-center">
            <img src={item.image} alt="rentalitem1" className="w-full h-64" />
            <div className="p-3">
              <h1 className="text-2xl font-bold text-slate-900">{item.name}</h1>
              <div className="flex flex-row items-center mt-2">
                <p className="text-yellow-500 mr-3">View Details</p>
                <div className="border-r border-slate-600 h-6 mr-3"></div>
                <p className="text-yellow-500">Print Quotation</p>
              </div>
            </div>
            <div className="p-3">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center">
                  <img src={bullet} alt="bullet" />
                  <p className="text-black font-semibold ml-1">
                    Operating Weight: {item.operating_weight}
                  </p>
                </div>
                <div className="flex flex-row items-center">
                  <img src={bullet} alt="bullet" />
                  <p className="text-black font-semibold ml-1">
                    Manufacture Year: {item.manufacture_year}
                  </p>
                </div>
              </div>
            </div>
            <div className="p-3">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center">
                  <img src={bullet} alt="bullet" />
                  <p className="text-black font-semibold ml-1">
                    Digging Weight: {item.digging_weight}
                  </p>
                </div>
                <div className="flex flex-row items-center">
                  <img src={bullet} alt="bullet" />
                  <p className="text-black font-semibold ml-1">
                    Max Reach: {item.max_reach}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3 border-t border-slate-300 border-b flex flex-row item-center justify-between">
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-slate-900">
                  Total Rental Price
                </h1>
                <p className="text-md text-slate-900">(Incl. Taxes)</p>
              </div>
              <div className="flex flex-col">
                <p className="text-2xl font-bold text-yellow-500">
                  ${item.rental_price * 0.8}
                </p>
                <p className="text-lg font text-gray-500 line-through text-right">
                  ${item.rental_price}
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-between">
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
            </div>
            <button className="mt-20 flex flex-row items-center text-center justify-center bg-black text-white p-3 w-full rounded-0 border border-white font-semibold hover:bg-white hover:text-gray-900">
              BOOK NOW <MdArrowForward className="ml-4" />
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Cards;
