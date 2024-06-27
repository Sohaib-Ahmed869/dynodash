import React, { useState } from 'react';
import { FaThList, FaTh } from 'react-icons/fa';

const Search = () => {
  const [sortOption, setSortOption] = useState('Default sorting');

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="text-gray-600">
        Showing results <span className="font-semibold">6</span> of total <span className="font-semibold">11</span>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <span className="text-gray-600 mr-2">Sort By:</span>
          <select
            value={sortOption}
            onChange={handleSortChange}
            className="border border-gray-300 rounded-md p-2 bg-white"
          >
            <option value="Default sorting">Default sorting</option>
            <option value="Sort by price">Sort by price</option>
            <option value="Sort by rating">Sort by rating</option>
          </select>
        </div>
        <div className="flex items-center">
          <button className="p-2 bg-gray-800 text-white rounded-l-md">
            <FaThList />
          </button>
          <button className="p-2 bg-gray-800 text-white rounded-r-md">
            <FaTh />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;