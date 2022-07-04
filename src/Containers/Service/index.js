import React from "react";
import { connect } from "react-redux";
import Service from "../../Pages/Service";
import { serviceListing } from "../../Redux/Actions/Service/service";

const ServiceContainer = (props) => <Service {...props} />;

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { serviceListing })(ServiceContainer);
