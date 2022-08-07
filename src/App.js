import React from "react";
import { BrowserRouter } from "react-router-dom";
import Full from "./Helper/Full";
import "./style.css";
import  "./responsive.css";

const App = () => {
  return (
    <BrowserRouter>
      <Full />
    </BrowserRouter>
  );
};

export default App;
