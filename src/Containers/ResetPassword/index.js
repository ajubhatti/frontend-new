import React from "react";
import { connect } from "react-redux";
import ResetPassword from "../../Pages/ResetPassword";
import { resetPassword } from "../../Helper/fetch_helper/auth";

const ResetPasswordContainer = (props) => <ResetPassword {...props} />;

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { resetPassword })(
  ResetPasswordContainer
);
