import { StrictMode } from "react";
import { render } from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import Store from "./Redux/Store";
import "./index.css";

const rootElement = document.getElementById("root");
render(
  <Provider store={Store}>
    <App />
  </Provider>,
  rootElement
);
