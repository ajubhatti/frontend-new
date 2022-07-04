import React from "react";
import { connect } from "react-redux";
import Support from "../../Pages/Support";
import { supportListing } from "../../Redux/Actions/Support/support";

const SupportContainer = (props) => <Support {...props} />;

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { supportListing })(SupportContainer);
