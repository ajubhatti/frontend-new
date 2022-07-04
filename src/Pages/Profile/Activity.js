import React from "react";
import { statusColor, TransactionActivity } from "../../Shared/constant";

const Activity = () => {
  const ActivityList =
    TransactionActivity.length > 0 &&
    TransactionActivity.map((x, index) => {
      return (
        <li className="media u-indicator-vertical-dashed-item" key={index}>
          <span
            className={`btn btn-xs btn-icon btn-${
              statusColor[index % statusColor.length].colorName
            } rounded-circle mr-3`}
          >
            <span className="btn-icon__inner">{x.title.charAt(0)}</span>
          </span>
          <div className="media-body">
            <h5 className="font-size-1 mb-1">{x.title}</h5>
            <p className="small mb-1">
              {x.amount}:{" "}
              <span className="font-weight-medium">{x.description}</span>
            </p>
            <small className="d-block text-muted">{x.time}</small>
          </div>
        </li>
      );
    });

  return (
    <div className="card">
      <div className="card-body pt-4 pb-5 px-5 mb-3 mb-md-0">
        <div className="d-flex justify-content-between align-items-center">
          <h6 className="mb-0">Activity</h6>
          <div className="position-relative"></div>
        </div>
        <hr className="mt-3 mb-4" />
        <div className="overflow-hidden">
          <div
            className="pr-3 mCustomScrollbar _mCS_1 mCS-autoHide"
            style={{
              maxHeight: "300px",
              position: "relative",
              overflow: "visible",
            }}
          >
            <div
              className="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside"
              style={{ maxHeight: "300px" }}
            >
              <div
                className="mCSB_container"
                style={{ maxHeight: "300px", overflowY: "scroll" }}
              >
                <ul className="list-unstyled u-indicator-vertical-dashed">
                  {ActivityList.length > 0
                    ? ActivityList
                    : "No Activity Found!"}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
