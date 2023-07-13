import React, { useState } from "react";
import Menu from "./Menu";
import { useSelector } from "react-redux";
import phoneFormatter from "phone-formatter";
import EditProfileModal from "./EditProfileModal";
// import {FaRegEdit} from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import { Coin, CurrencyDollar, CurrencyExchange } from "react-bootstrap-icons";
// import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../Helper/LocalStorage";
import Activity from "./Activity";
import Balance from "./Balance";
import Deposits from "./Deposite";
// import Menu from "./Menu";

const EditProfile = (props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { userData } = useSelector((state) => state.profileReducer);
  const isOpen = () => {
    setIsOpenModal(true);
  };
  const isClose = () => {
    setIsOpenModal((prev) => !prev);
  };
  return (
    <>
      <Menu {...props} />
      <div className="edit-pages">
        <div className="container">
          <div className="row flex-column align-items-center">
            <div className="col-md-6">
              <section className="dashboard-section bg-light">
                <div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="profile-detCard">
                        <div className="card ">
                          <div className="card-body p-4">
                            <div className="d-flex justify-content-between align-items-center profile-inner">
                              <span className=" btn-icon btn-soft-primary  mr-4 profile-icon ">
                                <CurrencyDollar />
                              </span>
                              <div className="">
                                <h3 className="d-block font-size-3 mb-2">
                                  ${userData?.walletBalance || 0}
                                </h3>
                                <p className="h6 text-secondary font-weight-normal mb-0">
                                  Available balance
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-md-4">
              <div className="card ">
                <div className="card-body p-4">
                  <div className="media align-items-center profile-inner">
                    <span className=" btn-icon btn-soft-success   mr-4 profile-icon">
                      <Coin />
                    </span>
                    <div className="media-body">
                      <h3 className="d-block font-size-3 mb-2">
                        ${userData?.rewardedBalance || 0}
                      </h3>
                      <p className="h6 text-secondary font-weight-normal mb-0">
                        Reward balance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
                    <div className="col-md-6">
                      <div className="card">
                        <div className="card-body p-4">
                          <div className="d-flex justify-content-between align-items-center profile-inner">
                            <span className=" btn-icon btn-soft-warning mr-4 profile-icon">
                              <CurrencyExchange />
                            </span>
                            <div className="">
                              <h3 className="d-block font-size-3 mb-2">
                                ${userData?.pendingBalance || 0}
                              </h3>
                              <p className="h6 text-secondary font-weight-normal mb-0">
                                Pending balance
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="card-deck d-block d-lg-flex card-lg-gutters-3 mb-5">
          </div> */}
                  <div className="card-deck d-block d-lg-flex card-lg-gutters-3">
                    <Deposits {...props} />
                    <Balance />
                    <Activity />
                  </div>
                </div>
              </section>
            </div>
            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="user-image">
                        <img
                          className=""
                          src="https://th.bing.com/th/id/OIP.TUDe74-_OR6O3P4V-3_FYQHaE7?pid=ImgDet&rs=1"
                          alt="Profile"
                        />
                        <div className="edit-button-p">
                          <button
                            className="btn btn-primary Editprofile"
                            title="Edit profile"
                            onClick={isOpen}
                          >
                            {/* <i className="fa-solid fa-pen"></i> */}
                            <FiEdit2 />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="mx-4 me-4">
                        <div className="w-100 d-flex justify-content-between">
                          <div>
                            <span className="profileName text-capitalize">
                              {userData?.userName || "-"}
                            </span>
                            <span className="mx-3" style={{ color: "#726d6d" }}>
                              <i className="fa-solid fa-location-dot"></i>
                              <span className="mx-1 text-capitalize">
                                Gujarat
                              </span>
                            </span>
                          </div>
                        </div>
                        {/* <h6 className="text-primary text-capitalize">
                          {userData?.role || "-"}
                        </h6> */}
                        <div className="mt-4 w-100 mb-5">
                          <span style={{ color: "#726d6d" }} className="">
                            Wallet Balance
                          </span>
                          <h3>
                            ${" "}
                            {!!userData?.walletBalance
                              ? userData?.walletBalance
                              : 0}
                          </h3>
                        </div>
                        <hr />
                        <div className="mt-4 w-100">
                          <h6
                            className="text-uppercase mt-4 my-4"
                            style={{ color: "#726d6d" }}
                          >
                            Contact information
                          </h6>
                        </div>
                        <div className="">
                          <span className="">Phone:</span>
                          <span className="text-primary">
                            {!!userData?.phoneNumber
                              ? phoneFormatter.format(
                                  userData?.phoneNumber,
                                  "NNNNN NNNN"
                                )
                              : "-"}
                          </span>
                        </div>
                        <div className="row mt-4">
                          <span className="">Address:</span>
                          <span className="fs-5">
                            {!!userData?.address ? userData?.address : "-"}
                          </span>
                        </div>
                        <div className="row mt-4 mb-5">
                          <span className="">Email:</span>
                          <span className=" text-primary">
                            {!!userData?.email ? userData?.email : "-"}
                          </span>
                        </div>
                        <hr />
                        <div className="mt-4 w-100">
                          <h6
                            className="text-uppercase mt-4 my-4"
                            style={{ color: "#726d6d" }}
                          >
                            Basic Information
                          </h6>
                        </div>

                        <div className="row mt-4">
                          <span className="">Birthday:</span>
                          <span className="">
                            {!!userData?.birthday ? userData?.birthday : "-"}
                          </span>
                        </div>
                        <div className="row mt-4">
                          <span className="">Gender:</span>
                          <span className="">
                            {!!userData?.gender ? userData?.gender : "-"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpenModal && <EditProfileModal isOpen={isOpen} isClose={isClose} />}
    </>
  );
};

export default EditProfile;
