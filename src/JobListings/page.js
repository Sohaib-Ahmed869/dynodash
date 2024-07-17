import React, { useState } from "react";
import { MdArrowForward } from "react-icons/md";
import career1 from "../Assets/career1.png";
import { Modal } from "react-bootstrap";
import careerbg from "../Assets/joblistingBG.png";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { AiOutlineClose } from "react-icons/ai";
import completed from "../Assets/completed.png";

const data = [
  {
    name: "TRUCK OPERATOR",
    image: career1,
  },
  {
    name: "TRUCK OPERATOR",
    image: career1,
  },
];

const JobListings = () => {
  const [show, setShow] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);
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
            <p className="text-yellow-500">[Dyno Dash Recruitment]</p>
            <h1 className="text-4xl font-bold">
              Powering Careers in Engineering and Technical Fields
            </h1>
          </div>
        </div>

        <div className="flex flex-row flex-wrap justify-center mt-10 mb-20">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex relative flex-col items-center justify-center p-5 m-5 bg-gray-50 border w-1/4"
            >
              <img src={item.image} alt={item.name} className="h-12 w-12" />
              <h1 className="text-2xl font-bold mt-5">{item.name}</h1>
              <p className="text-gray-400 text-center mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <p
                className="text-yellow-500 mt-5 flex items-center cursor-pointer"
                onClick={() => setShow(true)}
              >
                Apply Now <MdArrowForward className="ml-2" />
              </p>
            </div>
          ))}
        </div>
      </div>
      {
        //if the modal is show then overlay will be shown
        show && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"
            onClick={() => setShow(false)}
          ></div>
        )
      }
      {
        //if the modal is show then overlay will be shown
        showCompleted && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"
            onClick={() => setShowCompleted(false)}
          ></div>
        )
      }
      <Footer />
      <Modal
        show={show}
        onHide={() => setShow(false)}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-2xl w-1/2 shadow-xl z-50 bg-white p-10 modal modalbody"
      >
        <Modal.Header className="flex justify-between w-full">
          <Modal.Title>Apply for Truck Operator</Modal.Title>
          <AiOutlineClose onClick={() => setShow(false)} />
        </Modal.Header>
        <Modal.Body>
          <div className="flex items-center justify-between w-full gap-10 mt-5">
            <div className="flex flex-col w-1/2">
              <input
                type="text"
                className="rounded-md p-2 bg-gray-100"
                placeholder="Enter first name"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <input
                type="text"
                className="rounded-md p-2 bg-gray-100"
                placeholder="Enter last name"
              />
            </div>
          </div>

          <div className="flex items-center justify-between w-full gap-10 mt-5">
            <div className="flex flex-col w-1/2">
              <input
                type="text"
                className="rounded-md p-2 bg-gray-100"
                placeholder="Enter Gender"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <input
                type="text"
                className="rounded-md p-2 bg-gray-100"
                placeholder="Enter DOB"
              />
            </div>
          </div>
          <div className="flex items-center justify-between w-full gap-10 mt-5">
            <div className="flex flex-col w-1/2">
              <input
                type="text"
                className="rounded-md p-2 bg-gray-100"
                placeholder="Enter Phone Number"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <input
                type="text"
                className="rounded-md p-2 bg-gray-100"
                placeholder="Enter Email"
              />
            </div>
          </div>
          <div className="flex items-center justify-between w-full gap-10 mt-5">
            <div className="flex flex-col w-1/2">
              <input
                type="text"
                className="rounded-md p-2 bg-gray-100"
                placeholder="Enter Address"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <input
                type="text"
                className="rounded-md p-2 bg-gray-100"
                placeholder="Enter City"
              />
            </div>
          </div>
          <div className="flex items-center justify-between w-full gap-10 mt-5">
            <div className="flex flex-col w-1/2">
              <input
                type="text"
                className="rounded-md p-2 bg-gray-100"
                placeholder="Enter Experience"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <input
                type="text"
                className="rounded-md p-2 bg-gray-100"
                placeholder="Enter Education"
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="text-white py-3 px-6 rounded-0 hover:text-gray-900 mt-5 w-full"
            style={{ backgroundColor: "#EFB007" }}
            onClick={() => {
              setShowCompleted(true);
              setShow(false);
            }}
          >
            SUBMIT
          </button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={showCompleted}
        onHide={() => setShowCompleted(false)}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-2xl w-1/3 shadow-xl z-50 bg-white p-10 modal modalbody"
      >
        <Modal.Header className="flex justify-end w-full">
          <AiOutlineClose onClick={() => setShowCompleted(false)} />
        </Modal.Header>
        <Modal.Body>
          <div className="flex flex-col items-center w-full gap-10 mt-5">
            <div className="flex flex-col">
              <img src={completed} alt="completed" className="h-24 w-24" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold mt-5">
                Application Submitted Successfully
              </h1>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="text-white py-3 px-6 rounded-0 hover:text-gray-900 mt-5 w-full"
            style={{ backgroundColor: "#EFB007" }}
            onClick={() => setShowCompleted(false)}
          >
            CLOSE
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default JobListings;
