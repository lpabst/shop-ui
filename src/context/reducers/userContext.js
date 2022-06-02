import React, { createContext, useReducer } from "react";

export const userActions = {
  USER_LOGGED_OUT: "USER_LOGGED_OUT",
  SET_SIGN_IN_ERROR: "SET_SIGN_IN_ERROR",
  SET_USER_SESSION: "SET_USER_SESSION",
  SET_CREATE_ACCOUNT_ERRORS: "SET_CREATE_ACCOUNT_ERRORS",
};

const initialState = {
  user: null,
  signInError: "",
  createAccountErrors: [],
  cart: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case userActions.SET_USER_SESSION: {
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

    case userActions.SET_CREATE_ACCOUNT_ERRORS: {
      return {
        ...state,
        createAccountErrors: action.value,
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
