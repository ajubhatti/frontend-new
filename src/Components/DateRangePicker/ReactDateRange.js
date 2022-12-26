import React, { useState } from "react";
import { DateRange, DateRangePicker } from "react-date-range";
import "react-date-range/dist/theme/default.css";
import "react-date-range/dist/styles.css";

const ReactDateRange = ({ rangeDate, setRangeDate, closeDate }) => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  return (
    <div>
      {/* <DateRange
        editableDateInputs={true}
        onChange={(item) => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
      /> */}

      <DateRangePicker
        onChange={(item) => setRangeDate([item.selection])}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={rangeDate}
        direction="horizontal"
        shouldCloseOnSelect={closeDate}
      />
    </div>
  );
};

export default ReactDateRange;
