import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Form from "../../Components/Form";
import routes from "../../Helper/routes";

const ForgotForm = (props) => {
  const [apiCall, setApiCall] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlerChange = (event) => {
    const { value } = event.target;
    setPhoneNumber(value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (phoneNumber !== "") {
      setApiCall(true);
      try {
        await props.forgotPassword({ phoneNumber: phoneNumber }).then((res) => {
          toast.success(res.message);
          props.history.push({
            pathname: routes.reset,
            state: {
              mobileNo: phoneNumber,
            },
          });
        });
      } finally {
        setApiCall(false);
      }
    }
  };
  return (
    <Form
      name="reset-password-form"
      submitHandler={submitHandler}
      className="sl-form"
    >
      <div className="form-group">
        <label className="form-label">Phone Number</label>
        <input
          type="tel"
          name="phoneNumber"
          placeholder="12345678"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          required
          value={phoneNumber}
          onChange={handlerChange}
          className={
            "form-control" +
            (submitted && !phoneNumber ? " is-invalid" : "")
          }
        />
        {submitted && !phoneNumber && (
          <div className="invalid-feedback">Phone Number is required</div>
        )}
      </div>
      <div className="row align-items-center mb-5">
        <div className="col-4 col-sm-6">
          <Link to={routes.login} className="small link-muted">
            Back to sign in
          </Link>
        </div>

        <div className="col-8 col-sm-6 text-right">
          <button
            type="submit"
            className="btn btn-primary transition-3d-hover"
            onClick={submitHandler}
            disabled={apiCall}
          >
            Request Reset Link
          </button>
        </div>
      </div>
    </Form>
  );
};

export default ForgotForm;
