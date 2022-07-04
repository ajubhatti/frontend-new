import React, { useState } from "react";
import { Link } from "react-router-dom";
import LocalStorage, { getUser } from "../../Helper/LocalStorage";
import routes from "../../Helper/routes";
import ProfileImg from "../../Assets/profile.png";
import FormModal from "./Deposits/FormModal";
import { Plus } from "react-bootstrap-icons";

const Menu = (props) => {
  const [open, setOpen] = useState(false);
  const userDetails = getUser();

  const logout = async () => {
    LocalStorage.clean();
    window.location.reload();
  };

  const buttonHandler = () => {
    setOpen(true);
  };

  const modalHide = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="bg-primary">
        <div className="container space-top-1 pb-3">
          <div className="row">
            <div className="col-lg-7 order-lg-1">
              <div className="media d-block d-sm-flex align-items-sm-center">
                <div className="u-lg-avatar position-relative mb-3 mb-sm-0 mr-3">
                  <img
                    className="img-fluid rounded-circle"
                    src={ProfileImg}
                    alt="user profile"
                  />
                  <span className="badge badge-md badge-outline-success badge-pos badge-pos--bottom-right rounded-circle">
                    <span className="fas fa-check"></span>
                  </span>
                </div>
                <div className="media-body">
                  <h1 className="h3 text-white font-weight-medium mb-1">
                    {userDetails?.userName || "Gest"}
                  </h1>
                  <span className="d-block text-white">
                    {userDetails?.email}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container space-bottom-1 space-bottom-lg-0">
          <div className="d-lg-flex justify-content-lg-between align-items-lg-center">
            <div className="u-header u-header-left-aligned-nav u-header--bg-transparent-lg u-header--white-nav-links z-index-4">
              <div className="u-header__section bg-transparent">
                <nav className="js-breadcrumb-menu navbar navbar-expand-lg u-header__navbar u-header__navbar--no-space hs-menu-initialized hs-menu-horizontal">
                  <div
                    id="breadcrumbNavBar"
                    className="collapse navbar-collapse u-header__navbar-collapse"
                  >
                    <ul className="navbar-nav u-header__navbar-nav">
                      <li className="nav-item u-header__nav-item">
                        <Link
                          to={routes.profileDashboard}
                          className="nav-link u-header__nav-link u-header__nav-link-toggle"
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li className="nav-item u-header__nav-item">
                        <Link
                          to={routes.profileDashboard}
                          className="nav-link u-header__nav-link u-header__nav-link-toggle"
                        >
                          Edit profile
                        </Link>
                      </li>
                      <li className="nav-item u-header__nav-item">
                        <Link
                          to={routes.profileChangePassword}
                          className="nav-link u-header__nav-link u-header__nav-link-toggle"
                        >
                          Change password
                        </Link>
                      </li>
                      <li className="nav-item u-header__nav-item">
                        <Link
                          to={routes.profileChangePin}
                          className="nav-link u-header__nav-link u-header__nav-link-toggle"
                        >
                          Change Transaction pin
                        </Link>
                      </li>
                      <li className="nav-item u-header__nav-item">
                        <Link
                          to={routes.profileTransaction}
                          className="nav-link u-header__nav-link u-header__nav-link-toggle"
                        >
                          Activity
                        </Link>
                      </li>
                      <li className="nav-item u-header__nav-item">
                        <span
                          className="nav-link u-header__nav-link u-header__nav-link-toggle pointer"
                          onClick={logout}
                        >
                          Logout
                        </span>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>

            <div className="ml-lg-auto">
              <button
                className="btn btn-sm btn-soft-white text-nowrap transition-3d-hover d-flex align-items-center justify-content-center"
                onClick={buttonHandler}
              >
                <Plus className="mr-1" style={{ fontSize: "22px" }} />
                Add Money
              </button>
            </div>
          </div>
        </div>
      </div>
      {open && <FormModal show={open} onHide={modalHide} {...props} />}
    </>
  );
};

export default Menu;
