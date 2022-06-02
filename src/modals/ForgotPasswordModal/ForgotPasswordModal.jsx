import React, { useState, useContext } from "react";
import { modalContext, modalActions } from "../../context/modalContext";
import "./forgotPasswordModal.scss";

export default function ForgotPasswordModal() {
  const { state, dispatch } = useContext(modalContext);

  const [email, setEmail] = useState("");

  return (
    <div className="forgotPasswordModal">
      <p className={`forgotPasswordHeader`}>
        Enter your email and we'll send you a password reset link.
      </p>
      <input
        className={`modalInput forgotPasswordInput`}
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p
        className="backToSignInLink"
        onClick={() => dispatch(modalActions.SHOW_SIGN_IN_MODAL)}
      >
        Back to sign in
      </p>
      <div className={`modalButton forgotPasswordButton`} onClick={() => {}}>
        Send me a link
      </div>
    </div>
  );
}
