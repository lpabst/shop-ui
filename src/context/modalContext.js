import React, { createContext, useReducer } from "react";
import SignInModal from "../modals/SignInModal/SignInModal";
import ForgotPasswordModal from "../modals/ForgotPasswordModal/ForgotPasswordModal";
import VerifyAccountModal from "../modals/VerifyAccountModal/VerifyAccountModal";

export const modalActions = {
  SHOW_SIGN_IN_MODAL: "SHOW_SIGN_IN_MODAL",
  SHOW_FORGOT_PASSWORD_MODAL: "SHOW_FORGOT_PASSWORD_MODAL",
  SHOW_VERIFY_ACCOUNT_MODAL: "SHOW_VERIFY_ACCOUNT_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
};

const initialState = {
  modalToDisplay: null,
};

const reducer = (state, action) => {
  // NOTE: for simplicity these actions are strings, not objects with a type attribute
  switch (action) {
    case modalActions.CLOSE_MODAL: {
      return {
        ...state,
        modalToDisplay: null,
      };
    }

    case modalActions.SHOW_SIGN_IN_MODAL: {
      return {
        ...state,
        modalToDisplay: <SignInModal />,
      };
    }

    case modalActions.SHOW_FORGOT_PASSWORD_MODAL: {
      return {
        ...state,
        modalToDisplay: <ForgotPasswordModal />,
      };
    }

    case modalActions.SHOW_VERIFY_ACCOUNT_MODAL: {
      return {
        ...state,
        modalToDisplay: <VerifyAccountModal />,
      };
    }
  }
};

export const modalContext = createContext(initialState);

export const ModalStore = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <modalContext.Provider value={{ state, dispatch }}>
      {children}
    </modalContext.Provider>
  );
};
