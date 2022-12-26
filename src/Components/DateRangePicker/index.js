import React, { useState } from "react";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "./styles.css";

const APDateRangePicker = ({
  isRelative,
  isMonthly,
  lastMonthProcessed,
  lastWeekProcessed,
}) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };
  const falseFunc = () => false; // passing this prevents unnecessary re-render
  return (
    <div className="App">
      <DateRangePicker
        isOutsideRange={falseFunc}
        startDate={startDate}
        startDateId="datepicker-start-date"
        endDate={endDate}
        endDateId="datepicker-end-date"
        onDatesChange={handleDatesChange}
        focusedInput={focusedInput}
        onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
      />
    </div>
  );
};

export default APDateRangePicker;
