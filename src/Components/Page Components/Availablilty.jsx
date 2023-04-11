import React from 'react'
import "./availability.css"
import {useState} from 'react'
import axios from 'axios'
const Availablilty = () => {
    const [ available, setAvailable ] = useState(false);
    const accessToken = localStorage.getItem("access_token");
    const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
    const handleToggle =()=>{
        setAvailable(!available);
        axios.patch("https://api-laundry-marketplace.onrender.com/api/v1/merchant/profile/availability",{
            isAvailable: available,
        },config)
        .then((response)=>{
            console.log(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
  return (
    
   <>
   <div className="availability-container">
    <p className="availability-header">Set Availability Status</p>
    <p className="availability-text">Choose your availability to accept or receive<br/>orders.</p>
    <div className="availability-btn-container">
        <button className={available?  'available' : 'unavailable'} onClick={handleToggle}  id="availabilty-btn">Available</button>
    </div>
   </div>
   </>
  )
}

export default Availablilty