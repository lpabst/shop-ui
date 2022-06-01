import React, { createContext, useReducer } from "react";

const initialState = {
  modalToDisplay: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CLOSE_MODAL": {
      return {
        ...state,
        modalToDisplay: null,
      };
    }

    case "SHOW_MODAL": {
      return {
        ...state,
        modalToDisplay: action.value,
      };
    }

    default:
      return state;
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
