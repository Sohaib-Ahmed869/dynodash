import React, { useRef, useEffect, useState } from "react";
import Navbar from "../Components/navbar";
import aboutpagebg from "../Assets/aboutpagebg.png";
import card1 from "../Assets/card1.png";
import card2 from "../Assets/card2.png";
import card3 from "../Assets/card3.png";
import { MdArrowForward } from "react-icons/md";
import aboutpagelogo from "../Assets/aboutpagelogo.png";
import aboutpagesectionbg from "../Assets/aboutpagesectionbg.png";
import teammember from "../Assets/teammember.png";
import Footer from "../Components/footer";
const teammembers = [
  "Lance Vargas",
  "Brent Vargas",
  "Deanna Hunt",
  "Shaggay o Brian",
];
const cardData = [
  {
    image: card1,
    heading: "Comprehensive Rental Fleet for you",
    data: "Excepteur sint occaecat cupidaty in culpaqu officia deserunt mollits Sed ut perspiciatis unde.",
  },
  {
    image: card2,
    heading: "Prepared to Serve Your Needs",
    data: "Excepteur sint occaecat cupidaty in culpaqu officia deserunt mollits Sed ut perspiciatis unde.",
  },
  {
    image: card3,
    heading: "Equipment Perform at Top Levels",
    data: "Excepteur sint occaecat cupidaty in culpaqu officia deserunt mollits Sed ut perspiciatis unde.",
  },
];
const Stats = [
  {
    name: "Rental Orders",
    value: "3K",
  },
  {
    name: "Experienced Team",
    value: "114+",
  },
  {
    name: "Customer Reviews",
    value: "3K+",
  },
  {
    name: "Verified Locations",
    value: "137+",
  },
];
const About = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          position: "relative",
          width: "100%", // Set the width as needed
          backgroundImage: `url(${aboutpagebg})`, // Set the background image
          backgroundSize: "cover", // Cover the entire div
          backgroundPosition: "center", // Center the background image
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
        className="h-48 flex flex-col justify-center items-center"
      ></div>
      <div className="justify-center items-center flex flex-col mt-10">
        <button
          className="text-white py-5 px-6 rounded-0 hover:text-gray-900 flex items-center"
          style={{ backgroundColor: "#EFB007" }}
        >
          HOME <MdArrowForward className="ml-4" />{" "}
          <span className="ml-4">ABOUT COMPANY</span>
        </button>
        <div className="flex flex-row justify-center items-center mt-10 p-20 pt-0">
          <div className="w-1/2 text-left p-10 flex flex-col">
            <p className="text-yellow-500 text-lg p-10">
              [30 Years Of Equipment Rental Expertise]
            </p>
            <h1 className="text-black text-5xl font-bold p-10">
              Provide Rent Solutions to Utilize Industry Assistance
            </h1>
          </div>
          <div className="w-1/2 text-left p-10 flex flex-col">
            <p className="text-gray-400 text-lg p-10">
              Kiusmod tempor sed incididunts labore sed dolor mag aliqua enimad
              mini veniam quis nostrud exercitation ullamco labores nisi ut
              aliquip ex ea reprehen deritin voluptate.
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center mt-10 p-40 pt-0">
          {cardData.map((card) => (
            <div className="w-1/3 flex flex-col text-left border-l-2  border-black mr-10 shadow-2xl bg-white">
              <div className="p-10">
                <img src={card.image} alt="card" className="h-20 w-20"></img>
                <h1 className=" text-black text-2xl font-bold p-2 mt-10">
                  {card.heading}
                </h1>
              </div>
              <div className="line w-full bg-gray-200 h-1"></div>
              <p className="text-gray-400 text-lg mt-10 p-10">{card.data}</p>
              <MdArrowForward
                size={48}
                className="text-3xl text-gray-600 rounded-full bg-gray-200 p-3 ml-10 mb-10"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center mt-0 p-0 text-center">
          <img
            src={aboutpagelogo}
            alt="aboutpagelogo"
            className="h-5 w-5"
          ></img>
          <p className="text-gray-400 text-lg mt-2">
            [Premier Equipment Rental Service]
          </p>
          <h1 className="text-black text-3xl font-bold p-2">
            Meet Our Team Members
          </h1>
          <div className="flex flex-row justify-center items-center mt-10">
            {teammembers.map((member) => (
              <div className="flex flex-col text-left w-1/4 shadow-xl bg-white ml-10">
                <img src={teammember} alt="teammember"></img>
                <div className="p-5">
                  <h1 className="text-black text-xl mt-5">{member}</h1>
                  <p className="text-gray-400 text-sm">CEO of Company</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            position: "relative",
            width: "100%", // Set the width as needed
            backgroundImage: `url(${aboutpagesectionbg})`, // Set the background image
            backgroundSize: "cover", // Cover the entire div
            backgroundPosition: "center", // Center the background image
            backgroundRepeat: "no-repeat",
            zIndex: 0,
          }}
          className="h-80 flex flex-col  mt-40"
        >
          <div className="w-1/2 text-left p-14">
            <p className="text-yellow-500 text-sm p-0">
              {" "}
              [30 Years Of Equipment Rental Expertise]
            </p>
            <h1 className="text-white text-3xl font-bold p-0 mt-10">
              Provide Solutions to Utilize Industry<br></br> and Assistance for Better
              Working
            </h1>
            <p className="text-white text-sm p-0 flex flex-row items-center mt-10">
              <MdArrowForward className="mr-1 text-yellow-500 " /> SEE HOW IT WORKS
            </p>
          </div>
        </div>
        <div className="flex flex-row mt-20 mb-40 p-20 w-full">
          {Stats.map((stat) => (
            <div className="w-1/4 flex flex-col text-left border-r-2  border-yellow-500 mr-10 shadow-2xl bg-white">
              <div className="p-5">
                <h1 className=" text-gray-800 text-xl font-bold p-2 mt-0">
                  {stat.name}
                </h1>
                <h1 className=" text-black text-5xl font-bold p-2 mt-0">
                  {stat.value}
                </h1>
                <p className="text-gray-400 text-sm mt-2 p-2">
                  Pioneer of the equipment rental industry.
                </p>
              </div>
              <div className="line w-full bg-gray-200 h-1"></div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
