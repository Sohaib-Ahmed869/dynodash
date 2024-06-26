import React, { act } from "react";
import { useState } from "react";
import Navbar from "../../Components/navbar";
import Footer from "../../Components/footer";
import account from "../../Assets/account.png";
import box from "../../Assets/box.png";
import cart from "../../Assets/cart.png";
import carticon from "../../Assets/carticon.png";
import Dash from "../../Assets/dash.png";
import Diamond from "../../Assets/Diamond.png";
import Settings from "../../Assets/Settings.png";
import teammember from "../../Assets/teammember.png";
import withdraw from "../../Assets/withdraw.png";

import DashboardSide from "./dashboard";
import Product from "./product";
import Order from "./order";
import Withdraw from "./withdraw";
import MyAccount from "./myaccount";
import SettingsPage from "./Settings";
import Membership from "./pricing";
import AddItems from "./additems";

const AdminDashboard = () => {
  const [active, setActive] = useState("Dashboard");

  return (
    <div>
      <Navbar />
      <div className="flex w-full justify-between p-20 px-40">
        <div
          className="flex flex-col w-1/4 h-dvh"
          style={{ backgroundColor: "#242424" }}
        >
          <button
            className={
              active === "Dashboard"
                ? "flex flex-row items-center text-center  bg-yellow-500 text-white p-3 w-full rounded-0 font-semibold  hover:text-gray-200"
                : "bg-none text-white p-3 w-full rounded-0 font-semibold  hover:text-gray-200 flex flex-row items-center "
            }
            onClick={() => setActive("Dashboard")}
          >
            <img src={Dash} alt="dash" className="w-6 h-6 mr-2" /> Dashboard
          </button>
          <button
            className={
              active === "Orders"
                ? "flex flex-row items-center text-center  bg-yellow-500 text-white p-3 w-full rounded-0 font-semibold  hover:text-gray-200"
                : "bg-none text-white p-3 w-full rounded-0 font-semibold  hover:text-gray-200 flex flex-row items-center "
            }
            onClick={() => setActive("Orders")}
          >
            <img src={cart} alt="box" className="w-6 h-6 mr-2" /> Orders
          </button>
          <button
            className={
              active === "Products"
                ? "flex flex-row items-center text-center  bg-yellow-500 text-white p-3 w-full rounded-0 font-semibold  hover:text-gray-200"
                : "bg-none text-white p-3 w-full rounded-0 font-semibold  hover:text-gray-200 flex flex-row items-center "
            }
            onClick={() => setActive("Products")}
          >
            <img src={carticon} alt="box" className="w-6 h-6 mr-2" /> Listings
          </button>

          <button
            className={
              active === "Membership"
                ? "flex flex-row items-center text-center  bg-yellow-500 text-white p-3 w-full rounded-0 font-semibold  hover:text-gray-200"
                : "bg-none text-white p-3 w-full rounded-0 font-semibold  hover:text-gray-200 flex flex-row items-center "
            }
            onClick={() => setActive("Membership")}
          >
            <img src={Diamond} alt="box" className="w-6 h-6 mr-2" /> Membership
          </button>

          <button
            className={
              active === "Users"
                ? "flex flex-row items-center text-center     bg-yellow-500 text-white p-3 w-full rounded-0 font-semibold  hover:text-gray-200"
                : "bg-none text-white p-3 w-full rounded-0 font-semibold  hover:text-gray-200 flex flex-row items-center "
            }
            onClick={() => setActive("Users")}
          >
            <img src={account} alt="box" className="w-6 h-6 mr-2" /> Users
          </button>
        </div>
        <div className="w-3/4">
          {active === "Dashboard" ? <DashboardSide /> : null}
          {active === "Products" ? <Product /> : null}
          {active === "Orders" ? <Order /> : null}
          {active === "Users" ? <MyAccount /> : null}
          {active === "Membership" ? <Membership /> : null}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
