import React from "react";
import "./mainwallet.css";
import axios from "axios";
import { useState, useEffect } from "react";
const MainWallet = () => {
  const accessToken = localStorage.getItem("login_token");
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const [data, setData] = useState([]);
  const [banks, setBanks] = useState([]);
  const getDetails = () => {
    axios
      .get(
        "https://laundry-marketplace-api-production.up.railway.app/api/v1/merchant/info",
        config
      )
      .then((response) => {
        setData(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error(error.response);
      });
  };
  const getBankDetails = () => {
    axios
      .get(
        "https://laundry-marketplace-api-production.up.railway.app/api/v1/payment/banks",
        config
      )

      .then((response) => {
        setBanks(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error(error.response);
      });
  };
  useEffect(() => {
    getDetails();
    getBankDetails();
  }, []);
  return (
    <>
      <div className="major-wallet-container">
        <div className="main-wallet-container">
          <p className="major-wallet-welcome">Hello {data.fullName},</p>
          <p className="major-wallet-text">
            Here's whats happening with your Store today
          </p>
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
          {data.bankDetails ? (
            <div className="main-bank-details">
              <p className="bank-name"> {data.bankDetails.bank}</p>
              <p className="account-no"> {data.bankDetails.accountNumber} </p>
              <p className="account-name"> {data.bankDetails.accountName} </p>
            </div>
          ) : (
            <div className="main-bank-details">
              <p className="bank-name"> ...</p>
              <p className="account-no">... </p>
              <p className="account-name"> ... </p>
            </div>
          )}
          <button className="request-withdrawal-btn">Request Withdrawal</button>
        </div>
      </div>
    </>
  );
};

export default MainWallet;
