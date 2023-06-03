import React from "react";
import { connect } from "react-redux";
import Home from "../../Pages/Home";

const HomeContainer = (props) => <Home {...props} />;

const mapStateToProps = (state) => ({
  root: state.root,
});

export default connect(mapStateToProps)(HomeContainer);
