import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import SearchBar from "../SearchBar/SearchBar";
import "./nav.scss";

function Nav() {
  return (
    <div className={`flexRow nav`}>
      <div className={`flexRow`}>
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <SearchBar />
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}

export default Nav;
