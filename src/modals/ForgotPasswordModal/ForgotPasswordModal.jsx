import React, { useState, useContext } from "react";
import { useActions } from "../../context/actions/actions";
import "./forgotPasswordModal.scss";

export default function ForgotPasswordModal() {
  const actions = useActions();

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
      <p className="backToSignInLink" onClick={actions.modal.showSignInModal}>
        Back to sign in
      </p>
      <div className={`modalButton forgotPasswordButton`} onClick={() => {}}>
        Send me a link
      </div>
    </div>
  );
}
