import React, { useEffect, useState } from "react";
// import OtpInput from "react-otp-input";
import routes from "../../Helper/routes";

const Otp = (props) => {
  const [otp, setOtp] = useState("");
  const [mobileNo, setMobileNo] = useState("");

  useEffect(() => {
    const getPhone = props.history.location.state.mobileNo;
    setMobileNo(getPhone);
  }, [props]);

  const handleChange = (otp) => setOtp(otp);

  const submitHandler = async () => {
    await props.verifyOtp({ otp: otp, mobileNo: mobileNo }).then((res) => {
      if (res.data) {
        props.history.push(routes.home);
        window.location.reload();
      }
    });
  };

  const resendOtp = () => {
    props.resendOtp({ mobileNo: mobileNo });
  };

  return (
    <div className="container space-2 space-lg-3">
      <div className="w-md-80 w-lg-50 text-center mx-md-auto">
        <div className="mb-5">
          <h1 className="h3 font-weight-medium">Access Code</h1>
          <p>
            Enter the verification code we just send you on your phone number.
          </p>
          <div className="d-flex justify-content-center mb-5">
            {/* <OtpInput
              value={otp}
              onChange={handleChange}
              numInputs={6}
              //   separator={<span>-</span>}
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
          </div>
          <div
            className="btn btn-primary btn-pill transition-3d-hover px-5"
            onClick={submitHandler}
          >
            Continue
          </div>
          <div>
            <small onClick={resendOtp} className="pointer">
              Resend OTP
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
