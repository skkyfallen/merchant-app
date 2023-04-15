import React from "react";
import "./dashWallet.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { MdWavingHand } from "react-icons/md";
const DashWallet = () => {
  const accessToken = localStorage.getItem("login_token");
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const [data, setData] = useState([]);
  const [salesData, setSalesData] = useState([]);
  const [walletData, setWalletData] = useState([]);
  const getSalesInfo = () => {
    axios
      .get(
        "https://laundry-marketplace-api-production.up.railway.app/api/v1/merchant/orders/sales/balance",
        config
      )
      .then((response) => {
        setSalesData(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error.response);
      });
  };
  const getWalletDetails = () => {
    axios
      .get(
        "https://laundry-marketplace-api-production.up.railway.app/api/v1/merchant/wallet/balance",
        config
      )
      .then((response) => {
        setWalletData(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error.response);
      });
  };
  const getDetails = () => {
    axios
      .get(
        "https://laundry-marketplace-api-production.up.railway.app/api/v1/merchant/info",
        config
      )
      .then((response) => {
        setData(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error.response);
      });
  };
  useEffect(() => {
    getDetails();
    getSalesInfo();
    getWalletDetails();
  }, []);
  return (
    <>
      <div className="wallet-details-container">
        <p className="hello-user">
          Hello {data.fullName} <MdWavingHand className="wave-icon" />,
        </p>
        <div className="wallet-sub-containers">
          <div className="wallet-balance">
            <p className="wallet-balance-text">Wallet Balance</p>
            <p className="wallet-balance-amount">₦ {walletData.balance}</p>
          </div>
          <div className="sales-container">
            <p className="sales-text">Total Sales</p>
            <p className="sales-amount">₦ 12,500.00</p>
          </div>
          <div className="orders-container">
            <p className="orders-text">Total Orders</p>
            <p className="orders-amount">80,000</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashWallet;
