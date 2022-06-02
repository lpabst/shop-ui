import React, { useContext, useEffect } from "react";
import Header from "./components/Header/Header";
import AppRouter from "./router";
import { modalContext } from "./context/reducers/modalContext";
import { userContext } from "./context/reducers/userContext";
import BaseModal from "./modals/BaseModal/BaseModal";
import { setupUseActions } from "./context/actions/actions";
import "./app.scss";
import { productContext } from "./context/reducers/productContext";

function App() {
  const { state: modalState, dispatch: modalDispatch } =
    useContext(modalContext);
  const { state: userState, dispatch: userDispatch } = useContext(userContext);
  const { state: productState, dispatch: productDispatch } =
    useContext(productContext);
  const actions = setupUseActions({
    userDispatch,
    modalDispatch,
    productDispatch,
  });

  useEffect(() => {
    let userSession;
    try {
      userSession = JSON.parse(sessionStorage.getItem("userSession"));
      actions.user.setUserSession(userSession);
    } catch (e) {}
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
