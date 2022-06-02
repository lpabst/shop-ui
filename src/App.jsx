import React, { useContext } from "react";
import Header from "./components/Header/Header";
import AppRouter from "./router";
import { modalContext } from "./context/store/modalContext";
import "./app.scss";

function App() {
  const { state, dispatch } = useContext(modalContext);

  return (
    <div className="app">
      <Header />
      <AppRouter />
      {state.modalToDisplay}
    </div>
  );
}

export default App;
