import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../../Components/Form";
import routes from "../../Helper/routes";

const LoginForm = (props) => {
  const [apiCall, setApiCall] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState({
    mobileNo: "",
    password: "",
  });

  const handlerChange = (event) => {
    const { name, value } = event.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setApiCall(true);
    setSubmitted(true);
    if (values.mobileNo !== "" && values.password !== "") {
      try {
        await props.login(values).then((res) => {
          if (res.data) {
            props.history.push(routes.home);
          } else {
            props.history.push({
              pathname: routes.otp,
              state: {
                mobileNo: values.mobileNo,
              },
            });
          }
        });
      } finally {
        setApiCall(false);
      }
    }
  };

  return (
    <Form name="login-form" submitHandler={submitHandler}>
      <div className="form-group">
        <label className="form-label">Phone Number</label>
        <input
          type="tel"
          name="mobileNo"
          placeholder="123-45-678"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          required
          value={values.mobileNo}
          onChange={handlerChange}
          className={
            "form-control" +
            (submitted && !values.mobileNo ? " is-invalid" : "")
          }
        />
        {submitted && !values.mobileNo && (
          <div className="invalid-feedback">Phone Number is required</div>
        )}
      </div>
      <div className="form-group">
        <label className="form-label">
          <span className="d-flex justify-content-between align-items-center">
            Password
            <Link
              to={routes.forgot}
              className="link-muted text-capitalize font-weight-normal"
            >
              Forgot Password?
            </Link>
          </span>
        </label>
        <input
          type="password"
          placeholder="Password"
          required=""
          name="password"
          value={values.password}
          onChange={handlerChange}
          className={
            "form-control" +
            (submitted && !values.password ? " is-invalid" : "")
          }
        />
        {submitted && !values.password && (
          <div className="invalid-feedback">Password is required</div>
        )}
      </div>

      <div className="row align-items-center mb-5">
        <div className="col-6">
          <span className="small text-muted">Don't have an account?</span>
          <Link to={routes.register} className="small">
            Signup
          </Link>
        </div>

        <div className="col-6 text-right">
          <button
            type="submit"
            className="btn btn-primary transition-3d-hover"
            onClick={submitHandler}
            disabled={apiCall}
          >
            Get Started
          </button>
        </div>
      </div>
    </Form>
  );
};

export default LoginForm;
