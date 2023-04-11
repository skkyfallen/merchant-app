import React from 'react'
import "./dashWallet.css"
const DashWallet = () => {
  return (
    <>
    <div className="wallet-details-container">
      <p className="hello-user">Hello Kene,</p>
      <div className="wallet-sub-containers">
      <div className="wallet-balance">
        <p className="wallet-balance-text">Wallet Balance</p>
        <p className="wallet-balance-amount">₦ 12,500.00</p>
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
  )
}

export default DashWallet