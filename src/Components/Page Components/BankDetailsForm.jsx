import React from "react";
import "./bankDetailsform.css";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const BankDetailsForm = () => {
  const [bankName, setBankName] = useState("");
  const [bankCode, setBankCode] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const accessToken = localStorage.getItem("login_token");
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const setBankDetails = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://laundry-marketplace-api-production.up.railway.app/api/v1/merchant/bank-details/set",
        {
          bank: bankName,
          bank_code: bankCode,
          account_number: accountNumber,
        },
        config
      )
      .then((response) => {
        console.log(response.data);
        toast.success("Bank Details Added Successfully");
      })
      .catch((error) => {
        console.log(error.response);
        toast.error("Failed to Add Bank Details");
      });
  };
  return (
    <>
      <form className="bank-details-form">
        <h2 className="bank-details-heading">Bank Details</h2>
        <p className="bank-field-label">Bank Name</p>
        <input
          type="text"
          className="bank-field-1"
          value={bankName}
          onChange={(event) => setBankName(event.target.value)}
        />
        <p className="bank-code-field-label">Bank Code</p>
        <input
          type="text"
          className="bank-code-field"
          placeholder="eg 033"
          value={bankCode}
          onChange={(event) => setBankCode(event.target.value)}
        />
        <p className="account-no-field-label">Account Number</p>
        <input
          type="text"
          className="bank-field"
          value={accountNumber}
          onChange={(event) => setAccountNumber(event.target.value)}
        />
        <button className="set-bank-button" onClick={setBankDetails}>
          Add Bank Details
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default BankDetailsForm;
