import React, { forwardRef } from "react";
import CustomTable from "../Tables/CustomTable";

const ComponentToPrint2 = forwardRef((props, ref) => {
  return (
    <div className="relativeCSS" ref={ref} id="printable">
      {/* <style type="text/css" media="print">
        {
          "\
   @page { size: landscape; }\
"
        }
      </style>
      <div className="flash" /> */}

      <CustomTable
        showAddButton={false}
        pageOptions={props.pageOptions}
        keyField="transaction_id"
        data={props.data}
        columns={props.columns}
        showSearch={false}
        withPagination={false}
        withCard={false}
      ></CustomTable>
    </div>
  );
});

export default ComponentToPrint2;
