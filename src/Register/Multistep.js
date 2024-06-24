import React, { useState } from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import tick from "../Assets/tick.png";
import "./MultiStep.css";

const MultiStep = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div>
      <Navbar />
      <div className="container py-20">
        <ProgressBar step={step} />
        {step === 1 && <Step1 nextStep={nextStep} />}
        {step === 2 && <Step2 nextStep={nextStep} prevStep={prevStep} />}
        {step === 3 && <Step3 nextStep={nextStep} prevStep={prevStep} />}
        {step === 4 && <Step4 />}
      </div>
      <Footer />
    </div>
  );
};

const ProgressBar = ({ step }) => {
  return (
    <div className="progress-bar">
      <div className={`circle ${step >= 1 ? "active" : ""}`}></div>
      <div className={`circle ${step >= 2 ? "active" : ""}`}></div>
      <div className={`circle ${step >= 3 ? "active" : ""}`}></div>
      <div className={`circle ${step >= 4 ? "active" : ""}`}></div>
    </div>
  );
};

const Step1 = ({ nextStep }) => (
  <div className="text-left p-20 border-2 shadow-xl step">
    <h2 className="text-black text-2xl">Welcome to the Marketplace!</h2>
    <p className="mt-5">
      Thank you for choosing The Marketplace to power your online store! This
      quick setup wizard will help you configure the basic settings.{" "}
      <span className="font-bold">
        It’s completely optional and shouldn’t take longer than two minutes.
      </span>
    </p>
    <p className="mt-5">
      No time right now? If you don’t want to go through the wizard, you can
      skip and return to the Store!
    </p>
    <div className="flex flex-row items-center mt-5 justify-center">
      <button
        onClick={nextStep}
        className="bg-yellow-500 py-3 px-6 text-sm text-white mr-10"
      >
        LET'S GO
      </button>
      <button className="border-2 border-gray-800 py-2 px-6 ml-10">
        Not Now
      </button>
    </div>
  </div>
);

const Step2 = ({ nextStep, prevStep }) => (
  <div className="text-left p-20 border-2 shadow-xl step pt-10">
    <h2 className="text-black text-2xl">Store Setup</h2>
    <form className="mt-5">
      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <div className="w-1/2 flex-col flex">
            <label className="w-1/3 text-gray-600" htmlFor="storeName">
              Street
            </label>
            <input
              className="border border-gray-300 p-2"
              type="text"
              name="street"
            />
          </div>
          <div className="w-1/2 flex-col flex ml-4">
            <label className="w-1/3 text-gray-600" htmlFor="storeName">
              Street 2
            </label>
            <input
              className="border border-gray-300 p-2"
              type="text"
              name="street2"
            />
          </div>
        </div>
        <div className="flex flex-row items-center mt-5">
          <div className="w-1/2 flex-col flex">
            <label className=" text-gray-600" htmlFor="storeName">
              City
            </label>
            <input
              className="border border-gray-300 p-2"
              type="text"
              name="street"
            />
          </div>
          <div className="w-1/2 flex-col flex ml-4">
            <label className=" text-gray-600" htmlFor="storeName">
              Postal/Zip Code
            </label>
            <input
              className="border border-gray-300 p-2"
              type="text"
              name="street2"
            />
          </div>
        </div>
        <div className="flex flex-row items-center mt-5">
          <div className="w-1/2 flex-col flex">
            <label className=" text-gray-600" htmlFor="storeName">
              Country
            </label>
            <input
              className="border border-gray-300 p-2"
              type="text"
              name="street"
            />
          </div>
          <div className="w-1/2 flex-col flex ml-4">
            <label className=" text-gray-600" htmlFor="storeName">
              State
            </label>
            <input
              className="border border-gray-300 p-2"
              type="text"
              name="street2"
            />
          </div>
        </div>
        <div className="flex flex-col mt-5">
          <label className=" text-gray-600" htmlFor="email">
            Email
          </label>
          <div className="flex flex-row items-center mt-2">
            <input type="checkbox" name="email" />
            <p className="text-gray-600 text-sm ml-2">
              Show email on store page
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center mt-10 justify-center">
          <button
            onClick={nextStep}
            className="bg-yellow-500 py-3 px-8 text-sm text-white mr-8"
          >
            CONTINUE
          </button>
          <button className="border-2 border-gray-800 py-2 px-8 ml-8">
            SKIP THIS STEP
          </button>
        </div>
      </div>
    </form>
  </div>
);

const Step3 = ({ nextStep, prevStep }) => (
  <div className="text-left p-20 border-2 shadow-xl step pt-10">
    <h2 className="text-black text-2xl pb-6">Payment Setup</h2>
    <h2 className="text-black text-xl font-bold pt-6 border-t-2">Paypal</h2>
    <form className="mt-5">
      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <div className="w-1/2 flex-col flex">
            <label className="w-1/3 text-gray-600" htmlFor="storeName">
              Email
            </label>
            <input
              className="border border-gray-300 p-2"
              type="text"
              name="street"
            />
          </div>
        </div>
        <div className="flex flex-row items-center mt-10 justify-center">
          <button
            onClick={nextStep}
            className="bg-yellow-500 py-3 px-8 text-sm text-white mr-8"
          >
            CONTINUE
          </button>
          <button className="border-2 border-gray-800 py-2 px-8 ml-8">
            SKIP THIS STEP
          </button>
        </div>
      </div>
    </form>
  </div>
);

const Step4 = () => (
  <div className=" flex flex-col text-center items-center justify-center p-20 border-2 shadow-xl step pt-10">

    <img src={tick} alt="tick" className="w-14 h-14 mb-10" />
    <h2 className="text-black text-2xl pb-6 font-semibold">Your Store is Ready!</h2>

    <div className="flex flex-row items-center mt-5 justify-center">
      <button
        className="bg-yellow-500 py-3 px-8 text-sm text-white"
        onClick={() => window.location.href = "/dashboard"}
      >
        GO TO DASHBOARD
      </button>
    </div>
  </div>
);

export default MultiStep;
