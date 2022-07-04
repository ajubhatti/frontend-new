import React from "react";
import Charts from "./Charts";

const BarChart = () => {
  const data = [
    { label: "May", value: "50" },
    { label: "Jun", value: "80" },
    { label: "Jul", value: "29" },
    { label: "Aug", value: "39" },
  ];
  return <Charts data={data} />;
};

export default BarChart;
