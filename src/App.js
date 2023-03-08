import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import "./responsive.css";
import "./style.css";
import "./Assets/css/style.css";
const Loader = React.lazy(() => import("./Components/Loader"));
const Full = React.lazy(() => import("./Helper/Full"));

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
