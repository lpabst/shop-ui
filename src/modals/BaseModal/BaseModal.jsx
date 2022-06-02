import React from "react";
import closeXIcon from "../../assets/icons/closeX.svg";
import { useActions } from "../../context/actions/actions";
import "./baseModal.scss";

export default function BaseModal({ children }) {
  const actions = useActions();

  return (
    <div className="modalBackground">
      <div className="modal">
        <img
          onClick={actions.modal.closeBaseModal}
          className="closeX"
          src={closeXIcon}
          alt="close modal"
        />
        {children}
      </div>
    </div>
  );
}
