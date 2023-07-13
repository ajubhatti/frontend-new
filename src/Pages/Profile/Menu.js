import React, { useState } from "react";
import { Link } from "react-router-dom";
import LocalStorage, { getUser } from "../../Helper/LocalStorage";
import routes from "../../Helper/routes";
import ProfileImg from "../../Assets/user.jpg";
import FormModal from "./Deposits/FormModal";
import { Plus } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const Menu = (props) => {
  const [open, setOpen] = useState(false);
  const userDetails = getUser();

  const buttonHandler = () => {
    setOpen(true);
  };

  const modalHide = () => {
    setOpen(false);
  };

  const { user } = useSelector((state) => state.authReducer);

  return (
    <>
      <div className="bg-primary profile pb-4">
        <div className="container space-bottom-1 space-bottom-lg-0">
          <div className="d-lg-flex justify-content-lg-between align-items-lg-center">
            <div className="u-header u-header-left-aligned-nav u-header--bg-transparent-lg u-header--white-nav-links z-index-4">
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
                      <h3 className="h3 text-white font-weight-medium mb-1 text-capitalize">
                        {userDetails?.userName || "Gest"}
                      </h3>
                      <span className="d-block text-white">
                        {userDetails?.email}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <button
                className="btn btn-sm btn-primary add-money-btn"
                onClick={buttonHandler}
              >
                <Plus />
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
