import React from "react";
import { connect } from "react-redux";
import Support from "../../Pages/Support";
import { supportListing } from "../../Helper/fetch_helper/support";

const SupportContainer = (props) => <Support {...props} />;

const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps, { supportListing })(SupportContainer);
