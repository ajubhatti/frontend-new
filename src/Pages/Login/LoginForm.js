import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import routes from "../../Helper/routes";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const initialValues = {
  mobileNo: "",
  password: "",
};
const validationSchema = Yup.object().shape({
  mobileNo: Yup.string()
    .min(10, "Mobile number is must be 10 digit")
    .max(10, "Mobile number is must be 10 digit")
    .required("Phone number is required"),
  password: Yup.string()
    .min(4, "Password is Too Short!")
    .max(20, "Password is Too Long!")
    .required("Password is required"),
});

const LoginForm = (props) => {
  const navigate = useNavigate();
  const [apiCall, setApiCall] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (e) => {
    setApiCall(true);
    setSubmitted(true);
    try {
      await props
        .login({
          mobileNo: formik.values.mobileNo,
          password: formik.values.password,
        })
        .then((res) => {
          if (res.status == 200) {
            window.location.href = "/";
          }
          if (res.status == 203) {
            toast.warning(res.message);
            navigate(routes.otp, {
              state: {
                mobileNo: formik.values.mobileNo,
              },
            });
          }
        });
    } catch (err) {
      setApiCall(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit} name="login-form">
      <div className="form-group">
        <label className="form-label">Mobile Number</label>
        <input
          type="tel"
          name="mobileNo"
          placeholder="90XXXXXXXX"
          value={formik.values.mobileNo}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            "form-control" +
            (formik.errors.mobileNo && formik.touched.mobileNo
              ? " is-invalid"
              : "")
          }
        />
        {formik.errors.mobileNo && formik.touched.mobileNo && (
          <div className="invalid-feedback">{formik.errors.mobileNo}</div>
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
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            "form-control" +
            (formik.errors.password && formik.touched.password
              ? " is-invalid"
              : "")
          }
        />
        {formik.errors.password && formik.touched.password && (
          <div className="invalid-feedback">{formik.errors.password}</div>
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
            type="submit"
            className="btn btn-primary transition-3d-hover"
            disabled={apiCall}
          >
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
