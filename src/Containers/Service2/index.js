import React from "react";
import { connect } from "react-redux";
import AllSerices from "../../Pages/Service/AllSerices";

const Service2Container = (props) => <AllSerices {...props} />;

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Service2Container);
