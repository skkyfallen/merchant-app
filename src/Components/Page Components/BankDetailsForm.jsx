import React from 'react'
import "./bankDetailsform.css"
const BankDetailsForm = () => {
  return (
    <>
    <form className="bank-details-form">
    <h2 className="bank-details-heading">Bank Details</h2>
    <p className="bank-field-label">Bank Name</p>
    <input type="text" className="bank-field" />
    <p className="account-no-field-label">Account Number</p>
    <input type="text" className="bank-field" />
    </form>
    </>
  )
}

export default BankDetailsForm