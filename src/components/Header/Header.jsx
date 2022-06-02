import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import SearchBar from "../SearchBar/SearchBar";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import AccountLink from "./AccountLink/AccountLink";
import "./header.scss";

function Header() {
  return (
    <div className={`flexRow header`}>
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <SearchBar />
      <AccountLink />
      <ShoppingCart />
    </div>
  );
}

export default Header;
