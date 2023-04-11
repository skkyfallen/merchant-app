import React from "react";
import Navbar from "../Components/Nav/Navbar";
import BankDetailsForm from "../Components/Page Components/BankDetailsForm";
import MainWallet from "../Components/Page Components/MainWallet";
const Wallet = () => {
  return (
    <>
    {/* Side Nav */}
      <Navbar />

      {/* Main Wallet */}
      <MainWallet />

      {/* Bank Details Form */}
      <BankDetailsForm/>
    </>
  );
};

export default Wallet;
