import React, { useState } from "react";
import { ArrowDownShort } from "react-bootstrap-icons";

const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="card mb-3">
      <div
        className={`card-header card-collapse bg-white pointer`}
        onClick={() => setOpen(!isOpen)}
      >
        <h6 className="mb-0 pointer">
          <div
            className={`btn btn-block d-flex justify-content-between card-btn pointer ${
              isOpen ? "" : "collapsed"
            }`}
          >
            {title}
            <span className="card-btn-arrow">
              <ArrowDownShort style={{ fontSize: "28px" }} />
            </span>
          </div>
        </h6>
      </div>
      <div className={`collapse ${isOpen ? "show" : ""}`}>
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
