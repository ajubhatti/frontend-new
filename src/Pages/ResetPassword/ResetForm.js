import React, { useEffect, useState } from "react";
import Form from "../../Components/Form";
import routes from "../../Helper/routes";
import { getQueryData } from "../../Helper";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import { auth } from "../../Helper/fetch_helper/apiList";
import axios from "axios";

const ResetForm = (props) => {
  const API_URL = process.env.REACT_APP_FETCH_URL;
  const navigate = useNavigate();
  const location = useLocation();
  const [apiCall, setApiCall] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState({
    otp: "",
    mobileNo: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const getPhone = location?.state?.mobileNo;
    if (getPhone) {
      setValues((prevState) => ({
        ...prevState,
        mobileNo: getPhone,
      }));
    }
  }, [location?.state?.mobileNo, props]);

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
    if (values.password !== "" && values.confirmPassword !== "") {
      try {
        const payload = {
          phoneNumber: values.mobileNo,
          password: values.password,
        };
        console.log({ payload });

        let res = await axios.post(API_URL + auth.resetPass.url, payload);

        console.log({ res });
        if (res?.data?.status == 200) {
          toast.success(res.message);

          navigate(routes.login);
        }
        // await resetPassword(payload).then((res) => {
        //   navigate(routes.login);
        //   // props.history.push(routes.login);
        // });
      } catch (err) {
        console.log(err);
        toast.error(err);
        setApiCall(false);
      }
    }
  };
  return (
    <Form name="reset-password-form">
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
        <label className="form-label">Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm Password"
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
          <div className="invalid-feedback">Confirm Password is required</div>
        )}
      </div>
      <button
        type="button"
        className="btn btn-primary transition-3d-hover"
        onClick={(e) => submitHandler(e)}
        disabled={apiCall}
      >
        Get Started
      </button>
    </Form>
  );
};

export default ResetForm;
