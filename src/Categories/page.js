import React, { useState } from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import categoriesbg from "../Assets/categoriesbg.png";
import { MdArrowForward } from "react-icons/md";
import rentalitem1 from "../Assets/rentalitem2.png";

const productCategories = [
  {
    name: "Excavators",
    subcategories: [
      "Mini Excavators",
      "Crawler Excavators",
      "Wheeled Excavators",
      "Long Reach Excavators",
      "Amphibious Excavators",
      "Dragline Excavators",
    ],
  },
  {
    name: "Loaders",
    subcategories: [
      "Skid Steer Loaders",
      "Backhoe Loaders",
      "Wheel Loaders",
      "Track Loaders",
      "Front Loaders",
      "Compact Loaders",
    ],
  },
  {
    name: "Dozers",
    subcategories: [
      "Crawler Dozers",
      "Wheel Dozers",
      "Mini Dozers",
      "Bulldozers",
      "Loader Dozers",
      "Ripper Dozers",
    ],
  },
  {
    name: "Compactors",
    subcategories: [
      "Landfill Compactors",
      "Soil Compactors",
      "Vibratory Compactors",
      "Jumping Jack Compactors",
      "Plate Compactors",
      "Trench Compactors",
    ],
  },
  {
    name: "Dump Trucks",
    subcategories: [
      "Articulated Dump Trucks",
      "Rigid Dump Trucks",
      "Off-Highway Dump Trucks",
      "Tracked Dump Trucks",
      "Mini Dump Trucks",
      "Side Dump Trucks",
    ],
  },
  {
    name: "Cranes",
    subcategories: [
      "Mobile Cranes",
      "Tower Cranes",
      "Overhead Cranes",
      "Telescopic Cranes",
      "Crawler Cranes",
      "Rough Terrain Cranes",
      "All Terrain Cranes",
      "Truck Cranes",
    ],
  }
];

const data = [
  {
    name: "Aerial Equipment",
    description:
      "Excepteur sint occaecat cupidata proident in culpa qui officia deserunt mollit anim labor Sed ut perspiciatis unde omnis.",
  },
  {
    name: "Air Compressors",
    description:
      "Excepteur sint occaecat cupidata proident in culpa qui officia deserunt mollit anim labor Sed ut perspiciatis unde omnis.",
  },
  {
    name: "Compaction Equipment",
    description:
      "Excepteur sint occaecat cupidata proident in culpa qui officia deserunt mollit anim labor Sed ut perspiciatis unde omnis.",
  },
  {
    name: "Concrete Equipment",
    description:
      "Excepteur sint occaecat cupidata proident in culpa qui officia deserunt mollit anim labor Sed ut perspiciatis unde omnis.",
  },
];
const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(
      categoryName === selectedCategory ? null : categoryName
    );
  };

  return (
    <div>
      <Navbar />
      <div
        style={{
          position: "relative",
          width: "100%",
          backgroundImage: `url(${categoriesbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-48 flex flex-col justify-center items-center"
      ></div>
      <div className="justify-center items-center flex flex-col mt-10">
        <button
          className="text-white py-5 px-6 rounded-0 hover:text-gray-900 flex items-center"
          style={{ backgroundColor: "#EFB007" }}
        >
          HOME <MdArrowForward className="ml-4" />
          <span className="ml-4">EQUIPMENT CATEGORIES</span>
        </button>
      </div>
      <div className="flex flex-row  mt-0 p-20 pt-0">
        <div className="flex flex-col w-1/3">
          <h1 className="text-2xl font-semibold text-gray-600 mb-4">
            Product Categories
          </h1>
          <div className="border-b-2 border-yellow-500 mb-4"></div>
          <ul className="list-disc ml-5">
            {productCategories.map((category) => (
              <li
                key={category.name}
                className="text-xl font-semibold text-gray-500 cursor-pointer list-disc mb-3"
                onClick={() => handleCategoryClick(category.name)}
              >
                {category.name} {category.subcategories.length > 0 && <span className="text-sm">({category.subcategories.length})</span>}
                {selectedCategory === category.name && (
                  <ul className="mt-2 list-disc">
                    {category.subcategories.map((sub) => (
                      <li key={sub} className="text-sm text-gray-400 mb-3 ml-5">
                        {sub}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col w-2/3">
          <div className="p-10">
            {data.map((item) => (
              <div
                key={item.name}
                className="flex flex-row border border-gray-200 shadow-xl cursor-pointer mb-10"
              >
                <div className="flex">
                  <img src={rentalitem1} alt="rentalitem1" className="h-80" />
                </div>
                <div className="flex flex-col w-2/3 p-20">
                  <h1 className="text-xl font-semibold text-gray-600 mb-2">
                    {item.name}
                  </h1>
                  <p className="text-sm text-gray-500 mb-2">
                    {item.description}
                  </p>
                  <button className="text-black rounded-0 hover:text-gray-900 flex items-center" onClick={() => window.location.href = "/details"}>
                    READ MORE{" "}
                    <MdArrowForward className="ml-1 text-yellow-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Categories;
