import React from "react";
import modalContext from "../../context/store/modalContext";
import closeXIcon from "../../assets/icons/closeX.svg";

export default function BaseModal({ children }) {
  const { state, dispatch } = useContext(modalContext);

  return (
    <div className="modalBackground">
      <div className="modal">
        <img
          onClick={dispatch({ type: "CLOSE_MODAL" })}
          className="closeX"
          src={closeXIcon}
          alt="close modal"
        />
        {children}
      </div>
    </div>
  );
}
