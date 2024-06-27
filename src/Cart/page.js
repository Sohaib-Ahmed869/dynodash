import React from "react";
import { MdArrowForward } from "react-icons/md";
import cartbg from "../Assets/cartbg.png";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import CartItems from "./CartItems";
import rentalitem1 from "../Assets/rentalitem1.png";
import rentalitem2 from "../Assets/rentalitem2.png";

const data = [
    {
        image: rentalitem1,
        name: "Compact Excavator",
        operating_weight: "1.5 Ton",
        manufacture_year: "2019",
        digging_weight: "4.1 meter",
        max_reach: "3.8 meter",
        rental_price: "320",
        perdaycost: "110",
        perweekcost: "400",
        permonthcost: "1300",
    },
    {
        image: rentalitem2,
        name: "Mini Excavator upto 5T",
        operating_weight: "2.0 Ton",
        manufacture_year: "2020",
        digging_weight: "4.5 meter",
        max_reach: "4.2 meter",
        rental_price: "350",
        perdaycost: "130",
        perweekcost: "450",
        permonthcost: "1400",
    },
];

const Cart = () => {
    return (
        <div>
            <Navbar />
            <div
                style={{
                    position: "relative",
                    width: "100%", // Set the width as needed
                    backgroundImage: `url(${cartbg})`, // Set the background image
                    backgroundSize: "cover", // Cover the entire div
                    backgroundPosition: "center", // Center the background image
                    backgroundRepeat: "no-repeat",
                    zIndex: 0,
                }}
                className="h-48 flex flex-col justify-center items-center"
            ></div>
            <div className="flex flex-col items-center justify-center mt-10 w-full">
                <button
                    className="text-white py-5 px-6 rounded-0 hover:text-gray-900 flex items-center"
                    style={{ backgroundColor: "#EFB007" }}
                >
                    HOME <MdArrowForward className="ml-4" />{" "}
                    <span className="ml-4">CART</span>
                </button>

                <div className="flex flex-row flex-wrap justify-center mt-10 mb-10 w-1/2">
                    <CartItems className="w-full" data={data} />
                </div>

                <div className="mb-20 flex flex-row justify-center items-center">
                    <button
                        className="text-white font-bold py-4 px-24 rounded-0 hover:text-gray-900 flex items-center"
                        style={{ backgroundColor: "#EFB007" }}
                        onClick={() => window.location.href = "/checkout"}
                    >
                        CHECKOUT
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Cart;
