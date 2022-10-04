import React from "react";
import { connect } from "react-redux";
import Otp from "../../Pages/OTP";
import { verifyOtp, resendOtp } from "../../Helper/fetch_helper/otp";

const OtpContainer = (props) => <Otp {...props} />;

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { verifyOtp, resendOtp })(OtpContainer);
