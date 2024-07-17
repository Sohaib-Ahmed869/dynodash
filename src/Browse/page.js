import React from "react";
import equipment from "../Assets/equipment.png";
import equipmentBG from "../Assets/equipmentBG.png";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { MdArrowForward } from "react-icons/md";

const data = [
  {
    image: equipment,
    name: "Excavators",
  },
  {
    image: equipment,
    name: "Bulldozers",
  },
  {
    image: equipment,
    name: "Wheel Loaders",
  },
  {
    image: equipment,
    name: "Skid Steers",
  },
  {
    image: equipment,
    name: "Motor Graders",
  },
  {
    image: equipment,
    name: "Crawler Loaders",
  },
  {
    image: equipment,
    name: "Compactors",
  },
  {
    image: equipment,
    name: "Telehandlers",
  },
  {
    image: equipment,
    name: "Forklifts",
  },
  {
    image: equipment,
    name: "Dump Trucks",
  },
  {
    image: equipment,
    name: "Backhoe Loaders",
  },
  {
    image: equipment,
    name: "Pipelayers",
  },
  {
    image: equipment,
    name: "Pavers",
  },
  {
    image: equipment,
    name: "Trenchers",
  },
  {
    image: equipment,
    name: "Cranes",
  },
  {
    image: equipment,
    name: "Drilling Equipment",
  },
  {
    image: equipment,
    name: "Material Handlers",
  },
  {
    image: equipment,
    name: "Road Maintenance",
  },
  {
    image: equipment,
    name: "Sweepers",
  },
  {
    image: equipment,
    name: "Snow Removal",
  },
  {
    image: equipment,
    name: "Attachments",
  },
  {
    image: equipment,
    name: "Parts",
  },
  {
    image: equipment,
    name: "Other Equipment",
  },
];

const BrowseEquipment = () => {
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
          <span className="ml-4">BROWSE EQUIPMENT</span>
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

export default BrowseEquipment;
