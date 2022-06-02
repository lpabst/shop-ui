import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useActions } from "../../../context/actions/actions";
import { userContext } from "../../../context/reducers/userContext";
import "./accountLink.scss";

export default function AccountLink() {
  const { state: userState } = useContext(userContext);
  const actions = useActions();

  let accountDropDownStyle = {};
  if (!userState.user) {
    accountDropDownStyle = { display: "none" };
  }

  return (
    <div className="accountLink">
      {userState.user ? (
        <p className="accountLinkText">{userState.user.firstName}</p>
      ) : (
        <p className="accountLinkText" onClick={actions.modal.showSignInModal}>
          Sign In
        </p>
      )}
      <div style={accountDropDownStyle} className={`accountDropDown`}>
        <Link to="/account" className="accountDropDownOption">
          My Account
        </Link>
        <p className="accountDropDownOption" onClick={actions.user.logoutUser}>
          Logout
        </p>
      </div>
    </div>
  );
}
