import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../../api/userApi";
import { modalActions, modalContext } from "../../../context/modalContext";
import { userActions, userContext } from "../../../context/userContext";
import "./accountLink.scss";

export default function AccountLink() {
  const { dispatch: modalDispatch } = useContext(modalContext);
  const { state: userState, dispatch: userDispatch } = useContext(userContext);

  async function handleLogout() {
    await logout();
    userDispatch({
      type: userActions.USER_LOGGED_OUT,
    });
  }

  let accountDropDownStyle = {};
  if (!userState.user) {
    accountDropDownStyle = { display: "none" };
  }

  return (
    <div className="accountLink">
      {userState.user ? (
        <p className="accountLinkText">{userState.user.firstName}</p>
      ) : (
        <p
          className="accountLinkText"
          onClick={() => modalDispatch(modalActions.SHOW_SIGN_IN_MODAL)}
        >
          Sign In
        </p>
      )}
      <div style={accountDropDownStyle} className={`accountDropDown`}>
        <Link to="/account" className="accountDropDownOption">
          My Account
        </Link>
        <p className="accountDropDownOption" onClick={handleLogout}>
          Logout
        </p>
      </div>
    </div>
  );
}
