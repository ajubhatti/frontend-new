import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Form from "../../Components/Form";
import { getUser } from "../../Helper/LocalStorage";
import Menu from "./Menu";
import { updateUserPassword } from "./store/actions";

const getUserData = getUser();

const ChangePassword = (props) => {
  const dispatch = useDispatch();
  const [apiCall, setApiCall] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handlerChange = (event) => {
    const { name, value } = event.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    if (values.confirmNewPassword === values.newPassword) {
      e.preventDefault();
      setApiCall(true);
      setSubmitted(true);
      if (values.currentPassword !== "" && values.newPassword !== "") {
        setErrorMessage();
        try {
          setLoading(true);
          dispatch(
            updateUserPassword(
              {
                currentPassword: values.currentPassword,
                newPassword: values.newPassword,
                confirmNewPassword: values.confirmNewPassword,
                userId: getUserData.id,
              },
              (status) => {
                if (status) {
                  setValues({
                    currentPassword: "",
                    newPassword: "",
                    confirmNewPassword: "",
                  });
                  setLoading(false);
                }
              }
            )
          );
        } catch (err) {
          // res
          //   .status(400)
          //   .json({ status: 400, message: "Something went wrong", data: err });
        } finally {
          setSubmitted(false);
          setLoading(false);
          setApiCall(false);
        }
      }
    } else {
      setSubmitted(false);
      setErrorMessage("new password and confirm password is not match");
    }
  };

  return (
    <div className="bg-light">
      <Menu />

        <div className="change-password-pages">
        <div className="container">
      <div className="row">
       <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <Form name="login-form">
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
                      (submitted && !values.currentPassword
                        ? " is-invalid"
                        : "")
                    }
                  />
                  {submitted && !values.fullName && (
                    <div className="invalid-feedback">
                      Please enter password
                    </div>
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
                        (submitted && !values.newPassword
                          ? " is-invalid"
                          : errorMessage
                          ? " is-invalid"
                          : "")
                      }
                    />
                    {submitted && !values.fullName && (
                      <div className="invalid-feedback">
                        Please enter password
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="js-form-message mb-3">
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
                      (submitted && !values.confirmNewPassword
                        ? " is-invalid"
                        : errorMessage
                        ? " is-invalid"
                        : "")
                    }
                  />
                  {submitted && !values.fullName && (
                    <div className="invalid-feedback">
                      Please enter confirm password
                    </div>
                  )}
                  {errorMessage && (
                    <div className="invalid-feedback">{errorMessage}</div>
                  )}
                </div>
              </div>

              <div className="change-password-btn">
                <button
                  type="button"
                  onClick={(e) => submitHandler(e)}
                  className={`btn btn-sm btn-primary transition-3d-hover mr-2 ${
                    loading && "disabled"
                  }`}
                >
                  {loading ? "Saving.." : "Save Password"}
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-soft-secondary transition-3d-hover"
                >
                  Cancel
                </button>
              </div>
            </Form>
          </div>
        </div>
       </div>
      </div>
      </div>
        </div>
    </div>
  );
};

export default ChangePassword;
