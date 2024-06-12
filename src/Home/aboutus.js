import React from "react";
import homeAboutUs from "../Assets/homeAboutUs.png";
import aboutusicon from "../Assets/aboutusicon.png";
const AboutUs = () => {
  return (

    <div className="flex flex-row justify-center items-center p-36 pt-10 pb-20">
       

      <div className="w-1/2">
        <img src={homeAboutUs} alt="homeAboutUs" style={{ height: "auto" }} />
      </div>
      <div className="w-1/2 flex-col">
        <p className="text-lg font-semibold text-gray-500 mb-3">
          About Dyno Dash Equipment's Rental
        </p>
        <h1 className="text-4xl font-bold text-slate-900">
          We Offer Smarter & More Affordable Access To Rent Construction
          Equipment
        </h1>
        <div className="flex flex-row items-center mt-10 mb-10">
          <img src={aboutusicon} alt="aboutusicon" style={{ height: "auto" }} />
        </div>
        <p className="text-lg font-semibold text-gray-500">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words.
        </p>
        <div className="flex flex-col justify-center items-center mt-10">
          <div className="flex-row w-full flex justify-between">
            <p className="text-xl font-bold text-slate-900 w-1/3">
              The Facilities Less Expensive
            </p>
            <div className="border-l-2 ml-5 mr-10 border-gray-500 h-20"></div>
            <p className="text-xl font-semibold text-gray-500 w-2/3">
              Velit esse cillum dolore ipsum eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-10">
          <div className="flex-row w-full flex justify-between">
            <p className="text-xl font-bold text-slate-900 w-1/3">
              Innovating The Heavy Fleets
            </p>
            <div className="border-l-2 ml-5 mr-10 border-gray-500 h-20"></div>
            <p className="text-xl font-semibold text-gray-500 w-2/3">
              Excepteur sint occaecat cupidat non proident sunt iny.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
