import React from "react";
import VectorImg from "../../Assets/vector.png";
import RegisterForm from "./RegisterForm";

const Register = (props) => {
  return (
    <div className="space-2">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="mb-7">
              <h2 className="h3 text-primary font-weight-normal mb-0">
                Welcome to{" "}
                <span className="font-weight-semi-bold">badipay</span>
              </h2>
              <p>Fill out the form to get started.</p>
            </div>
            <RegisterForm {...props} />
          </div>
          <div className="col-md-6">
            <div className="vector-img">
              <img src={VectorImg} alt="" className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
