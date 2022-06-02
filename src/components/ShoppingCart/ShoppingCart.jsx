import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cartIcon from "../../assets/icons/cart.svg";
import { userContext } from "../../context/userContext";
import "./shoppingCart.scss";

export default function Cart({}) {
  const { state } = useContext(userContext);

  let itemsInCartDisplay = state.cart.length;
  let itemsInCartStyle = {};
  if (itemsInCartDisplay >= 10) {
    itemsInCartDisplay = "9+";
    itemsInCartStyle = { left: "18px" };
  }

  return (
    <Link to="/cart" className="shoppingCart">
      <p className="itemsCount" style={itemsInCartStyle}>
        {itemsInCartDisplay}
      </p>
      <img className="icon" src={cartIcon} alt="cart" />
    </Link>
  );
}
