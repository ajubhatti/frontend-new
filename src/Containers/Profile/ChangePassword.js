import React from "react";
import { connect } from "react-redux";
import ChangePassword from "../../Pages/Profile/ChangePassword";

const ChangePasswordContainer = (props) => <ChangePassword {...props} />;

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(ChangePasswordContainer);
