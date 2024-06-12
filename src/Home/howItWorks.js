import React from "react";
import homeWorks from "../Assets/homeWorks.png";
import aboutusicon from "../Assets/aboutusicon.png";
import homeServiceTick from "../Assets/homeServiceTick.png";

const points = [
  "Nostrud exercitation ullamco laboris",
  "Ut aliquip ex ea reprehen deritin voluptate",
  "Adipisicing elit sed eiusmod tempor incididunt",
  "Labore dolore magna aliqua veniam nostrud",
];

const HowItWorks = () => {
  return (
    <div className="flex flex-row justify-center items-center p-36 pt-10 pb-20">
      <div className="w-1/2">
        <img src={homeWorks} alt="homeAboutUs" style={{ height: "auto" }} />
      </div>
      <div className="w-1/2 flex-col ml-10">
        <p className="text-lg font-semibold text-gray-500 mb-3">
          How It Works Dyno Dash Equipment Rentals
        </p>
        <h1 className="text-4xl font-bold text-slate-900">
          Over 15,000+ Rental Deals <br></br>Dyno Dash Is The Best Choice
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
          {points.map((point) => (
            <div className="flex-row w-full flex mt-4">
              <img
                src={homeServiceTick}
                alt="homeServiceTick"
                style={{ height: "auto" }}
              />
              <p className="text-xl text-slate-900 ml-3">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
