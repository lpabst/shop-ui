import React, { useState, useContext } from "react";
import { login } from "../../../api/userApi";
import { useActions } from "../../../context/actions/actions";
import {
  modalActions,
  modalContext,
} from "../../../context/reducers/modalContext";
import {
  userActions,
  userContext,
} from "../../../context/reducers/userContext";
import { isValidEmailFormat } from "../../../utils/regex";
import "./signInSection.scss";

export default function SignInSection() {
  const { dispatch: modalDispatch } = useContext(modalContext);
  const { state: userState, dispatch: userDispatch } = useContext(userContext);
  const actions = useActions();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    actions.modal.clearSignInModalErrors();

    const emailIsValidFormat = isValidEmailFormat(email);
    if (!emailIsValidFormat) {
      return actions.user.setSignInError("Invalid email format");
    }

    let userData;
    try {
      userData = await login({ email, password });
    } catch (e) {
      return actions.user.setSignInError("Invalid email or password");
    }

    actions.modal.closeBaseModal();
    actions.user.setUserSession(userData);
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
        onClick={actions.modal.showForgotPasswordModal}
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
