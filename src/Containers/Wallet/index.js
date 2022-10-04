import React from "react";
import { connect } from "react-redux";
import Wallet from "../../Pages/Wallet";
import { walletListing } from "../../Helper/fetch_helper/wallet";
import {
  getAdminBankList,
  addMoneyInWallet,
} from "../../Helper/fetch_helper/profile";

const WalletContainer = (props) => <Wallet {...props} />;

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  walletListing,
  getAdminBankList,
  addMoneyInWallet,
})(WalletContainer);
