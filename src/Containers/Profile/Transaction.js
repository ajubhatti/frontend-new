import React from "react";
import { connect } from "react-redux";
import ProfileTransaction from "../../Pages/Profile/Transaction";
import {
  getAdminBankList,
  addMoneyInWallet,
} from "../../Redux/Actions/Profile/profile";

const ProfileTransactionContainer = (props) => (
  <ProfileTransaction {...props} />
);

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { getAdminBankList, addMoneyInWallet })(
  ProfileTransactionContainer
);
