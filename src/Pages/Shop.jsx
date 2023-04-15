import React from "react";
import "./shop.css";
import Services from "../Components/Page Components/Services";
import Navbar from "../Components/Nav/Navbar";
const Shop = () => {
  return (
    <>
      {/* Side Navbar */}
      <Navbar />

      {/* Merchant Services */}
      <Services />
    </>
  );
};

export default Shop;
