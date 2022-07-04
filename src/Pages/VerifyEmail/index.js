import React from "react";
import { toast } from "react-toastify";
import iconChecked from "../../Assets/iconChecked.svg";
import routes from "../../Helper/routes";

const VerifyEmail = (props) => {

  const clickHandler = async () => {
    // await props.verify().then((res) => {
    //   toast.success(res.message);
    //   props.history.push(routes.home);
    // });
  };
  return (
    <>
      <div className="container space-2 space-lg-3">
        <div className="w-md-80 w-lg-50 text-center mx-md-auto">
          <figure
            id="iconChecked"
            className="ie-height-90 max-width-11 mx-auto mb-3"
          >
            <img src={iconChecked} alt="" />
          </figure>
          <div className="mb-5">
            <h1 className="h3 font-weight-medium">Welcome!</h1>
            <p>
              We're excited to have you get started. First, you need conform
              your account. just press the button below.
            </p>
          </div>
          <button
            className="btn btn-primary btn-pill transition-3d-hover px-5"
            onClick={clickHandler}
          >
            Conform Account
          </button>
        </div>
      </div>
      <hr className="my-0" />
    </>
  );
};

export default VerifyEmail;
