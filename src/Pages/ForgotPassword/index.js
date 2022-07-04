import React from "react";
import ForgotForm from "./ForgotForm";

const ForgotPassword = (props) => {
  return (
    <>
      <div className="container space-2">
        <div className="w-md-75 w-lg-50 mx-md-auto">
          <div className="mb-7">
            <h2 className="h3 text-primary font-weight-normal mb-0">
              Forgot your{" "}
              <span className="font-weight-semi-bold">password</span>
            </h2>
            <p>
              Enter your email address below and we'll get you back on track.
            </p>
          </div>
          <ForgotForm {...props} />
        </div>
      </div>
      <hr className="my-0" />
    </>
  );
};

export default ForgotPassword;
