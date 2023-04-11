import React from 'react'
import Navbar from '../Components/Nav/Navbar'
import "./merchantDash.css"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {login }from "../authSlice"
import DashWallet from '../Components/Page Components/DashWallet'
import Availablilty from '../Components/Page Components/Availablilty.jsx'
const MerchantDashboard = () => {
  const dispatch = useDispatch();
  const persistLogin=()=>{
    const token = localStorage.getItem('token'); 
     if (token) {
    dispatch(login(token));
  }
  }
  useEffect(() => {
    persistLogin();
  },[dispatch]);
  return (
    <>
    {/*Side Nav */}
    <Navbar/>
    
    {/*Wallet Details */}
    <DashWallet/>
    
    {/* Set Availablilty */}
    <Availablilty/>
    </>
  )
}

export default MerchantDashboard