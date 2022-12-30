import React from "react";
import { connect } from "react-redux";
import ForgotPassword from "../../Pages/ForgotPassword";

const ForgotPasswordContainer = (props) => <ForgotPassword {...props} />;

const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps)(ForgotPasswordContainer);
