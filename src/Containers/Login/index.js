import React from "react";
import { connect } from "react-redux";
import Login from "../../Pages/Login";
import { login } from "../../Helper/fetch_helper/auth";

const LoginContainer = (props) => <Login {...props} />;

const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps, { login })(LoginContainer);
