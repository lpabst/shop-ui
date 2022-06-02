import React, { useContext, useEffect } from "react";
import Header from "./components/Header/Header";
import AppRouter from "./router";
import { modalContext } from "./context/modalContext";
import { userActions, userContext } from "./context/userContext";
import BaseModal from "./modals/BaseModal/BaseModal";
import "./app.scss";

function App() {
  const { state: modalState } = useContext(modalContext);
  const { state: userState, dispatch: userDispatch } = useContext(userContext);

  useEffect(() => {
    let userSession;
    try {
      userSession = JSON.parse(sessionStorage.getItem("userSession"));
    } catch (e) {}
    userDispatch({
      type: userActions.USER_LOGGED_IN,
      value: userSession,
    });
  }, []);

  return (
    <div className="app">
      <Header />
      <AppRouter />
      {modalState.modalToDisplay && (
        <BaseModal>{modalState.modalToDisplay}</BaseModal>
      )}
    </div>
  );
}

export default App;
