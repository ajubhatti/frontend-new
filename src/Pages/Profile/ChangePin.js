import React, { useState } from "react";
import Form from "../../Components/Form";
import Menu from "./Menu";

const ChangePin = (props) => {
  const [apiCall, setApiCall] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState({
    currentPin: "",
    newPin: "",
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
    if (values.currentPin !== "" && values.newPin !== "") {
      try {
        // await props.changePin(values).then((res) => {
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
            <label className="form-label"> Current pin </label>

            <div className="form-group">
              <input
                type="password"
                placeholder="Enter your current pin"
                required
                name="currentPin"
                value={values.currentPin}
                onChange={handlerChange}
                className={
                  "form-control" +
                  (submitted && !values.currentPin ? " is-invalid" : "")
                }
              />
              {submitted && !values.fullName && (
                <div className="invalid-feedback">Please enter pin</div>
              )}
            </div>
          </div>
          <div className="mb-6">
            <div className="js-form-message">
              <label className="form-label"> New pin </label>

              <div className="form-group">
                <input
                  type="password"
                  placeholder="Enter your pin"
                  required
                  name="newPin"
                  value={values.newPin}
                  onChange={handlerChange}
                  className={
                    "form-control" +
                    (submitted && !values.newPin ? " is-invalid" : "")
                  }
                />
                {submitted && !values.fullName && (
                  <div className="invalid-feedback">Please enter pin</div>
                )}
              </div>
            </div>
          </div>
          <div className="js-form-message mb-6">
            <label className="form-label"> Confirm pin </label>

            <div className="form-group">
              <input
                type="password"
                placeholder="Confirm your pin"
                required
                name="confirmNewPin"
                value={values.confirmNewPin}
                onChange={handlerChange}
                className={
                  "form-control" +
                  (submitted && !values.confirmNewPin ? " is-invalid" : "")
                }
              />
              {submitted && !values.fullName && (
                <div className="invalid-feedback">
                  Please enter conform pin
                </div>
              )}
            </div>
          </div>
          <div className="w-lg-50">
            <button
              type="submit"
              className="btn btn-sm btn-primary transition-3d-hover mr-1"
            >
              Save Transaction Pin
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

export default ChangePin;
