import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const FilterPanel = () => {
  const [priceRange, setPriceRange] = useState([125, 1250]);
  const [weightRange, setWeightRange] = useState([1, 12]);
  const [depthRange, setDepthRange] = useState([4, 15]);

  return (
    <div className="p-4 border border-gray-100 w-full shadow">
      <h2 className="text-xl font-semibold mb-4">Refine Search</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Category
        </label>
        <div className="relative">
          <select className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option>All</option>
            <option>Category 1</option>
            <option>Category 2</option>
          </select>
          <FaChevronDown className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700" />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Location
        </label>
        <div className="relative">
          <select className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option>All</option>
            <option>Location 1</option>
            <option>Location 2</option>
          </select>
          <FaChevronDown className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700" />
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-sm font-bold text-gray-700 mb-2">Price</h3>
        <div className="flex items-center">
          <Slider
            min={125}
            max={1250}
            defaultValue={priceRange}
            onChange={setPriceRange}
            allowCross={true}
            range
            trackStyle={[{ backgroundColor: "#efb007" }]}
            handleStyle={[
              { borderColor: "#f6f6f6", border: "1px solid #c6c6c6", backgroundColor: "#f6f6f6", boxShadow: "0px 0px 6px #c6c6c6" },
              { borderColor: "#f6f6f6", border: "1px solid #c6c6c6", backgroundColor: "#f6f6f6", boxShadow: "0px 0px 6px #c6c6c6" },
            ]}
          />
        </div>
        <div className="flex justify-center items-center text-sm mt-2">
          <span style={{ textDecoration: "underline" }}>
            Range from {priceRange[0]} to {priceRange[1]}
          </span>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-sm font-bold text-gray-700 mb-2">
          Operating Weight
        </h3>
        <div className="flex items-center">
          <Slider
            min={1}
            max={12}
            defaultValue={weightRange}
            onChange={setWeightRange}
            allowCross={true}
            range
            trackStyle={[{ backgroundColor: "#efb007" }]}
            handleStyle={[
              { borderColor: "#f6f6f6", border: "1px solid #c6c6c6", backgroundColor: "#f6f6f6", boxShadow: "0px 0px 6px #c6c6c6" },
              { borderColor: "#f6f6f6", border: "1px solid #c6c6c6", backgroundColor: "#f6f6f6", boxShadow: "0px 0px 6px #c6c6c6" },
            ]}
          />
        </div>
        <div className="flex justify-center items-center text-sm mt-2">
          <span style={{ textDecoration: "underline" }}>
            Range from {weightRange[0]} to {weightRange[1]}
          </span>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-700 mb-2">
          Digging Depth
        </h3>
        <div className="flex items-center">
          <Slider
            min={4}
            max={15}
            defaultValue={depthRange}
            onChange={setDepthRange}
            allowCross={true}
            range
            trackStyle={[{ backgroundColor: "#efb007" }]}
            handleStyle={[
              { borderColor: "#f6f6f6", border: "1px solid #c6c6c6", backgroundColor: "#f6f6f6", boxShadow: "0px 0px 6px #c6c6c6" },
              { borderColor: "#f6f6f6", border: "1px solid #c6c6c6", backgroundColor: "#f6f6f6", boxShadow: "0px 0px 6px #c6c6c6" },
            ]}
          />
        </div>
        <div className="flex justify-center items-center text-sm mt-2">
          <span style={{ textDecoration: "underline" }}>
            Range from {depthRange[0]} to {depthRange[1]}
          </span>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-700 mb-2">
          Delivery or Self Pickup
        </h3>
        <div>
          <label className="inline-flex items-center mt-3">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2 text-gray-700">Delivery (5)</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center mt-3">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2 text-gray-700">Pickup (6)</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
