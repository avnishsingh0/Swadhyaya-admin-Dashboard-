import React from "react";
// Third party
import ReactDOM from "react-dom/client";

// Internal imports 
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
reportWebVitals();
