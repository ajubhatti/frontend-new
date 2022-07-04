import React from "react";
import { connect } from "react-redux";
import ProfileDashboard from "../../Pages/Profile/Dashboard";
import {
  getAdminBankList,
  addMoneyInWallet,
} from "../../Redux/Actions/Profile/profile";

const ProfileDashboardContainer = (props) => <ProfileDashboard {...props} />;

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { getAdminBankList, addMoneyInWallet })(
  ProfileDashboardContainer
);
