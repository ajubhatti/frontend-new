import React, { Suspense, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./style.css";
import "./responsive.css";
import "./Assets/css/style.css";
import Loader from "./Components/Loader";

const Full = React.lazy(() => import('./Helper/Full'));

const App = () => {
  return (
    <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <Full />
    </Suspense>
    </BrowserRouter>
  );
};

export default App;
