import React from "react";
import "./login.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignUp_img from "../../Assets/Signup_img.png";
import Ellipse from "../../Assets/Ellipse.png";
import axios from "axios";
import { BeatLoader } from "react-spinners";

const Login = () => {
  const navigate = useNavigate("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  localStorage.removeItem("signup_token");
  const handleLoginClick = (event) => {
    event.preventDefault();
    setLoading(true);
    axios
      .post(
        "https://laundry-marketplace-api-production.up.railway.app/api/v1/auth/merchant/login",
        {
          email: email,
          password: password,
        }
      )
      .then((response) => {
        console.log(response.data);
        console.log(response.data.data.token);
        const login_token = response.data.data.token;
        localStorage.setItem("login_token", login_token);

        navigate("/dashboard");
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
            {loading ? <BeatLoader size={8} color={"#ffffff"} /> : "Submit"}
          </button>
          <p>
            Dont have an Account?<a href="/signup">SIGNUP</a>
          </p>
        </form>
      </div>

      <img src={Ellipse} className="ellipse" />
    </>
  );
};

export default Login;
