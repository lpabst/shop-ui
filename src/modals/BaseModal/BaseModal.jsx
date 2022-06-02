import React, { useContext } from "react";
import { modalActions, modalContext } from "../../context/modalContext";
import closeXIcon from "../../assets/icons/closeX.svg";
import "./baseModal.scss";

export default function BaseModal({ children }) {
  const { dispatch } = useContext(modalContext);

  return (
    <div className="modalBackground">
      <div className="modal">
        <img
          onClick={() => dispatch(modalActions.CLOSE_MODAL)}
          className="closeX"
          src={closeXIcon}
          alt="close modal"
        />
        {children}
      </div>
    </div>
  );
}
