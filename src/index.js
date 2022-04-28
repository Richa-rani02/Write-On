import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import { AuthProvider } from "./context/auth-context";
import {GlobalProvider} from "./context/global-context";
import {NotesProvider} from "./context/notes-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <GlobalProvider>
      <AuthProvider>
        <NotesProvider>
        <App />
        </NotesProvider>
      </AuthProvider>
      </GlobalProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
