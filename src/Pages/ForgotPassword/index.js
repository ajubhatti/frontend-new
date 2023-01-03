import React from "react";
import ForgotForm from "./ForgotForm";
import ResetPasswordOtp from "./ResetPasswordOtp";
import "./style.css";

const ForgotPassword = (props) => {
  return (
    <>
    <div className="forget-password-pages">
      <div className="container">
        <div className="row justify-content-center">
        <div className="col-md-6">
           <div className="card">
             <div className="card-body">
            <h2 className="h3 text-primary font-weight-normal mb-0">
              Forgot your <span className="font-weight-semi-bold"> password</span>
            </h2>
            <p>
              Enter your mobile number below and we'll send you OTP for back on
              track.
            </p>
          <ForgotForm {...props} />
             </div>
           </div>
        </div>
        </div>
      </div>
      {/* <hr className="my-0" /> */}

    </div>
    </>
  );
};

export default ForgotPassword;
