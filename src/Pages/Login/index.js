import React from "react";
import VectorImg from "../../Assets/vector.png";
import LoginForm from "./LoginForm";

const Login = (props) => {
  return (
    <div className="space-2">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="mb-7">
              <h2 className="h3 text-primary font-weight-normal mb-0">
                Welcome <span className="font-weight-semi-bold">back</span>
              </h2>
              <p>Login to manage your account.</p>
            </div>
            <LoginForm {...props} />
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

export default Login;
