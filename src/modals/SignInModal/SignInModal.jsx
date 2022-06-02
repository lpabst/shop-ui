import React, { useState, useContext } from "react";
import { login } from "../../api/userApi";
import { modalActions, modalContext } from "../../context/modalContext";
import { userActions, userContext } from "../../context/userContext";
import { isValidEmailFormat } from "../../utils/regex";
import "./signInModal.scss";

export default function SignInModal() {
  const { dispatch: modalDispatch } = useContext(modalContext);
  const { state: userState, dispatch: userDispatch } = useContext(userContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createAccountEmail, setCreateAccountEmail] = useState("");
  const [createAccountPassword, setCreateAccountPassword] = useState("");

  async function handleLogin() {
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

    userDispatch({
      type: userActions.SET_SIGN_IN_ERROR,
      value: "",
    });
    modalDispatch(modalActions.CLOSE_MODAL);
    userDispatch({
      type: userActions.USER_LOGGED_IN,
      value: userData,
    });
  }

  async function handleCreateAccount() {
    const emailIsValidFormat = isValidEmailFormat(createAccountEmail);
    if (!emailIsValidFormat) {
      return userDispatch({
        type: userActions.SET_CREATE_ACCOUNT_ERROR,
        value: "Invalid email format",
      });
    }

    // TODO: send create account api call
  }

  return (
    <div className="signInModal">
      <p className={`signInModalHeader signInHeader`}>Sign In</p>
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
      <hr />
      <p className={`signInModalHeader registerHeader`}>
        Don't have an account?
      </p>
      <p className="modalInputLabel">Email address</p>
      <input
        className={`modalInput emailInput`}
        type="text"
        placeholder="email"
        value={createAccountEmail}
        onChange={(e) => setCreateAccountEmail(e.target.value)}
      />
      <p className="modalInputLabel">Password</p>
      <input
        className={`modalInput passwordInput`}
        type="password"
        placeholder="password"
        value={createAccountPassword}
        onChange={(e) => setCreateAccountPassword(e.target.value)}
      />
      {userState.createAccountError && (
        <p className="modalErrorText">{userState.createAccountError}</p>
      )}
      <div
        className={`modalButton registerButton`}
        onClick={handleCreateAccount}
      >
        Create an account
      </div>
    </div>
  );
}
