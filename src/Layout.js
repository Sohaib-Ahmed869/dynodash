import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./Home/page";
const Layout = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Layout;