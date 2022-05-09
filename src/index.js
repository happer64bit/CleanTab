import ReactDOM from "react-dom/client";
import { App } from "./pages/App";
import React from 'react'

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);