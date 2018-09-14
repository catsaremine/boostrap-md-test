import React from "react";
import ReactDOM from "react-dom";

import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import { NavbarFeatures } from "./navbar.jsx";
import { LoginPage } from "./login-page.jsx";

import "./styles.scss";

function App() {
  return (
    <div className="App">
      <NavbarFeatures />
      <LoginPage />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
