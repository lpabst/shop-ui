import React, { useState, useContext } from "react";
import { login } from "../../../api/userApi";
import { modalActions, modalContext } from "../../../context/modalContext";
import { userActions, userContext } from "../../../context/userContext";
import { isValidEmailFormat } from "../../../utils/regex";
import "./signInSection.scss";

export default function SignInSection() {
  const { dispatch: modalDispatch } = useContext(modalContext);
  const { state: userState, dispatch: userDispatch } = useContext(userContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    userDispatch({
      type: userActions.SET_SIGN_IN_ERROR,
      value: "",
    });
    userDispatch({
      type: userActions.SET_CREATE_ACCOUNT_ERRORS,
      value: [],
    });

    const emailIsValidFormat = isValidEmailFormat(email);
    if (!emailIsValidFormat) {
      return userDispatch({
        type: userActions.SET_SIGN_IN_ERROR,
        value: "Invalid email format",
      });
    }

    let userData;
    try {
      userData = await login({ email, password });
    } catch (e) {
      return userDispatch({
        type: userActions.SET_SIGN_IN_ERROR,
        value: "Invalid email or password",
      });
    }

    modalDispatch(modalActions.CLOSE_MODAL);
    userDispatch({
      type: userActions.USER_LOGGED_IN,
      value: userData,
    });
  }

  return (
    <div className="signInSection">
      <p className={`signInSectionHeader signInHeader`}>Sign In</p>
      <p className="modalInputLabel">Email address</p>
      <input
        className={`modalInput emailInput`}
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p className="modalInputLabel">Password</p>
      <input
        className={`modalInput passwordInput`}
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p
        className="forgotPasswordLink"
        onClick={() => modalDispatch(modalActions.SHOW_FORGOT_PASSWORD_MODAL)}
      >
        Forgot your password?
      </p>
      {userState.signInError && (
        <p className="modalErrorText">{userState.signInError}</p>
      )}
      <div className={`modalButton signInButton`} onClick={handleLogin}>
        Sign in
      </div>
    </div>
  );
}
