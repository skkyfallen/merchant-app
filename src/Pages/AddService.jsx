import React from "react";
import { useState } from "react";
import axios from "axios";
import Navbar from "../Components/Nav/Navbar";
import "./addService.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddService = () => {
  const [option, selectedOption] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState(null);

  const accessToken = localStorage.getItem("login_token");
  const handleAddService = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("price", price);
    formData.append("name", selectedOption);
    formData.append("photo", photo);
    axios
      .post(
        "https://laundry-marketplace-api-production.up.railway.app/api/v1/merchant/service/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        toast.success("Service Added Successfully");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.response);
        toast.error("Failed to Add Service");
      });
  };
  return (
    <>
      <Navbar />

      <div className="addService-container">
        <h1 className="add-service-header">
          Manage your Products/Services here
        </h1>
        <form className="add-service-form">
          <h2 className="ad-service-header">New Product/Service</h2>
          <p className="service-name-label">Name</p>
          <select
            value={option}
            onChange={(event) => selectedOption(event.target.value)}
            className="dropdown-service"
          >
            <option></option>
            <option>Lace</option>
            <option>Ankara</option>
            <option>Suits</option>
            <option>Adire</option>
            <option>Joggers</option>
          </select>

          <p className="service-price-label">Price</p>
          <input
            type="text"
            className="service-input"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
          <p className="photo-label">Photo</p>
          <div className="file-holder">
            <input
              type="file"
              className="service-photo"
              onChange={(event) => setPhoto(event.target.files[0])}
            />
          </div>
          <button className="add-service" onClick={handleAddService}>
            Add Service
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default AddService;
