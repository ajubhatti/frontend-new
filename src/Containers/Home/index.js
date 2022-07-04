import React from "react";
import { connect } from "react-redux";
import Home from "../../Pages/Home";
import { getBanner, getTicker } from "../../Redux/Actions/Home/home";

const HomeContainer = (props) => <Home {...props} />;

const mapStateToProps = (state) => ({
  root: state.root,
});

export default connect(mapStateToProps, { getBanner, getTicker })(
  HomeContainer
);
