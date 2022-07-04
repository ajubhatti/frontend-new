import React from "react";
import { connect } from "react-redux";
import Wallet from "../../Pages/Wallet";
import { walletListing } from "../../Redux/Actions/Wallet/wallet";
import {
  getAdminBankList,
  addMoneyInWallet,
} from "../../Redux/Actions/Profile/profile";

const WalletContainer = (props) => <Wallet {...props} />;

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  walletListing,
  getAdminBankList,
  addMoneyInWallet,
})(WalletContainer);
