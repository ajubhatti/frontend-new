import React from "react";
import { connect } from "react-redux";
import ContactUs from "../../Pages/ContactUs";
import { sendContactDetails } from "../../Redux/Actions/ContactUs/contact";

const ContactContainer = (props) => <ContactUs {...props} />;

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { sendContactDetails })(
  ContactContainer
);
