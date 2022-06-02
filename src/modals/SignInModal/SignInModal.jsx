import React, { useState, useContext } from "react";
import { modalActions, modalContext } from "../../context/modalContext";
import "./signInModal.scss";

export default function SignInModal() {
  const { state, dispatch } = useContext(modalContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

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
        onClick={() => dispatch(modalActions.SHOW_FORGOT_PASSWORD_MODAL)}
      >
        Forgot your password?
      </p>
      <div className={`modalButton signInButton`} onClick={() => {}}>
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
        value={registerEmail}
        onChange={(e) => setRegisterEmail(e.target.value)}
      />
      <p className="modalInputLabel">Password</p>
      <input
        className={`modalInput passwordInput`}
        type="password"
        placeholder="password"
        value={registerPassword}
        onChange={(e) => setRegisterPassword(e.target.value)}
      />
      <div className={`modalButton registerButton`} onClick={() => {}}>
        Create an account
      </div>
    </div>
  );
}
