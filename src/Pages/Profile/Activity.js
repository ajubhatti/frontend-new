import React from "react";
import { statusColor, TransactionActivity } from "../../Shared/constant";

const Activity = () => {
  const ActivityList =
    TransactionActivity.length > 0 &&
    TransactionActivity.map((x, index) => {
      return (
        <li className="media u-indicator-vertical-dashed-item" key={index}>
          <span
            className={`btn btn-xs btn-icon btn-${statusColor[index % statusColor.length].colorName
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
    // <div className="card">
    //   <div className="card-header p-4">
    //     <div className="d-flex justify-content-between align-items-center">
    //       <h5 className="mb-0">Activity</h5>
    //       <div className="position-relative"></div>
    //     </div>
    //   </div>
    //   <div className="card-body pt-5 pb-4 px-4 mb-3 mb-md-0">
    //     <div className="overflow-hidden">
    //       <div
    //         className="pr-3 mCustomScrollbar _mCS_1 mCS-autoHide"
    //         style={{

    //           position: "relative",
    //           overflow: "visible",
    //         }}
    //       >
    //         <div
    //           className="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside"

    //         >
    //           <div
    //             className="mCSB_container"
    //             style={{ overflowY: "scroll" }}
    //           >
    //             <ul className="list-unstyled u-indicator-vertical-dashed">
    //               {ActivityList.length > 0
    //                 ? ActivityList
    //                 : "No Activity Found!"}
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <>
      
    </>
  );
};

export default Activity;
