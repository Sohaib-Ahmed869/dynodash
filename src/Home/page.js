import React, { useRef, useEffect, useState } from "react";
import home1 from "../Assets/home_background.png";
import home1bottom from "../Assets/home1bottom.png";
import aboutusicon from "../Assets/aboutusicon.png";
import { MdArrowForward } from "react-icons/md";
import AboutUs from "./aboutus";
import Services from "./services";
import HowItWorks from "./howItWorks";
import Section from "./section";
import Cards from "./cards";
import Testimonials from "./testimonials";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

const Home = () => {
  const categories = [
    "Aerial Machines",
    "Excavators",
    "Wheel Loaders",
    "Backhoe Loaders",
    "Skid Steer Loaders",
    "Compactors",
    "Telehandlers",
    "Forklifts",
    "Attachments",
    "Parts",
    "Services",
    "Rental",
    "Financing",
    "Training",
    "Safety",
  ];
  const locations = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  const [date, setDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [show, doShow] = useState(false);
  const [showEnd, doShowEnd] = useState(false);
  return (
    <div>
      <Navbar />
      <div
        style={{
          position: "relative",
          width: "100%", // Set the width as needed
          backgroundImage: `url(${home1})`, // Set the background image
          backgroundSize: "cover", // Cover the entire div
          backgroundPosition: "center", // Center the background image
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
        className="h-screen flex flex-col justify-center items-center"
      >
        <div className="w-1/2 text-center p-10">
          <h1 className="text-white text-5xl font-bold p-10">
            Power at your Fingertips
          </h1>
          <p className="text-white text-2xl">
            Easy online rentals of heavy machinery, plus premium lubrication
            <br></br>
            products and spare parts for your construction and industrial needs.
          </p>
          <div className="flex justify-center items-center mt-10">
            <button
              className="text-white py-3 px-6 rounded-0 font-semibold hover:text-gray-900"
              style={{ backgroundColor: "#EFB007" }}
              onClick={() => (window.location.href = "/categories")}
            >
              Shop Now
            </button>
            <button
              className="bg-transparent text-white py-3 px-6 rounded-0 ml-5 border border-white font-semibold hover:bg-white hover:text-gray-900"
              onClick={() => (window.location.href = "/contact")}
            >
              Contact Us
            </button>
          </div>
        </div>
        <img
          src={home1bottom}
          alt="home1bottom"
          style={{
            width: "100%", // Match the width of the container
            height: "auto",
            position: "absolute",
            bottom: 0, // Stick to the bottom
            left: 0, // Align to the left
          }}
        />
        <div
          className="flex flex-col justify-center items-center w-full bottom-0 absolute"
          style={{ marginBottom: "-50px", zIndex: "99" }}
        >
          <div className="bg-white text-black px-10 py-10 border-t border-none flex flex-row shadow-2xl w-3/4 rounded-0">
            <div className="flex-col w-1/4 border-r border-slate-300 mr-3">
              <p className="text-slate-500 text-sm ml-1">Select Machine</p>
              <select className="mt-2 p-0 border border-none rounded-lg w-3/4">
                {categories.map((category) => (
                  <option value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div className="flex-col w-1/4 border-r border-slate-300 mr-3">
              <p className="text-slate-500 text-sm ml-1">Project Location</p>
              <select className="mt-2 p-0 border border-none rounded-lg w-3/4">
                {locations.map((location) => (
                  <option value={location}>{location}</option>
                ))}
              </select>
            </div>
            <div className="flex-col w-1/4 border-r border-slate-300 mr-4 pr-2">
              <p className="text-slate-500 text-sm ml-1">When</p>
              <div className="border border-none rounded-lg w-3/4 mt-2">
                <p className="text-slate-500 text-sm ml-1">
                  <span
                    onClick={() => doShow(!show)}
                    className="cursor-pointer hover:text-gray-900"
                  >
                    {date.toDateString()}
                  </span>{" "}
                  -
                  <span
                    onClick={() => doShowEnd(!showEnd)}
                    className="cursor-pointer hover:text-gray-900"
                  >
                    {endDate.toDateString()}
                  </span>
                </p>
              </div>
              {show && (
                <Calendar
                  date={date}
                  onChange={(date) => setDate(date)}
                  showDateDisplay={false}
                  className="absolute"
                />
              )}
              {showEnd && (
                <Calendar
                  date={endDate}
                  onChange={(date) => setEndDate(date)}
                  showDateDisplay={false}
                  className="absolute"
                />
              )}
            </div>
            <div className="flex-col w-1/4">
              <button
                className=" text-white p-2 rounded-0 w-full h-full flex justify-center items-center"
                style={{ backgroundColor: "#EFB007" }}
              >
                FIND EQUIPMENT <MdArrowForward className="ml-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-36">
        <AboutUs />
      </div>
      <div className="mt-0">
        <Services />
      </div>

      <div className="mt-0 mb-20">
        <h1 className="text-4xl font-bold text-slate-900 text-center">
          Popular Equipment's On Rent
        </h1>
        <p className="text-lg text-gray-500 text-center mt-5">
          Lorem Ipsum is simply dummy text of the<br></br> printing and
          typesetting industry.
        </p>
        <Cards />
      </div>
      <div className="mt-0">
        <h1 className="text-4xl font-bold text-slate-900 text-center">
          How It Works
        </h1>
        <p className="text-lg text-gray-500 text-center mt-5">
          Ready to power your project?<br></br> Join Dyno Dash today and access top
          equipment and talent instantly!
        </p>
        <HowItWorks />
      </div>
      <Section />
      <div className="mt-20 justify-center items-center flex flex-col p-10">
        <p className="text-lg text-gray-500 text-center mt-5">
          We Promise To Find You The Right Equipment
        </p>
        <h1 className="text-4xl font-bold text-slate-900 text-center">
          Read Customer Thoughts
        </h1>
        <img src={aboutusicon} alt="aboutusicon" className="mt-5" />
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
