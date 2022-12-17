import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import routes from "../../Helper/routes";
import axios from "axios";
import { auth } from "../../Helper/fetch_helper/apiList";
import { toast } from "react-toastify";

const ResetPasswordOtp = ({ phoneNumber }) => {
  const API_URL = process.env.REACT_APP_FETCH_URL;
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [mobileNo, setMobileNo] = useState("");

  useEffect(() => {
    setMobileNo(phoneNumber);
  }, [phoneNumber]);

  const handleChange = (otp) => setOtp(otp);

  const submitHandler = async () => {
    try {
      const subRes = await axios.post(API_URL + auth.verifyPhoneOtp.url, {
        otp: otp,
        mobileNo: mobileNo,
      });
      if (subRes?.data?.status == 200) {
        toast.success(subRes?.data?.message);
        navigate(routes.reset, {
          state: {
            mobileNo: mobileNo,
          },
        });
      } else {
        toast.error(subRes?.message);
      }
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  const handleResendOtp = async () => {
    try {
      const API_URL = process.env.REACT_APP_FETCH_URL;
      const subRes = await axios.post(API_URL + auth.forgotPass.url, {
        phoneNumber: mobileNo,
      });

      if (subRes?.data?.status == 200) {
        toast.success(subRes?.data?.message);
      } else {
        toast.error(subRes?.message);
      }
    } catch (err) {
      console.error(err);

      toast.error(err?.response?.data?.message);
    }
  };

  return (
    <div className="container">
      <div className="w-md-80 w-lg-50 text-center mx-md-auto">
        <div className="mb-5">
          <p>
            Enter the verification code we just send you on your phone number.
          </p>
          <div className="d-flex justify-content-center mb-5">
            <OtpInput
              value={otp}
              onChange={handleChange}
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
            />
          </div>
          <div
            className="btn btn-primary btn-pill transition-3d-hover px-5"
            onClick={(e) => submitHandler()}
          >
            Verify
          </div>
          <div className="mt-2">
            <small onClick={handleResendOtp} className="pointer">
              Resend OTP
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordOtp;
