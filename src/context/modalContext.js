import React, { createContext, useReducer } from "react";
import SignInModal from "../modals/SignInModal/SignInModal";
import ForgotPasswordModal from "../modals/ForgotPasswordModal/ForgotPasswordModal";

export const modalActions = {
  SHOW_SIGN_IN_MODAL: "SHOW_SIGN_IN_MODAL",
  SHOW_FORGOT_PASSWORD_MODAL: "SHOW_FORGOT_PASSWORD_MODAL",
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
      console.log("hit it");
      return {
        ...state,
        modalToDisplay: <ForgotPasswordModal />,
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
