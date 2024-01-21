import React, { useState } from "react";
import { Link } from "react-router-dom";
import routes from "../../Helper/routes";
import Logo from "../../Assets/logo.jpg";
import { getToken } from "../../Helper/LocalStorage";
import userImg from "../../Assets/user.jpg";
import { BsWallet2 } from "react-icons/bs";
import { useSelector } from "react-redux";
import NewHeader from "./NewHeader";
import DownloadApkButton from "../DownloadApkButton";
import { FaRupeeSign } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);
  const isUser = getToken();
  const { userData } = useSelector((state) => state.profileReducer);

  let username =
    Object.keys(userData).length > 0 && userData?.userName.split(/(\s+)/)[0];

  const Links = [
    // { title: "Home", link: routes.home },
    { title: "Support", link: routes.support },
    { title: "About Us", link: routes.aboutUs },
    { title: "Contact US", link: routes.contactUs },
    { title: "Referral", link: routes.refer },
    // { title: "Wallet", link: routes.wallet },
    isUser
      ? {
          title: username || "john",
          link: routes.profileDashboard,
        }
      : {
          title: "Login",
          link: routes.login,
        },
  ];

  const subLinks = [
    { title: "Mobile", link: "#" },
    { title: "DTH", link: "#" },
    { title: "Electricity", link: "#" },
  ];
  const profileLink = [
    { title: "View profile", link: routes.editProfile },
    { title: "Wallet History", link: routes.profileWalletHistory },
    { title: "Activity", link: routes.profileTransaction },
    { title: "Recharges", link: routes.rechargeList },
    { title: "Change Transaction Pin", link: routes.profileChangePin },
    { title: "Change password", link: routes.profileChangePassword },
    { title: "Logout", link: routes.login },
  ];

  return (
    // <NewHeader />
    <header className="u-header">
      <div className="u-header__section">
        <div>
          <nav className="navbar navbar-expand-md u-header__navbar u-header__navbar--no-space hs-menu-initialized hs-menu-horizontal">
            <div className="container-fluid">
              <Link
                to={routes.home}
                className="navbar-brand u-header__navbar-brand u-header__navbar-brand-center"
              >
                <img src={Logo} alt="" />
              </Link>
              <button
                className={`navbar-toggler btn u-hamburger ${
                  open ? "" : "collapsed"
                }`}
                onClick={() => setOpen(!open)}
              >
                <span className="u-hamburger__box">
                  <span className="u-hamburger__inner"></span>
                </span>
              </button>
              <div
                className={`navbar-collapse u-header__navbar-collapse ${
                  open ? "d-block" : "d-none"
                }`}
              >
                <ul className="navbar-nav u-header__navbar-nav">
                  <li className="nav-item hs-has-mega-menu u-header__nav-item">
                    <Link
                      to="/"
                      className="nav-link u-header__nav-link u-header__nav-link-toggle"
                    >
                      <span className="me-1">Home</span>
                    </Link>
                  </li>
                  {/* <li className="nav-item hs-has-mega-menu u-header__nav-item dropdown">
                    <Link
                      className="nav-link  dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      to="#"
                    >
                      Service
                    </Link>
                    <ul className="dropdown-menu">
                      {subLinks?.map((items) => (
                        <li key={items?.title}>
                          <Link className="dropdown-item" to={items?.link}>
                            <span>{items?.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li> */}
                  {Links.map((item) => (
                    <li
                      className="nav-item hs-has-mega-menu u-header__nav-item"
                      key={item?.title}
                    >
                      <Link
                        to={item?.link}
                        key={item?.title}
                        className="nav-link u-header__nav-link u-header__nav-link-toggle"
                      >
                        <span className="me-1"> {item?.title}</span>
                      </Link>
                    </li>
                  ))}
                  <li
                    className="nav-item hs-has-mega-menu u-header__nav-item"
                    key={"Download"}
                  >
                    <DownloadApkButton />
                  </li>

                  {isUser && (
                    <>
                      <li className="nav-item hs-has-mega-menu u-header__nav-item">
                        <div className="wallet-card">
                          <span>
                            <FaRupeeSign />
                            {userData?.walletBalance || 0}
                          </span>
                          <BsWallet2 className="wallet-icon" />
                        </div>
                      </li>

                      <li className="nav-item dropdown">
                        <Link
                          className="profile-toggle nav-link dropdown-toggle"
                          to="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {/* <span className="user-title">Hello</span> */}
                          <img src={userImg} alt="userImg" />
                        </Link>
                        <ul className="dropdown-menu">
                          {profileLink.map((item) => (
                            <li key={item?.title}>
                              <Link className="dropdown-item" to={item?.link}>
                                <span>{item?.title}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
