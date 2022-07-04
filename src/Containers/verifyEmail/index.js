import React from "react";
import { connect } from "react-redux";
import VerifyEmail from '../../Pages/VerifyEmail';
import { verify } from "../../Redux/Actions/Auth/auth";

const verifyEmailContainer = (props) => <VerifyEmail {...props} />;

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { verify })(verifyEmailContainer);
