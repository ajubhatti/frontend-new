import React from "react";
import { connect } from "react-redux";
// import Service from "../../Pages/Service";
import AllSerices from "../../Pages/Service/AllSerices";

// const ServiceContainer = (props) => <Service {...props} />;
const ServiceContainer = (props) => <AllSerices {...props} />;

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(ServiceContainer);
