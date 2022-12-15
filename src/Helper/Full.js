import React, { useEffect } from "react";
import { Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Route } from "react-router-dom";
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
import { getToken, getUser } from "./LocalStorage";
import Main from "./Main";
import routes from "./routes";
import Faq from "../Pages/FAQ/Faq";
import WalletHistory from "../Pages/Wallet/WalletHistory";
import { useDispatch } from "react-redux";
import { fetchProfile } from "../Pages/Profile/store/actions";
import ForgotTransactionPin from "../Pages/ForgotPin";

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const user = getUser();
  dispatch(fetchProfile({ id: user?.id }));
  const token = getToken();

  console.log({ token });
  if (!token) {
    return <Navigate to={routes.login} replace />;
  }
  return children;
};

const Full = (props) => {
  return (
    <Main {...props}>
      <Routes>
        <Route
          exact
          path={routes.home}
          name="Home"
          element={<HomeContainer />}
        />
        <Route
          exact
          path={routes.reset}
          name="Reset"
          element={<ResetPasswordContainer />}
        />
        <Route
          exact
          path={routes.forgot}
          name="Forgot"
          element={<ForgotPasswordContainer />}
        />
        <Route
          exact
          path={routes.verify}
          name="verify-email"
          element={<verifyEmailContainer />}
        />
        <Route
          exact
          path={routes.login}
          name="Login"
          element={<LoginContainer />}
        />
        <Route
          exact
          path={routes.register}
          name="Register"
          element={<RegisterContainer />}
        />
        <Route
          exact
          // name="profile"
          path={routes.profile}
          element={
            <ProtectedRoute>
              <ProfileContainer />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfileContainer />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          name="account-dashboard"
          path={routes.profileDashboard}
          element={
            <ProtectedRoute>
              <ProfileDashboardContainer />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          name="account-transaction"
          path={routes.profileTransaction}
          element={<ProfileTransactionContainer />}
        />
        <Route
          exact
          name="change-password"
          path={routes.profileChangePassword}
          element={<ChangePasswordContainer />}
        />
        <Route
          exact
          name="change-pin"
          path={routes.profileChangePin}
          element={
            <ProtectedRoute>
              <ChangePinContainer />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          name="change-pin"
          path={routes.profileForgotPin}
          element={
            <ProtectedRoute>
              <ForgotTransactionPin />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path={routes.terms}
          name="terms-condition"
          element={<TermsCondition />}
        />
        <Route
          exact
          path={routes.policy}
          name="privacy-policy"
          element={<PrivacyPolicy />}
        />
        <Route exact path={routes.faq} name="faq" element={<Faq />} />
        <Route
          exact
          path={routes.notFound}
          name="404"
          element={<PageNotFound />}
        />
        <Route
          exact
          path={routes.contactUs}
          name="contact-us"
          element={<ContactContainer />}
        />
        <Route
          exact
          path={routes.aboutUs}
          name="about-us"
          element={<AboutUs />}
        />
        <Route
          exact
          path={routes.refer}
          name="refer"
          element={<ReferContainer />}
        />
        <Route
          exact
          path={routes.service}
          name="service"
          element={<ServiceContainer />}
        />
        {/* <Route
          exact
          path={routes.service2}
          name="service"
          element={<Service2Container />}
        /> */}
        <Route
          exact
          path={routes.support}
          name="support"
          element={<SupportContainer />}
        />
        <Route
          exact
          path={routes.wallet}
          name="wallet"
          element={<WalletContainer />}
        />
        <Route
          exact
          path={routes.profileWalletHistory}
          element={<WalletHistory />}
        />

        <Route exact path={routes.otp} name="otp" element={<OtpContainer />} />
        {/* <Navigate from="/" to={routes.home} /> */}
        <Route path="*" exact element={<PageNotFound />} />
      </Routes>
    </Main>
  );
};

export default Full;
