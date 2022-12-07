import React from "react";
import { connect } from "react-redux";
import ProfileTransaction from "../../Pages/Profile/Transaction";

const ProfileTransactionContainer = (props) => (
  <ProfileTransaction {...props} />
);

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(ProfileTransactionContainer);
