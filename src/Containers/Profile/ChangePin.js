import React from "react";
import { connect } from "react-redux";
import ChangePin from "../../Pages/Profile/ChangePin";
import {
  getAdminBankList,
  addMoneyInWallet,
} from "../../Helper/fetch_helper/profile";

const ChangePinContainer = (props) => <ChangePin {...props} />;

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { getAdminBankList, addMoneyInWallet })(
  ChangePinContainer
);
