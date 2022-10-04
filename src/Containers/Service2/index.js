import React from "react";
import { connect } from "react-redux";
import AllSerices from "../../Pages/Service/AllSerices";
import {
  serviceListing,
  getServiceAmbicaAll,
  getServiceProviderByType,
  ambikaRechargeApi,
  getPlanDetails,
} from "../../Helper/fetch_helper/service";

const Service2Container = (props) => <AllSerices {...props} />;

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  serviceListing,
  getServiceAmbicaAll,
  getServiceProviderByType,
  ambikaRechargeApi,
  getPlanDetails,
})(Service2Container);
