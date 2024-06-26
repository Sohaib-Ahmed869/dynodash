import React, { useState } from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

const OTPVerification = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus on next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center text-left mt-10 p-20">
        <div className="items-start text-center">
          <p className="text-4xl font-semibold text-black">OTP Verification</p>
          <p className="text-xl text-gray-400 mt-6">
            {" "}
            Enter the verification code we just sent<br></br> on your email
            address.
          </p>
        </div>

        <div className="px-10 mt-10 w-1/3 items-center justify-center flex flex-col">
          <div className="flex space-x-4">
            {otp.map((data, index) => {
              return (
                <input
                  className="border border-gray-300 p-3 w-14 text-center text-xl"
                  type="text"
                  name="otp"
                  maxLength="1"
                  key={index}
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                />
              );
            })}
          </div>
          <button className="text-sm text-white bg-yellow-500 p-2 mt-10 py-3 w-5/6" onClick={() => window.location.href = "/admin/newpassword"}>
            VERIFY
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OTPVerification;
