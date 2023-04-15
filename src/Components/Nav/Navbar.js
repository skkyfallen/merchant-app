import React from 'react'
import "./Navbar.css"
import {BsWindows,BsFileTextFill} from "react-icons/bs"
import {IoWallet} from "react-icons/io5"
import {RiShoppingCartFill} from "react-icons/ri"
import { NavLink,  useLocation } from 'react-router-dom'
const Navbar = () => {
    const location = useLocation();
  return (
    <>
<nav>
    <ul>
        <li className={location.pathname==='/dashboard'? 'active':''}>
        <BsWindows className="icons" />
        <span>
            <NavLink exact to="/dashboard" className="nav-link">Dashboard</NavLink>
        </span>
        </li>
        <li className={location.pathname=== '/wallet' ? 'active': ''  }    >
            <IoWallet className="icons" />
            <span>
                <NavLink to="/wallet" className="nav-link">Wallet</NavLink>

            </span>
        </li>
        <li className={location.pathname === '/shop' ? 'active': ''}>
            <RiShoppingCartFill className="icons" />
            <span>
                <NavLink to="/shop" className="nav-link">Shop</NavLink>
            </span>
        </li>
        <li className={location.pathname === '/history' ? 'active':''}>
        <BsFileTextFill className="icons" />
        <span>
            <NavLink  to="/history" className="nav-link">History</NavLink>
        </span>
        </li>
    </ul>
</nav>

    </>
  )
}

export default Navbar