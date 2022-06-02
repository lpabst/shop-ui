import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import SearchBar from "../SearchBar/SearchBar";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { modalActions, modalContext } from "../../context/modalContext";
import "./header.scss";

function Header() {
  const { dispatch } = useContext(modalContext);

  return (
    <div className={`flexRow header`}>
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <SearchBar />
      <p
        className="signIn"
        onClick={() => dispatch(modalActions.SHOW_SIGN_IN_MODAL)}
      >
        Sign In
      </p>
      <ShoppingCart />
    </div>
  );
}

export default Header;
