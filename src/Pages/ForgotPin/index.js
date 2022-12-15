import React from "react";
import Menu from "../Profile/Menu";
import ForgotPinForm from "./ForgotPinForm";

const ForgotTransactionPin = (props) => {
  return (
    <>
      <div className="bg-light">
        <Menu />
        <div className="container space-2">
          <div className="card">
            <div className="card-body">
              <div className="w-md-75 w-lg-50 mx-md-auto">
                <div className="mt-7">
                  <h2 className="h3 text-primary font-weight-normal mb-0">
                    Forgot your{" "}
                    <span className="font-weight-semi-bold">
                      transaction pin
                    </span>
                  </h2>
                  <p>
                    Enter your mobile number below and we'll send you OTP for
                    back on track.
                  </p>
                </div>
                <ForgotPinForm {...props} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-0" />
    </>
  );
};

export default ForgotTransactionPin;
