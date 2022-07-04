import React, { useState } from "react";

export const TabItem = (props) => {
  return <div {...props} />;
};

const Tabs = (props) => {
  const [bindIndex, setBindIndex] = useState(props.defaultIndex);

  const changeTab = (newIndex) => {
    if (typeof props.onTabClick === "function") props.onTabClick(newIndex);
    setBindIndex(newIndex);
  };

  const items = props.children.filter((item) => item.type.name === "TabItem");

  return (
    <div className="wrapper">
      <div className="d-flex flex-wrap">
        {items.map(({ props: { index, label } }) => (
          <div
            className={`card border-0 shadow-sm transition-3d-hover mb-3 ${
              bindIndex === index ? "focus" : ""
            }`}
            key={index}
            onClick={() => changeTab(index)}
          >
            <div className="card-body bg-primary rounded-top p-5">
              <div className="u-avatar bg-white rounded p-2 mx-auto">
                <img src="" alt="" className="img-fluid" />
              </div>
            </div>
            <div className="card-body p-4">
              <div className="mb-3">
                <h2 className="h6 mb-0">{label}</h2>
                <small className="d-block text-secondary">
                  Developer tools
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="tab-view">
        {items.map(({ props }) => (
          <div
            {...props}
            className="tab-view_item"
            key={props.index}
            style={{ display: bindIndex === props.index ? "block" : "none" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Tabs;
