import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "../../Components/Form";
import routes from "../../Helper/routes";

const LoginForm = (props) => {
  const navigate = useNavigate();
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
    setApiCall(true);
    setSubmitted(true);
    if (values.mobileNo !== "" && values.password !== "") {
      try {
        await props.login(values).then((res) => {
          console.log("res--------", res);
          if (res.data) {
            window.location.href = "/";
          } else {
            navigate(routes.otp, {
              state: {
                mobileNo: values.mobileNo,
              },
            });
            // props.history.push({
            //   pathname: routes.otp,
            //   state: {
            //     mobileNo: values.mobileNo,
            //   },
            // });
          }
        });
      } finally {
        setApiCall(false);
      }
    }
  };

  return (
    <Form name="login-form">
      <div className="form-group">
        <label className="form-label">Mobile Number</label>
        <input
          type="tel"
          name="mobileNo"
          placeholder="90XXXXXXXX"
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
          placeholder="*******"
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
          <Link to={routes.register} className="ml-1 small">
            Signup
          </Link>
        </div>

        <div className="col-6 text-right">
          <button
            type="button"
            className="btn btn-primary transition-3d-hover"
            disabled={apiCall}
            onClick={(e) => submitHandler(e)}
          >
            Login
          </button>
        </div>
      </div>
    </Form>
  );
};

export default LoginForm;
