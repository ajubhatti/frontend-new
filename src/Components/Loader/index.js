import React from "react";
import "./Loader.css";
//  <Loader className="component-loader" /> This is a main spinner
const Loader = ({ className }) => (
  <div className={`-loader-loading -active ${className}`}>
    <div className="-loader-loading-inner">
      <div className="multi-spinner-container">
        <div className="multi-spinner">
          <div className="multi-spinner">
            <div className="multi-spinner">
              <div className="multi-spinner">
                <div className="multi-spinner">
                  <div className="multi-spinner" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Loader;
