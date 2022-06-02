import React, { createContext, useReducer } from "react";

const initialState = {
  user: null,
  cart: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "USER_LOGGED_IN": {
      return {
        ...state,
        user: action.value,
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
