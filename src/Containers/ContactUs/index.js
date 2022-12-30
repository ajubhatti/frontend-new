import React from "react";
import { connect } from "react-redux";
import ContactUs from "../../Pages/ContactUs";

const ContactContainer = (props) => <ContactUs {...props} />;

const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps)(ContactContainer);
