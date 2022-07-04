import React from "react";
import ResetForm from "./ResetForm";

const ResetPassword = (props) => {
  return (
    <>
      <div className="container space-2">
        <div className="w-md-75 w-lg-50 mx-md-auto">
          <div className="mb-7">
            <h2 className="h3 text-primary font-weight-normal mb-0">
              Reset your <span className="font-weight-semi-bold">password</span>
            </h2>
            <p>Enter your password and conform password below.</p>
          </div>
          <ResetForm {...props} />
        </div>
      </div>
      <hr className="my-0" />
    </>
  );
};

export default ResetPassword;
