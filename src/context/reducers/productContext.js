import React, { createContext, useReducer } from "react";

export const productActions = {
  SET_HOME_PAGE_PRODUCTS: "SET_HOME_PAGE_PRODUCTS",
};

const initialState = {
  homePageProducts: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case productActions.SET_HOME_PAGE_PRODUCTS: {
      return {
        ...state,
        homePageProducts: action.value,
      };
    }

    default:
      return state;
  }
};

export const productContext = createContext(initialState);

export const ProductStore = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <productContext.Provider value={{ state, dispatch }}>
      {children}
    </productContext.Provider>
  );
};
