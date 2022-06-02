import React, { useState, useContext } from "react";
import { useActions } from "../../../context/actions/actions";
import { userContext } from "../../../context/reducers/userContext";
import { isValidEmailFormat } from "../../../utils/regex";
import "./createAccountSection.scss";

export default function CreateAccountSection() {
  const { state: userState, dispatch: userDispatch } = useContext(userContext);
  const actions = useActions();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleCreateAccount() {
    actions.modal.clearSignInModalErrors();

    const validationError = handleCreateAccountValidation();
    if (validationError) {
      return;
    }

    await actions.user.createAccount({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    });
  }

  function handleCreateAccountValidation() {
    let errors = [];
    if (!firstName.trim()) {
      errors.push("First name is required");
    }

    if (!lastName.trim()) {
      errors.push("Last name is required");
    }

    if (!email.trim()) {
      errors.push("Email is required");
    } else if (!isValidEmailFormat(email)) {
      errors.push("Invalid email format");
    }

    if (!password.trim()) {
      errors.push("Password is required");
    }

    if (password.length < 8) {
      errors.push("Password is too short");
    }

    if (!password.match(/[a-z]/)) {
      errors.push("Password must contain a lowercase letter");
    }

    if (!password.match(/[A-Z]/)) {
      errors.push("Password must contain an uppercase letter");
    }

    if (!password.match(/[0-9]/)) {
      errors.push("Password must contain a number");
    }

    actions.user.setCreateAccountErrors(errors);

    return !!errors.length;
  }

  return (
    <div className="createAccountSection">
      <p className={`createAccountSectionHeader registerHeader`}>
        Don't have an account?
      </p>
      <p className="modalInputLabel">First name</p>
      <input
        className={`modalInput firstNameInput`}
        type="text"
        placeholder="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <p className="modalInputLabel">Last name</p>
      <input
        className={`modalInput lastNameInput`}
        type="text"
        placeholder="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
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
      <p className="passwordRequirementsText">
        *Password must be at least 8 characters, and must contain an uppercase
        letter, a lower case letter, and a number
      </p>
      {userState.createAccountErrors &&
        userState.createAccountErrors.map((error, i) => (
          <p className="modalErrorText" key={i}>
            -&nbsp;{error}
          </p>
        ))}
      <div
        className={`modalButton registerButton`}
        onClick={handleCreateAccount}
      >
        Create an account
      </div>
    </div>
  );
}
