import React, { useState } from "react";
import Form from "../../Components/Form";
import Menu from "./Menu";

const ChangePassword = (props) => {
  const [apiCall, setApiCall] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState({
    currentPassword: "",
    newPassword: "",
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
    if (values.currentPassword !== "" && values.newPassword !== "") {
      try {
        // await props.changePassword(values).then((res) => {
        //   toast.success(res.message);
        // });
      } finally {
        setApiCall(false);
      }
    }
  };

  return (
    <div className="bg-light">
      <Menu />
      <div className="container space-2">
        <Form name="login-form" submitHandler={submitHandler}>
          <div className="js-form-message mb-6">
            <label className="form-label"> Current password </label>

            <div className="form-group">
              <input
                type="password"
                placeholder="Enter your current password"
                required
                name="currentPassword"
                value={values.currentPassword}
                onChange={handlerChange}
                className={
                  "form-control" +
                  (submitted && !values.currentPassword ? " is-invalid" : "")
                }
              />
              {submitted && !values.fullName && (
                <div className="invalid-feedback">Please enter password</div>
              )}
            </div>
          </div>
          <div className="mb-6">
            <div className="js-form-message">
              <label className="form-label"> New password </label>

              <div className="form-group">
                <input
                  type="password"
                  placeholder="Enter your password"
                  required
                  name="newPassword"
                  value={values.newPassword}
                  onChange={handlerChange}
                  className={
                    "form-control" +
                    (submitted && !values.newPassword ? " is-invalid" : "")
                  }
                />
                {submitted && !values.fullName && (
                  <div className="invalid-feedback">Please enter password</div>
                )}
              </div>
            </div>
          </div>
          <div className="js-form-message mb-6">
            <label className="form-label"> Confirm password </label>

            <div className="form-group">
              <input
                type="password"
                placeholder="Confirm your password"
                required
                name="confirmNewPassword"
                value={values.confirmNewPassword}
                onChange={handlerChange}
                className={
                  "form-control" +
                  (submitted && !values.confirmNewPassword ? " is-invalid" : "")
                }
              />
              {submitted && !values.fullName && (
                <div className="invalid-feedback">
                  Please enter conform password
                </div>
              )}
            </div>
          </div>
          <div className="w-lg-50">
            <button
              type="submit"
              className="btn btn-sm btn-primary transition-3d-hover mr-1"
            >
              Save Password
            </button>
            <button
              type="submit"
              className="btn btn-sm btn-soft-secondary transition-3d-hover"
            >
              Cancel
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ChangePassword;
