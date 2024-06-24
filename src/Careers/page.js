import React from "react";
import { MdArrowForward } from "react-icons/md";
import career1 from "../Assets/career1.png";
import career2 from "../Assets/career2.png";
import career3 from "../Assets/career3.png";
import career4 from "../Assets/career4.png";
import career5 from "../Assets/career5.png";
import career6 from "../Assets/career6.png";
import careerbg from "../Assets/careerbg.png";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

const data = [
  {
    name: "TRUCK OPERATOR",
    image: career1,
  },
  {
    name: "CIVIL MANAGER",
    image: career2,
  },
  {
    name: "FIELD INSPECTOR",
    image: career3,
  },
  {
    name: "TRUCK OPERATOR",
    image: career4,
  },
  {
    name: "ACCOUNTANT",
    image: career5,
  },
  {
    name: "FRONT DESK",
    image: career6,
  },
];

const Careers = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          position: "relative",
          width: "100%", // Set the width as needed
          backgroundImage: `url(${careerbg})`, // Set the background image
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
          <span className="ml-4">CAREER</span>
        </button>
        <div className="flex flex-row items-center justify-center mt-10 p-40 pt-10 pb-10">
          <div className="flex flex-col">
            <p className="text-yellow-500">
              [Premier Equipment Rental Service]
            </p>
            <h1 className="text-4xl font-bold">
              We glad provide work to any Industry specialists
            </h1>
          </div>
          <p className="text-gray-400 text-left">
            Kiusmod tempor sed incididunts labore sed dolor mag aliqua enimad
            mini veniam quis nostrud exercitation ullamco labores nisi ut
            aliquip ex ea reprehen deritin voluptate.
          </p>
        </div>

        <div className="flex flex-row flex-wrap justify-center mt-10 mb-20">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-5 m-5 bg-gray-50 border w-1/4"
            >
              <img src={item.image} alt={item.name} className="h-12 w-12" />
              <h1 className="text-2xl font-bold mt-5">{item.name}</h1>
              <p className="text-gray-400 text-center mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <button className="bg-yellow-400 text-white py-2 px-6 rounded-lg mt-5">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
