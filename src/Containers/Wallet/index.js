import React from "react";
import { connect } from "react-redux";
import Wallet from "../../Pages/Wallet";
import { walletListing } from "../../Helper/fetch_helper/wallet";

const WalletContainer = (props) => <Wallet {...props} />;

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  walletListing,
})(WalletContainer);
