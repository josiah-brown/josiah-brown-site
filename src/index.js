import React from "react";
// import ReactDOM from "react-dom/client";
import { hydrate, render } from "react-dom";
import "./index.css";
import App from "./App";
import { themeSetup } from "./data/themeSetup";
import reportWebVitals from "./reportWebVitals";

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

window.addEventListener("resize", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

themeSetup();

const root = document.getElementById("root");
if (root.hasChildNodes()) {
  hydrate(<App />, root);
} else {
  render(<App />, root);
}
// root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
