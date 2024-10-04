import React, { useState } from "react";
import "./navbar.css";
import { assets } from "../../assets/assets";

const Header = () => {
  const [menu, setMenu] = useState("home");
  return (
    <nav>
      <img className="logo" src={assets.logo} alt="" />
      <ul className="links">
        <li
          onClick={() => {
            setMenu("home");
          }}
          className={menu === "home" ? "active" : ""}
        >
          home
        </li>
        <li
          onClick={() => {
            setMenu("menu");
          }}
          className={menu === "menu" ? "active" : ""}
        >
          
          menu
        </li>
        <li
          onClick={() => {
            setMenu("mobile");
          }}
          className={menu === "mobile" ? "active" : ""}
        >
          mobile-app
        </li>
        <li
          onClick={() => {
            setMenu("contact");
          }}
          className={menu === "contact" ? "active" : ""}
        >
          contact us
        </li>
      </ul>
      <div className="nav-right">
        <img className="search" src={assets.search_icon} alt="" />
        <div className="nav-bar-basket">
          <img className="basket" src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button> sign in</button>
      </div>
    </nav>
  );
};

export default Header;
