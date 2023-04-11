import React from "react";
import "./mainwallet.css";
import axios from "axios";
import {useState,useEffect} from "react";
const MainWallet = () => {
    const [data,setData] = useState([]);
    const getDetails=()=>{
        axios
      .get(
        "https://api-laundry-marketplace.onrender.com/api/v1/merchant/info",
       
      )
      .then((response) => {
        setData(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error(error.response);
      });
    }
useEffect(()=>{
   getDetails();
})
  return (
    <>
      <div className="major-wallet-container">
        <div className="main-wallet-container">
          <p className="major-wallet-welcome">Hello Kene,</p>
          <p className="major-wallet-text">Here's whats happening with your Store today</p>
          <p className="major-wallet-amount"> $12,000.00</p>
          <p className="major-wallet-sub">Wallet Balance</p>
        </div>
        <div className="main-bank-container">
          <p className="main-bank-header">Bank Details</p>
          <div className="main-bank-headers">
          <p className="bank-header">Bank</p>
    <p className="account-no-header">Account Details</p>
    <p className="account-name-header">Account Name</p>
          </div>
          <div className="main-bank-details">
            <p className="bank-name">Access Bank</p>
            <p className="account-no">1234567890</p>
            <p className="account-name">Kenechukwu Ekwonu</p>
          </div>
          <button className="request-withdrawal-btn">Request Withdrawal</button>
        </div>
        
      </div>
    </>
  );
};

export default MainWallet;
