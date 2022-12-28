import React from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import ReactDatePicker from "../DateRangePicker/ReactDatePicker";

const BasicDataTable = ({
  data,
  columns,
  conditionalRowStyles,
  totalRows,
  handlePageChange,
  handlePerRowsChange,
  setDateRange,
  dateRange,
  showDatePicker,
}) => {
  const tableData = {
    columns,
    data,
    filterPlaceholder: "Search...",
    exportHeaders: true,
    filterDigit: 3,
  };
  return (
    <>
      {showDatePicker && (
        <ReactDatePicker setRangeDate={setDateRange} rangeDate={dateRange} />
      )}

      <DataTableExtensions {...tableData}>
        <DataTable
          columns={columns}
          data={data}
          noHeader
          defaultSortField="id"
          defaultSortAsc={false}
          pagination
          conditionalRowStyles={conditionalRowStyles}
          paginationServer
          paginationTotalRows={totalRows}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handlePerRowsChange}
          highlightOnHover
          paginationComponentOptions={{
            noRowsPerPage: true,
          }}
        />
      </DataTableExtensions>
    </>
  );
};

export default BasicDataTable;
