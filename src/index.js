import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import PhotoContext from "./context/PhotoContext";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PhotoContext>
        <App />
      </PhotoContext>
    </Provider>
  </React.StrictMode>
);
