import React from 'react'
import { Link } from "react-router-dom";
import { ShoppingCart} from "phosphor-react";
import "./navbar.css";
import Logo from "../assets/logo.png";

const navbar = () => {
  return (
    <div className="navbar">
      <img src={Logo} alt="logo" className="logo"/>
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
            <ShoppingCart size={32}/>
        </Link>
      </div>
    </div>
  )
}

export default navbar
