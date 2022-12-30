import React from "react";
import { connect } from "react-redux";
import Register from "../../Pages/Register";
import {
  register,
  getRefererUser,
  stateListing,
} from "../../Helper/fetch_helper/auth";

const RegisterContainer = (props) => <Register {...props} />;

const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps, {
  register,
  getRefererUser,
  stateListing,
})(RegisterContainer);
