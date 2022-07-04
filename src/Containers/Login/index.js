import React from "react";
import { connect } from "react-redux";
import Login from "../../Pages/Login";
import { login } from "../../Redux/Actions/Auth/auth";

const LoginContainer = (props) => <Login {...props} />;

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { login })(LoginContainer);
