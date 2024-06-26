import React from "react";
import rentalitem1 from "../../Assets/rentalitem1.png";
import rentalitem2 from "../../Assets/rentalitem2.png";

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
];

const Product = () => {
  return (
    <div className="p-3">
      <table className="min-w-full border border-gray-200">
        <thead>
          <tr className="border-b border-gray-200 text-center">
            <th className="text-center">Image</th>
            <th className="text-center">Name</th>
            <th className="text-center">Rental Price</th>
            <th className="text-center">Date</th>
            <th className="text-center w-48"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b border-gray-200 text-center">
              <td className="p-3">
                <img src={item.image} alt={item.name} className="w-32 h-20" />
              </td>
              <td className="border-l border-gray-200 p-3 text-center">
                <p className="text-xl text-black">{item.name}</p>
                <p className="text-sm text-gray-400">
                  Your submitted item currently in pending review.
                </p>
              </td>
              <td className="flex flex-col gap-2 text-center border-l border-r border-gray-200 p-3">
                <p className="text-3xl text-yellow-500 mt-2">
                  $ {item.rental_price}
                </p>
                <span className="text-sm text-black">Per Hour</span>
              </td>
              <td className="text-2xl border-l border-r border-gray-200 p-3">{new Date().toLocaleDateString()}</td>
              <td className="text-center flex flex-col  mb-4 ml-5">
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white p-2 rounded-0 w-3/4">
                  View Listing
                </button>
                <button className="bg-white hover:bg-black hover:text-white text-black p-2 mt-2 rounded-0 w-3/4 border border-black" onClick={() => alert("Are you sure you want to delete this listing?")}>
                  Delete Listing
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Product;
