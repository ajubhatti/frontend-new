import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Form from "../../Components/Form";
import { auth } from "../../Helper/fetch_helper/apiList";
import routes from "../../Helper/routes";
import ResetTransactionPin from "./ResetTransactionPin";
import ResetTransactionPinOtpForm from "./ResetTransactionPinOtpForm";

const ForgotPinForm = () => {
  const API_URL = process.env.REACT_APP_FETCH_URL;
  const [apiCall, setApiCall] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isShowPinReset, setIsShowPinReset] = useState(false);
  const [showOtp, setShowOtp] = useState(false);

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
        const res = await axios.post(API_URL + auth.forgotTransactionPin.url, {
          phoneNumber,
        });

        if (res?.data?.status == 200) {
          toast.success(res?.data?.message);
          setShowOtp(true);
        } else {
          toast.success(res?.data?.message);
        }
        setApiCall(false);
      } catch (err) {
        toast.error(err?.response?.data?.message);
        setApiCall(false);
      }
    }
  };

  return (
    <>
      {!isShowPinReset ? (
        <Form name="reset-password-form" className="sl-form">
          <div className="form-group">
            <label className="form-label">Mobile Number</label>
            <input
              disabled={showOtp}
              type="tel"
              name="phoneNumber"
              placeholder="90XXXXXXXX"
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
              <div className="invalid-feedback">Phone number is required</div>
            )}
          </div>
          {showOtp ? (
            <ResetTransactionPinOtpForm
              phoneNumber={phoneNumber}
              setIsOtpVerified={(data) => setIsShowPinReset(data)}
            />
          ) : (
            <div className="row align-items-center mb-5">
              <div className="col-4 col-sm-6">
                <Link to={routes.login} className="small link-muted">
                  Back to sign in
                </Link>
              </div>

              <div className="col-8 col-sm-6 text-right">
                <button
                  type="button"
                  className="btn btn-primary transition-3d-hover"
                  disabled={apiCall}
                  onClick={(e) => submitHandler(e)}
                >
                  Send OTP
                </button>
              </div>
            </div>
          )}
        </Form>
      ) : (
        <ResetTransactionPin phoneNumber={phoneNumber} />
      )}
    </>
  );
};

export default ForgotPinForm;
