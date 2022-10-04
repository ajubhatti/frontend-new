import React from "react";
import { connect } from "react-redux";
import Refer from "../../Pages/Refer";
import { generateReferCode } from "../../Helper/fetch_helper/refer";

const ReferContainer = (props) => <Refer {...props} />;

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { generateReferCode })(ReferContainer);
