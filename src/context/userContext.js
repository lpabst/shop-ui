import React, { createContext, useReducer } from "react";

export const userActions = {
  USER_LOGGED_OUT: "USER_LOGGED_OUT",
  SET_SIGN_IN_ERROR: "SET_SIGN_IN_ERROR",
  USER_LOGGED_IN: "USER_LOGGED_IN",
  SET_CREATE_ACCOUNT_ERROR: "SET_CREATE_ACCOUNT_ERROR",
};

const initialState = {
  user: null,
  signInError: "",
  createAccountError: "",
  cart: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case userActions.USER_LOGGED_IN: {
      return {
        ...state,
        user: action.value,
      };
    }

    case userActions.USER_LOGGED_OUT: {
      return {
        ...state,
        user: null,
      };
    }

    case userActions.SET_SIGN_IN_ERROR: {
      return {
        ...state,
        signInError: action.value,
      };
    }

    case userActions.SET_CREATE_ACCOUNT_ERROR: {
      return {
        ...state,
        createAccountError: action.value,
      };
    }

    default:
      return state;
  }
};

export const userContext = createContext(initialState);

export const UserStore = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <userContext.Provider value={{ state, dispatch }}>
      {children}
    </userContext.Provider>
  );
};
