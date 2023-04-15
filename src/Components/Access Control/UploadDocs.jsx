import React from "react";
import "./upload.css";
import { useState } from "react";
import Signup from "../../Assets/Signup_img.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const UploadDocs = () => {
  const navigate = useNavigate();
  const [idImage, setIdImage] = useState(null);
  const [cacImage, setCacImage] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const accessToken = localStorage.getItem("signup_token");
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const handleIdImageChange = (e) => {
    setIdImage(e.target.files[0]);
  };
  const handleCacImageChange = (e) => {
    setCacImage(e.target.files[0]);
  };
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("idImage", idImage);
    formData.append("cacImage", cacImage);
    formData.append("idType", selectedOption);
    axios
      .post(
        "https://laundry-marketplace-api-production.up.railway.app/api/v1/merchant/profile/documents",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
          },
        },
        config
      )
      .then((response) => {
        console.log(response.data);
        navigate("/setpassword");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  return (
    <>
      <div className="upload-form-container">
        <img src={Signup} alt="signup" />
        <div className="upload-form-fields">
          <form className="upload-form">
            <h3 className="upload-heading">
              Become a Service provider
              <br />
              and earn money
            </h3>
            <p className="select-id-head">Select ID type</p>
            <select
              className="select-id"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              <option></option>
              <option>NIN</option>
              <option>Drivers License</option>
              <option>Passport</option>
            </select>
            <div className="upload-id-file-container">
              <input
                type="file"
                className="upload-id-file"
                accept="image/*"
                onChange={handleIdImageChange}
              />
            </div>
            <p className="upload-cac-head">Upload CAC Document</p>
            <div className="upload-cac-file-container">
              <input
                type="file"
                className="upload-cac-file"
                accept="image/*"
                onChange={handleCacImageChange}
              />
            </div>

            <button className="upload-btn" onClick={handleUpload}>
              Continue
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UploadDocs;
