import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import ForgotPasswordContainer from "../Containers/ForgotPassword";
import HomeContainer from "../Containers/Home";
import LoginContainer from "../Containers/Login";
import ProfileContainer from "../Containers/Profile";
import ProfileDashboardContainer from "../Containers/Profile/dashboard";
import ProfileTransactionContainer from "../Containers/Profile/Transaction";
import ChangePasswordContainer from "../Containers/Profile/ChangePassword";
import ChangePinContainer from "../Containers/Profile/ChangePin";
import RegisterContainer from "../Containers/Register";
import ResetPasswordContainer from "../Containers/ResetPassword";
import verifyEmailContainer from "../Containers/verifyEmail";
import ReferContainer from "../Containers/Refer";
import ServiceContainer from "../Containers/Service";
import SupportContainer from "../Containers/Support";
import WalletContainer from "../Containers/Wallet";
import ContactContainer from "../Containers/ContactUs";
import OtpContainer from "../Containers/Otp";
import AboutUs from "../Pages/AboutUs";
import PageNotFound from "../Pages/PageNotFound";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import TermsCondition from "../Pages/TermsCondition";
import { getToken } from "./LocalStorage";
import Main from "./Main";
import routes from "./routes";
import Faq from "../Pages/FAQ/Faq";

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      getToken() ? <Redirect to={routes.home} /> : <Component {...props} />
    }
  />
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      getToken() ? <Component {...props} /> : <Redirect to={routes.login} />
    }
  />
);

const Full = (props) => {
  return (
    <Main {...props}>
      <Switch>
        <Route exact path={routes.home} name="Home" component={HomeContainer} />
        <Route
          exact
          path={routes.reset}
          name="Reset"
          component={ResetPasswordContainer}
        />
        <Route
          exact
          path={routes.forgot}
          name="Forgot"
          component={ForgotPasswordContainer}
        />
        <Route
          exact
          path={routes.verify}
          name="verify-email"
          component={verifyEmailContainer}
        />
        <PublicRoute
          exact
          path={routes.login}
          name="Login"
          component={LoginContainer}
        />
        <PublicRoute
          exact
          path={routes.register}
          name="Register"
          component={RegisterContainer}
        />
        <PrivateRoute
          exact
          name="profile"
          path={routes.profile}
          component={ProfileContainer}
        />
        <PrivateRoute
          exact
          name="account-dashboard"
          path={routes.profileDashboard}
          component={ProfileDashboardContainer}
        />
        <PrivateRoute
          exact
          name="account-transaction"
          path={routes.profileTransaction}
          component={ProfileTransactionContainer}
        />
        <PrivateRoute
          exact
          name="change-password"
          path={routes.profileChangePassword}
          component={ChangePasswordContainer}
        />
        <PrivateRoute
          exact
          name="change-pin"
          path={routes.profileChangePin}
          component={ChangePinContainer}
        />
        <Route
          exact
          path={routes.terms}
          name="terms-condition"
          component={TermsCondition}
        />
        <Route
          exact
          path={routes.policy}
          name="privacy-policy"
          component={PrivacyPolicy}
        />
        <Route exact path={routes.faq} name="faq" component={Faq} />
        <Route
          exact
          path={routes.notFound}
          name="404"
          component={PageNotFound}
        />
        <Route
          exact
          path={routes.contactUs}
          name="contact-us"
          component={ContactContainer}
        />
        <Route
          exact
          path={routes.aboutUs}
          name="about-us"
          component={AboutUs}
        />
        <Route
          exact
          path={routes.refer}
          name="refer"
          component={ReferContainer}
        />
        <Route
          exact
          path={routes.service}
          name="service"
          component={ServiceContainer}
        />
        <Route
          exact
          path={routes.support}
          name="support"
          component={SupportContainer}
        />
        <Route
          exact
          path={routes.wallet}
          name="wallet"
          component={WalletContainer}
        />
        <Route exact path={routes.otp} name="otp" component={OtpContainer} />
        {/* <Redirect from="/" to={routes.home} /> */}
        <Route path="*" exact component={PageNotFound} />
      </Switch>
    </Main>
  );
};

export default Full;
