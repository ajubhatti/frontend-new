import React from "react";
import VectorImg from "../../Assets/vector.png";
import LoginForm from "./LoginForm";
import "./style.css";

const Login = (props) => {
  return (
      <div className="container login-pages">
        <div className="row">
        <div className="col-md-6">
          <div className="card">
          <div className="card-body p-4">
              <h2 className="h3 text-primary font-weight-normal mb-0">
                Welcome <span className="font-weight-semi-bold">back</span>
              </h2>
              <p>Login to manage your account.</p>
            <LoginForm {...props} />
          </div>
          </div>
        </div>
          <div className="col-md-6">
            <div className="vector-img">
              <img src={VectorImg} alt="" className="w-100" />
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default Login;
