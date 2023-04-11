import React from "react";
import axios from "axios";
import { useState,} from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import SignUp_img from "../../Assets/Signup_img.png";


const SignUp = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [state, setState] = useState("");
  const [storeAddress, setStoreAddress] = useState("");
  const handleContinueClick = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://api-laundry-marketplace.onrender.com/api/v1/auth/merchant/register",
        {
          fullName: fullName,
          businessName: businessName,
          email: email,
          phoneNumber: phoneNumber,
          state: state,
          storeAddress: storeAddress,
        }
      )
      .then((response) => {
        console.log(response.data);
        const access_token= response.data.data.token;
        localStorage.setItem('access_token', access_token);
        navigate("/uploaddocs")
      })
      .catch((error) => {
        
      });
  };
  return (
    <>
     
      <div className="form-Container">
        <div className="img">
          <img src={SignUp_img} alt="merchant-image" />
        </div>
        <form classnName="main-signup-form">
          <h1>
            Become a Service provider
            <br /> and earn money
          </h1>

          <p className="fullname-label">Full Name</p>
          <input
            type="text"
            className="form-field"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />

          <p className="business_name-label">Business Name</p>
          <input
            type="text"
            className="form-field"
            value={businessName}
            onChange={(event) => setBusinessName(event.target.value)}
          />

          <p className="email-label">Email Address</p>
          <input
            type="text"
            className="form-field"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <p className="phoneNumber-label">Phone Number</p>
          <input
            type="text"
            className="phone-field"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />

          <p className="state-label">State</p>
          <input
            type="text"
            className="state-field"
            value={state}
            onChange={(event) => setState(event.target.value)}
          />

          <p className="store-label">Store Address</p>
          <textarea
            type="text"
            className="store-field"
            value={storeAddress}
            onChange={(event) => setStoreAddress(event.target.value)}
          />
          <button className="continueButton-1" onClick={handleContinueClick}>
            Continue
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
