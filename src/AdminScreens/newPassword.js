import React, { useState } from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { Modal } from "react-bootstrap";
import Sticker from "../Assets/Sticker.png";

const NewPassword = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center text-left mt-10 p-20">
        <div className=" w-1/3 flex flex-col">
          <p className="text-4xl font-semibold text-black">
            Create new password
          </p>
          <p className="text-xl text-gray-400 mt-6">
            {" "}
            Your new password must be unique from those previously used.
          </p>
          <input
            type="text"
            className="border border-gray-300 w-full p-5 mt-3 text-slate-700 text-bold text-xl"
            placeholder="New Password"
          />

          <input
            type="text"
            className="border border-gray-300 w-full p-5 mt-3 text-slate-700 text-bold text-xl"
            placeholder="Confirm Password"
          />

          <p className="text-sm text-gray-400 mt-6">
            Make sure to use a secure password: A secure password should be at
            least 10 characters long, include numbers, symbols, upper and
            lowercase letters
          </p>

          <button
            className="text-sm text-white bg-yellow-500 p-2 mt-10 py-3 w-full"
            onClick={() => setShow(true)}
          >
            RESET PASSWORD
          </button>
        </div>
      </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        centered
        className="bg-white rounded-2xl shadow-2xl absolute p-10"
        style={{
          maxWidth: "400px",
          margin: "auto",
          alignSelf: "center",
          right: "0",
          left: "0",
          top: "0",
          bottom: "0",
        }}
      >

        <Modal.Body>
          <div className="flex flex-col items-center">
            <img src={Sticker} alt="sticker" />
            <p className="text-2xl font-semibold mt-6">Password Reset</p>
            <p className="text-lg text-gray-400 mt-6">
              Your password has been reset successfully
            </p>
            <button
              className="text-sm text-white bg-yellow-500 p-2 mt-10 py-3 w-5/6"
              onClick={() => setShow(false)}
            >
              CONTINUE
            </button>
          </div>
        </Modal.Body>
      </Modal>

      <Footer />
    </div>
  );
};

export default NewPassword;
