import React from "react";
import { connect } from "react-redux";
import ForgotPassword from "../../Pages/ForgotPassword";
import { forgotPassword } from "../../Redux/Actions/Auth/auth";

const ForgotPasswordContainer = (props) => <ForgotPassword {...props} />;

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { forgotPassword })(
  ForgotPasswordContainer
);
