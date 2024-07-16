import React, { useState } from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

const Register = () => {
  const [sellerFirstName, setSellerFirstName] = useState("");
  const [sellerLastName, setSellerLastName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  const [sellerShopName, setSellerShopName] = useState("");
  const [sellerPhoneNumber, setSellerPhoneNumber] = useState("");

  const [role, setRole] = useState("customer");

  const [customerFirstName, setCustomerFirstName] = useState("");
  const [customerLastName, setCustomerLastName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhoneNumber, setCustomerPhoneNumber] = useState("");
  const [customerDateOfBirth, setCustomerDateOfBirth] = useState("");
  const [customerAddress1, setCustomerAddress1] = useState("");
  const [customerAddress2, setCustomerAddress2] = useState("");
  const [customerCity, setCustomerCity] = useState("");
  const [customerState, setCustomerState] = useState("");
  const [customerZipCode, setCustomerZipCode] = useState("");
  const [customerCountry, setCustomerCountry] = useState("");
  const [customerAboutMe, setCustomerAboutMe] = useState("");

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center text-left mt-2">
        <div className="flex flex-col text-left p-20 w-full items-center">
          <div className="flex items-center justify-start w-1/3">
            <p className="text-2xl font-semibold text-black">Register</p>
          </div>
          <div className="px-10 shadow-2xl rounded-0 text-left w-1/3 border border-gray-300 py-10 mt-5">
            {role === "vendor" ? (
              <div>
                <p className="text-sm text-black mb-3">
                  First Name <span className="text-red-500 font-bold">*</span>
                </p>
                <input
                  type="text"
                  className="border border-gray-300 w-full p-2 mt-1"
                  value={sellerFirstName}
                  onChange={(e) => setSellerFirstName(e.target.value)}
                />
                <p className="text-sm text-black mb-3 mt-3">
                  Last Name <span className="text-red-500 font-bold">*</span>
                </p>
                <input
                  type="text"
                  className="border border-gray-300 w-full p-2 mt-1"
                  value={sellerLastName}
                  onChange={(e) => setSellerLastName(e.target.value)}
                />
                <p className="text-sm text-black mb-3 mt-3">
                  Email <span className="text-red-500 font-bold">*</span>
                </p>
                <input
                  type="email"
                  className="border border-gray-300 w-full p-2 mt-1"
                  value={sellerEmail}
                  onChange={(e) => setSellerEmail(e.target.value)}
                />
                <p className="text-sm text-black mb-3 mt-3">
                  Shop Name <span className="text-red-500 font-bold">*</span>
                </p>
                <input
                  type="text"
                  className="border border-gray-300 w-full p-2 mt-1"
                  value={sellerShopName}
                  onChange={(e) => setSellerShopName(e.target.value)}
                />
                <p className="text-sm text-black mb-3 mt-3">
                  Phone Number <span className="text-red-500 font-bold">*</span>
                </p>
                <input
                  type="text"
                  className="border border-gray-300 w-full p-2 mt-1"
                  value={sellerPhoneNumber}
                  onChange={(e) => setSellerPhoneNumber(e.target.value)}
                />
              </div>
            ) : (
              <div>
                <p className="text-sm text-black mb-3">
                  First Name <span className="text-red-500 font-bold">*</span>
                </p>
                <input
                  type="text"
                  className="border border-gray-300 w-full p-2 mt-1"
                  value={customerFirstName}
                  onChange={(e) => setCustomerFirstName(e.target.value)}
                />
                <p className="text-sm text-black mb-3 mt-3">
                  Last Name <span className="text-red-500 font-bold">*</span>
                </p>
                <input
                  type="text"
                  className="border border-gray-300 w-full p-2 mt-1"
                  value={customerLastName}
                  onChange={(e) => setCustomerLastName(e.target.value)}
                />
                <p className="text-sm text-black mb-3 mt-3">
                  Email <span className="text-red-500 font-bold">*</span>
                </p>
                <input
                  type="email"
                  className="border border-gray-300 w-full p-2 mt-1"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                />
                <p className="text-sm text-black mb-3 mt-3">
                  Phone Number <span className="text-red-500 font-bold">*</span>
                </p>
                <input
                  type="text"
                  className="border border-gray-300 w-full p-2 mt-1"
                  value={customerPhoneNumber}
                  onChange={(e) => setCustomerPhoneNumber(e.target.value)}
                />
                <p className="text-sm text-black mb-3 mt-3">
                  Date of Birth{" "}
                  <span className="text-red-500 font-bold">*</span>
                </p>
                <input
                  type="date"
                  className="border border-gray-300 w-full p-2 mt-1"
                  value={customerDateOfBirth}
                  onChange={(e) => setCustomerDateOfBirth(e.target.value)}
                />
                <p className="text-sm text-black mb-3 mt-3">
                  Address 1 <span className="text-red-500 font-bold">*</span>
                </p>
                <input
                  type="text"
                  className="border border-gray-300 w-full p-2 mt-1"
                  value={customerAddress1}
                  onChange={(e) => setCustomerAddress1(e.target.value)}
                />
                <p className="text-sm text-black mb-3 mt-3">
                  Address 2 <span className="text-red-500 font-bold">*</span>
                </p>
                <input
                  type="text"
                  className="border border-gray-300 w-full p-2 mt-1"
                  value={customerAddress2}
                  onChange={(e) => setCustomerAddress2(e.target.value)}
                />
                <p className="text-sm text-black mb-3 mt-3">
                  City <span className="text-red-500 font-bold">*</span>
                </p>
                <input
                  type="text"
                  className="border border-gray-300 w-full p-2 mt-1"
                  value={customerCity}
                  onChange={(e) => setCustomerCity(e.target.value)}
                />
                <p className="text-sm text-black mb-3 mt-3">
                  State <span className="text-red-500 font-bold">*</span>
                </p>
                <input
                  type="text"
                  className="border border-gray-300 w-full p-2 mt-1"
                  value={customerState}
                  onChange={(e) => setCustomerState(e.target.value)}
                />
                <p className="text-sm text-black mb-3 mt-3">
                  Zip Code <span className="text-red-500 font-bold">*</span>
                </p>
                <input
                  type="text"
                  className="border border-gray-300 w-full p-2 mt-1"
                  value={customerZipCode}
                  onChange={(e) => setCustomerZipCode(e.target.value)}
                />
                <p className="text-sm text-black mb-3 mt-3">
                  Country <span className="text-red-500 font-bold">*</span>
                </p>
                <input
                  type="text"
                  className="border border-gray-300 w-full p-2 mt-1"
                  value={customerCountry}
                  onChange={(e) => setCustomerCountry(e.target.value)}
                />
                <p className="text-sm text-black mb-3 mt-3">
                  About Me <span className="text-red-500 font-bold">*</span>
                </p>
                <input
                  type="text"
                  className="border border-gray-300 w-full p-2 mt-1"
                  value={customerAboutMe}
                  onChange={(e) => setCustomerAboutMe(e.target.value)}
                />
              </div>
            )}
            <div className="flex-col items-center mt-5">
              <div className="flex flex-row">
                <input
                  type="radio"
                  className="mr-2"
                  id="customer"
                  name="role"
                  value="customer"
                  checked={role === "customer"}
                  onChange={(e) => setRole(e.target.value)}
                />
                <p className="text-sm text-black">I am a customer</p>
              </div>
              <div className="flex flex-row mt-2">
                <input
                  type="radio"
                  className="mr-2"
                  id="vendor"
                  name="role"
                  value="vendor"
                  checked={role === "vendor"}
                  onChange={(e) => setRole(e.target.value)}
                />
                <p className="text-sm text-black">I am a vendor</p>
              </div>
            </div>
            <button className="text-sm text-white bg-yellow-500 py-3 mt-2 w-1/2" onClick={() => window.location.href = "/multistep"}>
              Register
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
