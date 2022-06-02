import React, { useContext } from "react";
import Header from "./components/Header/Header";
import AppRouter from "./router";
import { modalContext } from "./context/modalContext";
import "./app.scss";
import BaseModal from "./modals/BaseModal/BaseModal";

function App() {
  const { state } = useContext(modalContext);

  return (
    <div className="app">
      <Header />
      <AppRouter />
      {state.modalToDisplay && <BaseModal>{state.modalToDisplay}</BaseModal>}
    </div>
  );
}

export default App;
