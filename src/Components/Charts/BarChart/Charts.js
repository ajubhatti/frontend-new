import React from "react";

const Charts = ({ data }) => {
  const barChartData = data.map((x, index) => {
    return (
      <div className="col-3" key={index}>
        <div className="progress-vertical rounded mb-2">
          <div
            className="bg-primary rounded-bottom"
            style={{ height: `${x.value}%` }}
          ></div>
        </div>
        <div className="text-center">
          <h4 className="small mb-0">{x.label}</h4>
        </div>
      </div>
    );
  });

  return (
    <div className="row">
      {barChartData.length > 0 ? barChartData : "No Data Available"}
    </div>
  );
};

export default Charts;
