import React, { useEffect } from "react";
import { Coin, CurrencyDollar, CurrencyExchange } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../Helper/LocalStorage";
import Activity from "./Activity";
import Balance from "./Balance";
import Deposits from "./Deposite";
import Menu from "./Menu";
import { fetchProfile } from "./store/actions";

const ProfileDashboard = (props) => {
  const dispatch = useDispatch();
  const user = getUser();

  const { userData } = useSelector((state) => state.profileReducer);

  // useEffect(() => {
  //   dispatch(
  //     fetchProfile({
  //       id: user.id,
  //     })
  //   );
  // }, [dispatch, user.id]);

  return (
    <>
      <Menu {...props} />
      <section className="dashboard-section bg-light">
        <div className="container space-2">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-detCard">
                <div className="card ">
                  <div className="card-body p-4">
                    <div className="media align-items-center profile-inner">
                      <span className=" btn-icon btn-soft-primary  mr-4 profile-icon ">
                        <CurrencyDollar />
                      </span>
                      <div className="media-body">
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
            <div className="col-md-4">
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
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body p-4">
                  <div className="media align-items-center profile-inner">
                    <span className=" btn-icon btn-soft-warning mr-4 profile-icon">
                      <CurrencyExchange />
                    </span>
                    <div className="media-body">
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
    </>
  );
};

export default ProfileDashboard;
