import React, { useState } from "react";
import listBlack from "../Assets/list_black.png";
import listWhite from "../Assets/list_white.png";
import tileBlack from "../Assets/tile_black.png";
import tileWhite from "../Assets/tile_white.png";

const Search = (handleLayoutChange) => {
  const [sortOption, setSortOption] = useState("Default sorting");
  const [searchLayout, setSearchLayout] = useState("list");

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const changeLayout = (layout) => {
    setSearchLayout(layout);
  };

  return (
    <div className="flex justify-between items-center bg-white border border-gray-100 shadow-md h-full">
      <div className="text-gray-600 p-5">
        Showing results <span className="font-semibold">6</span> of total{" "}
        <span className="font-semibold">11</span>
      </div>
      <div className="flex items-center space-x-4 h-full">
        <div className="flex items-center">
          <span className="text-gray-600 mr-2">Sort By:</span>
          <select
            value={sortOption}
            onChange={handleSortChange}
            className="p-2 bg-white"
          >
            <option value="Default sorting">Default sorting</option>
            <option value="Sort by price">Sort by price</option>
            <option value="Sort by rating">Sort by rating</option>
          </select>
        </div>
        <div className="flex items-center h-full">
          <button
            className={`px-5 h-full w-auto ${
              searchLayout === "list"
                ? "bg-gray-800"
                : "bg-white"
            }`}
            onClick={() => changeLayout("list")}
          >
            <img src={searchLayout == 'list'? listWhite : listBlack} alt="list" className="w-5 h-5"/>
          </button>
          <button
            className={`px-5 h-full w-auto ${
              searchLayout === "tile"
                ? "bg-gray-800"
                : "bg-white"
            }`}
            onClick={() => changeLayout("tile")}
          >
            <img src={searchLayout == 'tile'? tileWhite : tileBlack} alt="tile" className="w-5 h-5"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
