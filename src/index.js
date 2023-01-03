import React from "react";
import ReactDOM from "react-dom/client";
//import "./style.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./Redux/store";
// import "font-awesome/css/font-awesome.min.css";
import "./Helper/fontAwesome";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "@popperjs/core"; 
import "bootstrap";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


reportWebVitals();
