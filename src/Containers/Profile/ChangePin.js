import React from "react";
import { connect } from "react-redux";
import ChangePin from "../../Pages/Profile/ChangePin";

const ChangePinContainer = (props) => <ChangePin {...props} />;

const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps)(ChangePinContainer);
