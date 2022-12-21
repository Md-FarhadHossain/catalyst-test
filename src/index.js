import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import PhotoContext from "./context/PhotoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PhotoContext>
      <App />
    </PhotoContext>
  </React.StrictMode>
);
