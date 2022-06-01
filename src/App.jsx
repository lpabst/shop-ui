import React, { useContext } from "react";
import Nav from "./components/Nav/Nav";
import AppRouter from "./router";
import { modalContext } from "./context/modalContext";
import "./app.scss";

function App() {
  const { state, dispatch } = useContext(modalContext);

  return (
    <div className="app">
      <Nav />
      <AppRouter />
      {state.modalToDisplay}
    </div>
  );
}

export default App;
