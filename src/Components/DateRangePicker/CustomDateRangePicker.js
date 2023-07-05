import React, { useEffect } from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDateRangePicker = ({ rangeDate, setRangeDate }) => {
  // const [dateRangeValue, setDateRangeValueValues] = useState({
  //   start: null,
  //   end: null,
  // });

  const getStartDate = (newValue, range) => {
    if (newValue && range) {
      const start = moment(newValue);
      const end = moment(range && range.end);

      if (end) {
        if (start.isAfter(end)) {
          return end.toDate();
        }
      }

      return start.toDate();
    }
  };

  const getEndDate = (newValue, range) => {
    if (newValue && range) {
      const start = moment(range && range.start);
      const end = moment(newValue);

      if (end.isSameOrAfter(start)) {
        return end.toDate();
      }

      return range && range.end;
    }
  };

  return (
    <div className="d-flex">
      <div className="me-2">
        <label>Start Date</label>
        <DatePicker
          name="startDate"
          isClearable
          autoComplete="off"
          label=""
          type="text"
          className="form-control"
          placeholderText="Start Date"
          selectsStart
          selected={rangeDate.start}
          onChange={(date) => {
            setRangeDate((prevState) => ({
              ...prevState,
              start: getStartDate(date, prevState),
            }));
          }}
          startDate={rangeDate.start}
          endDate={rangeDate.end}
          // maxDate={rangeDate.end}
        />
      </div>
      <div className="me-2">
        <label>End Date</label>
        <DatePicker
          name="endDate"
          isClearable
          autoComplete="off"
          label=""
          type="text"
          className="form-control"
          placeholderText="End Date"
          selectsEnd
          selected={rangeDate.end}
          onChange={(date) => {
            setRangeDate((prevState) => ({
              ...prevState,
              end: getEndDate(date, prevState),
            }));
          }}
          startDate={rangeDate.start}
          endDate={rangeDate.end}
          minDate={rangeDate.start}
        />
      </div>
    </div>
  );
};

export default CustomDateRangePicker;
