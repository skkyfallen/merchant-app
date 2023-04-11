import React from "react";
import "./login.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignUp_img from "../../Assets/Signup_img.png";
import Ellipse from "../../Assets/Ellipse.png";
import axios from "axios";


const Login = () => {
  const navigate = useNavigate("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const accessToken = localStorage.getItem("access_token");
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const handleLoginClick = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://api-laundry-marketplace.onrender.com/api/v1/auth/merchant/login",
        {
          email: email,
          password: password,
        }
      )
      .then((response) => {
        console.log(response.data);
        
        navigate("/merchantDashBoard");
      })
      .catch((error) => {
        console.error(error.response);
        console.error(error.response.data);
      });
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "scroll");
  });
  return (
    <>
      <div className="login-form-container">
        <h1>
          Welcome Back, Login and <br /> start earning!
        </h1>
        <form className="login-form">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            className="field"
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="password" className="password-field-label">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            id="password"
            className="field"
          />
          <button
            type="submit"
            className="login-btn"
            onClick={handleLoginClick}
          >
            Login
          </button>
          <p>
            Dont have an Account?<a href="/forgotPassword">SIGNUP</a>
          </p>
        </form>
      </div>

      <img src={Ellipse} className="ellipse" />
     
    </>
  );
};

export default Login;
