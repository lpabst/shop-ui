import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserStore } from "./context/userContext";
import { ModalStore } from "./context/modalContext";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserStore>
      <ModalStore>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ModalStore>
    </UserStore>
  </React.StrictMode>
);
