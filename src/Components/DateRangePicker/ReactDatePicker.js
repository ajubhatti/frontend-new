import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ReactDatePicker = ({ rangeDate, setRangeDate }) => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  useEffect(() => {
    setDateRange(rangeDate);
  }, [rangeDate]);

  return (
    <DatePicker
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={(update) => {
        setRangeDate(update);
      }}
      isClearable={true}
      placeholderText="Start date - End date"
    />
  );
};

export default ReactDatePicker;
