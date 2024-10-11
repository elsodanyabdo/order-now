// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import "./navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <nav>
      <Link to="/">
      <img className="logo" src={assets.logo} alt="" />
      </Link>
      <ul className="links">
        <Link to="/"
          onClick={() => {
            setMenu("home");
          }}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>
        <a href="#explore"
          onClick={() => {
            setMenu("menu");
          }}
          className={menu === "menu" ? "active" : ""}
        >

          menu
        </a>
        <a href="#download"
          onClick={() => {
            setMenu("mobile");
          }}
          className={menu === "mobile" ? "active" : ""}
        >
          mobile-app
        </a>
        <a href="#footer"
          onClick={() => {
            setMenu("contact");
          }}
          className={menu === "contact" ? "active" : ""}
        >
          contact us
        </a>
      </ul>
      <div className="nav-right">
        <img className="search" src={assets.search_icon} alt="" />
        <div className="nav-bar-basket">
          <Link to="/cart">
          <img className="basket" src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}> sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
