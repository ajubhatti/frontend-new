import React from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import { getToken, getUser } from "./LocalStorage";
import { useDispatch } from "react-redux";
import { fetchProfile } from "../Pages/Profile/store/actions";
import routes from "./routes";

const HomeContainer = React.lazy(() => import("../Containers/Home"));
const LoginContainer = React.lazy(() => import("../Containers/Login"));
const ProfileContainer = React.lazy(() => import("../Containers/Profile"));
const ForgotPasswordContainer = React.lazy(() =>
  import("../Containers/ForgotPassword")
);
const ProfileDashboardContainer = React.lazy(() =>
  import("../Containers/Profile/dashboard")
);
// const ProfileTransactionContainer = React.lazy(() =>
//   import("../Containers/Profile/Transaction")
// );
const ChangePasswordContainer = React.lazy(() =>
  import("../Containers/Profile/ChangePassword")
);
const ChangePinContainer = React.lazy(() =>
  import("../Containers/Profile/ChangePin")
);
const RegisterContainer = React.lazy(() => import("../Containers/Register"));
const ResetPasswordContainer = React.lazy(() =>
  import("../Containers/ResetPassword")
);
const ReferContainer = React.lazy(() => import("../Containers/Refer"));
const SupportContainer = React.lazy(() => import("../Containers/Support"));
const WalletContainer = React.lazy(() => import("../Containers/Wallet"));
const ContactContainer = React.lazy(() => import("../Containers/ContactUs"));
const OtpContainer = React.lazy(() => import("../Containers/Otp"));
const AboutUs = React.lazy(() => import("../Pages/AboutUs"));
const PageNotFound = React.lazy(() => import("../Pages/PageNotFound"));
const PrivacyPolicy = React.lazy(() => import("../Pages/PrivacyPolicy"));
const TermsCondition = React.lazy(() => import("../Pages/TermsCondition"));
const EditProfile = React.lazy(() => import("../Pages/Profile/EditProfile"));
const TransactionHistory = React.lazy(() =>
  import("../Pages/Transactions/TransactionHistory")
);
const ForgotTransactionPin = React.lazy(() => import("../Pages/ForgotPin"));
const Main = React.lazy(() => import("./Main"));
const Faq = React.lazy(() => import("../Pages/FAQ/Faq"));
const WalletHistory = React.lazy(() => import("../Pages/Wallet/WalletHistory"));
const RechargeList = React.lazy(() =>
  import("../Pages/Recharges/RechargeHistory")
);

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
          name="account-dashboard"
          path={routes.editProfile}
          element={
            <ProtectedRoute>
              <EditProfile />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          name="account-transaction"
          path={routes.profileTransaction}
          element={<TransactionHistory />}
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
          element={
            <ProtectedRoute>
              <ReferContainer />
            </ProtectedRoute>
          }
        />

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
          element={
            <ProtectedRoute>
              <WalletContainer />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path={routes.profileWalletHistory}
          element={
            <ProtectedRoute>
              <WalletHistory />
            </ProtectedRoute>
          }
        />

        <Route
          exact
          path={routes.rechargeList}
          element={
            <ProtectedRoute>
              <RechargeList />
            </ProtectedRoute>
          }
        />

        <Route exact path={routes.otp} name="otp" element={<OtpContainer />} />
        {/* <Navigate from="/" to={routes.home} /> */}
        <Route path="*" exact element={<PageNotFound />} />
      </Routes>
    </Main>
  );
};

export default Full;
