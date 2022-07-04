import React, { useEffect, useState } from "react";
import Form from "../../Components/Form";
import routes from "../../Helper/routes";
import { getQueryData } from "../../Helper";
import { toast } from "react-toastify";
// import OtpInput from "react-otp-input";

const ResetForm = (props) => {
  const [apiCall, setApiCall] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState({
    otp: "",
    mobileNo: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (props.location) {
      const getPhone = props.history.location.state.mobileNo;
      setValues((prevState) => ({
        ...prevState,
        mobileNo: getPhone,
      }));
    }
  }, [props]);

  const handlerChange = (event) => {
    const { name, value } = event.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const otpHandler = (value) => {
    setValues((prevState) => ({
      ...prevState,
      otp: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setApiCall(true);
    setSubmitted(true);
    if (
      values.otp !== "" &&
      values.mobileNo !== "" &&
      values.password !== "" &&
      values.confirmPassword !== ""
    ) {
      try {
        const payload = {
          token: values.otp,
          phoneNumber: values.mobileNo,
          password: values.password,
        };
        await props.resetPassword(payload).then((res) => {
          toast.success(res.message);
          props.history.push(routes.login);
        });
      } finally {
        setApiCall(false);
      }
    }
  };
  return (
    <Form name="reset-password-form" submitHandler={submitHandler}>
      <div className="form-group">
        <label className="form-label">Password</label>
        <div className="d-flex justify-content-center mb-5">
          {/* <OtpInput
            value={values.otp}
            onChange={otpHandler}
            numInputs={6}
            inputStyle={{
              color: "#2C2C2C",
              fontSize: "24px",
              width: "38px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifySelf: "center",
              textAlign: "center",
              marginRight: "5px",
              background: "transparent",
              borderBottom: "2px solid #848484",
              borderLeft: 0,
              borderRight: 0,
              borderTop: 0,
              outline: "none",
            }}
            focusStyle={{
              borderBottom: "2px solid #3451FF",
            }}
          /> */}
          {submitted && !values.otp && (
            <div className="invalid-feedback">OTP is required</div>
          )}
        </div>
      </div>
      <div className="form-group">
        <label className="form-label">Password</label>
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
      <div className="form-group">
        <label className="form-label">Conform Password</label>
        <input
          type="password"
          placeholder="Conform Password"
          required=""
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handlerChange}
          className={
            "form-control" +
            (submitted && values.password != values.confirmPassword
              ? " is-invalid"
              : "")
          }
        />
        {submitted && values.password != values.confirmPassword && (
          <div className="invalid-feedback">Conform Password is required</div>
        )}
      </div>
      <button
        type="submit"
        className="btn btn-primary transition-3d-hover"
        onClick={submitHandler}
        disabled={apiCall}
      >
        Get Started
      </button>
    </Form>
  );
};

export default ResetForm;
