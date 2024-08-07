import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/page";
import About from "./About/page";
import Categories from "./Categories/page";
import Careers from "./Careers/page";
import Services from "./Services/page";
import Contact from "./Contact/page";
import Login from "./Login/page";
import RegisterStart from "./Register/page";
import Register from "./Register/register";
import MultiStep from "./Register/Multistep";
import Dashboard from "./dashboard/main";
import Cart from "./Cart/page";
import Checkout from "./Checkout/page";
import Confirmation from "./Confirmation/page";
import MembersDirectory from "./MembersDirectory/page";
import Details from "./Details/page";
import ExcavatorRent from "./ExcavatorRent/page";
import Shop from "./Shop/page";
import SparePart from "./SparePartRent/page";
import PartDetails from "./PartDetails/page";
import FreightShipping from "./FreightShipping/page";
import JobListings from "./JobListings/page";

import AdminLogin from "./AdminScreens/AdminLogin";
import ForgetPassword from "./AdminScreens/ForgetPassword";
import OTPVerification from "./AdminScreens/OTPverification";
import NewPassword from "./AdminScreens/newPassword";
import AdminDashboard from "./AdminScreens/dashboard/main";

import Error404 from "./Error/page";

import BrowseEquipment from "./Browse/page";

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registeration" element={<RegisterStart />} />
      <Route path="/register" element={<Register />} />
      <Route path="/multistep" element={<MultiStep />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/members" element={<MembersDirectory />} />
      <Route path="/details" element={<Details />} />
      <Route path="/excavatorrent" element={<ExcavatorRent />} />
      <Route path="/browse" element={<BrowseEquipment />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/sparepartrent" element={<SparePart />} />
      <Route path="/partdetails" element={<PartDetails />} />
      <Route path="/freightshipping" element={<FreightShipping />} />
      <Route path="/joblistings" element={<JobListings />} />

      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/forgetpassword" element={<ForgetPassword />} />
      <Route path="/admin/otpverification" element={<OTPVerification />} />
      <Route path="/admin/newpassword" element={<NewPassword />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />

      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default Layout;
