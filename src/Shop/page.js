import React from "react";
import equipment from "../Assets/shop.png";
import shop2 from "../Assets/shop2.png";
import equipmentBG from "../Assets/shopBG.png";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { MdArrowForward } from "react-icons/md";

const data = [
  {
    image: equipment,
    name: "Engine Parts",
  },
  {
    image: shop2,
    name: "Electrical Components",
  },
  {
    image: shop2,
    name: "Batteries",
  },
  {
    image: equipment,
    name: "Transmission Systems",
  },
  {
    image: shop2,
    name: "Fluids",
  },
  {
    image: equipment,
    name: "Service Kits",
  },
  {
    image: shop2,
    name: "Suspension Components",
  },
  {
    image: equipment,
    name: "Brake Components",
  },
  {
    image: equipment,
    name: "Hydraulic Components",
  },
  {
    image: shop2,
    name: "Engine Spare Parts",
  },
  {
    image: equipment,
    name: "Ground Engaging Tools",
  },
  {
    image: equipment,
    name: "Screening Panels",
  },
  {
    image: shop2,
    name: "Conveyor Components",
  },
];

const Shop = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          position: "relative",
          width: "100%", // Set the width as needed
          backgroundImage: `url(${equipmentBG})`, // Set the background image
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
          <span className="ml-4">SHOP SPARE PARTS</span>
        </button>

        <div className="flex flex-row justify-center mt-10 p-20 pt-0 flex-wrap">
          {data.map((card) => (
            <div className="flex flex-col text-left mr-4 shadow-2xl mb-10">
              <img src={card.image} alt="card" className="h-full w-full"></img>
              <div className="p-10 w-full flex flex-col items-center pt-2">
                <h1 className=" text-black text-2xl font-bold mt-5 mb-4">
                  {card.name}
                </h1>
                <button
                  className="bg-yellow-500 text-white py-2 px-4 justify-center w-full  hover:bg-yellow-600 flex items-center"
                  onClick={() => (window.location.href = "/excavatorrent")}
                >
                  VIEW ALL <MdArrowForward className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
