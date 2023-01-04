import React from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/theme/default.css';
import 'react-date-range/dist/styles.css';

const ReactDateRange = ({ rangeDate, setRangeDate, closeDate }) => {
  return (
    <div>
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
