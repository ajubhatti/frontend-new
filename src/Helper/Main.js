import React, { useEffect } from "react";
import Contain from "../Components/Contain";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { ToastContainer } from "react-toastify";
import { getUser } from "./LocalStorage";
import "react-toastify/dist/ReactToastify.css";

const loader = document.querySelector(".-loading");
const hideLoader = () => loader?.classList.add("loader--hide");

const Main = (props) => {
  useEffect(() => {
    hideLoader();
  }, []);
  const user = getUser();

  return (
    <div>
      <ToastContainer />
      <Header {...user} />
      <div className="content-pages bg-light">
      <Contain>{props?.children}</Contain>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
