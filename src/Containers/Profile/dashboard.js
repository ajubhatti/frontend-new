import React from "react";
import { connect } from "react-redux";
import ProfileDashboard from "../../Pages/Profile/Dashboard";

const ProfileDashboardContainer = (props) => <ProfileDashboard {...props} />;

const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps)(ProfileDashboardContainer);
