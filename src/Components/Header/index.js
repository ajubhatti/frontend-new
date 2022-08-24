import React, { useState } from "react";
import { Link } from "react-router-dom";
import routes from "../../Helper/routes";
import Logo from "../../Assets/logo.jpg";
import { getToken } from "../../Helper/LocalStorage";
import { FiChevronDown } from "react-icons/fi";

const Header = () => {
  const [open, setOpen] = useState(false);
  const isUser = getToken();

  const Links = [
    { title: "Home", link: routes.home },
    { title: "Service", link: routes.service },
    { title: "Service2", link: routes.service2 },
    { title: "Support", link: routes.support },
    { title: "About Us", link: routes.aboutUs },
    { title: "Contact US", link: routes.contactUs },
    { title: "Referral", link: routes.refer },
    { title: "Wallet", link: routes.wallet },
    { title: isUser ? "My Profile" : "Login", link: routes.profileDashboard },
  ];
  return (
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
                  {Links.map((item) => {
                    return (
                      <li
                        className="nav-item hs-has-mega-menu u-header__nav-item"
                        key={item.title}
                      >
                        <Link
                          to={item.link}
                          className="nav-link u-header__nav-link u-header__nav-link-toggle"
                        >
                          <span className="me-1"> {item.title}</span>
                          <FiChevronDown className="down-icon" />
                        </Link>
                      </li>
                    );
                  })}
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
