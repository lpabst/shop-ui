import React from "react";
import SignInSection from "./SignInSection/SignInSection";
import CreateAccountSection from "./CreateAccountSection/CreateAccountSection";
import "./signInModal.scss";

export default function SignInModal() {
  return (
    <div className="signInModal">
      <SignInSection />
      <hr />
      <CreateAccountSection />
    </div>
  );
}
