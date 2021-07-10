// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
//renderiza mi app
ReactDOM.render(
 <BrowserRouter>
 <App />
 </BrowserRouter>,
 document.getElementById("root")
);