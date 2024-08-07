import { useState } from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import FilterPanel from "./filterPanel";
import excavrentbg from "../Assets/excavrentbg.png";
import { MdArrowForward } from "react-icons/md";
import rentalitem1 from "../Assets/spareitem1.png";
import rentalitem2 from "../Assets/spareitem2.png";
import Card from "./card";
import Search from "./search";

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
    weight: "1.5 Ton",
    gradeadility: "30°",
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
    weight: "1.5 Ton",
    gradeadility: "30°",
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
    weight: "1.5 Ton",
    gradeadility: "30°",
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
    weight: "1.5 Ton",
    gradeadility: "30°",
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
    weight: "1.5 Ton",
    gradeadility: "30°",
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
    weight: "1.5 Ton",
    gradeadility: "30°",
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
    weight: "1.5 Ton",
    gradeadility: "30°",
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
    weight: "1.5 Ton",
    gradeadility: "30°",
  },
];

const itemsPerPage = 6;
let totalCards = data.length;

const SparePart = () => {
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const totalPages = Math.ceil(totalCards / itemsPerPage);

  return (
    <div>
      <Navbar />
      <div>
        <div
          style={{
            position: "relative",
            width: "100%", // Set the width as needed
            backgroundImage: `url(${excavrentbg})`, // Set the background image
            backgroundSize: "cover", // Cover the entire div
            backgroundPosition: "center", // Center the background image
            backgroundRepeat: "no-repeat",
            zIndex: 0,
          }}
          className="h-48 flex flex-col justify-center items-center"
        ></div>
        <div className="flex flex-col items-center justify-center my-10">
          <button
            className="text-white py-5 px-6 rounded-0 hover:text-gray-900 flex items-center"
            style={{ backgroundColor: "#EFB007" }}
          >
            HOME <MdArrowForward className="ml-4" />{" "}
            <span className="ml-4">GET "PARTS" ON RENT</span>
          </button>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="flex w-3/4 mb-20 gap-10">
            <div className="flex flex-col w-1/3 ">
              <FilterPanel
                priceRange={priceRange}
                setPriceRange={setPriceRange}
              />
            </div>
            <div className="flex flex-col w-2/3 gap-14">
              <div className="w-full">
                <Search />
              </div>
              <div className="flex flex-row gap-2 flex-wrap">
                {data.map((item) => (
                  <Card item={item} />
                ))}
              </div>
              <div className="flex flex-col justify-between items-center w-1/2 px-4">
                <div className="flex w-full items-start justify-start mb-5">
                  <p className="text-gray-600">
                    Viewing {indexOfFirstItem + 1} -{" "}
                    {Math.min(indexOfLastItem, totalCards)} of {totalCards}{" "}
                    Spare Parts
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => setCurrentPage(index + 1)}
                      className={`px-3 py-1 rounded-md ${
                        currentPage === index + 1
                          ? "bg-yellow-500 text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                  {currentPage < totalPages && (
                    <button
                      onClick={() => setCurrentPage(currentPage + 1)}
                      className="px-3 py-1 rounded-md bg-gray-200 text-gray-700"
                    >
                      →
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SparePart;
