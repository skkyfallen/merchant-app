import React from "react";
import "./services.css";
import { useEffect, useState, CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import { CircleLoaders } from "react-spinners";

import axios from "axios";
const Services = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const accessToken = localStorage.getItem("login_token");
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const addService = () => {
    navigate("/addService");
  };
  const getServices = () => {
    axios
      .get(
        "https://laundry-marketplace-api-production.up.railway.app/api/v1/merchant/service/list",
        config
      )
      .then((response) => {
        console.log(response.data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  useEffect(() => {
    getServices();
  }, []);
  return (
    <>
      <div className="main-services-container">
        <div className="header-container">
          <h1>Manage your Products/Services</h1>
          <button className="add-service-btn" onClick={addService}>
            Add New Service
          </button>
        </div>
        <ul className="services-list">
          {data.map((data) => (
            <li className="service">
              <img src={data.photo} alt="img" />
              <h2>Suit cleaning</h2>
              <h1>NGN 1000</h1>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Services;
