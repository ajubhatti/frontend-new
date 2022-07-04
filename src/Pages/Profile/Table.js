import React from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { columns, data } from "../../Shared/constant";

const Table = () => {
  const tableData = {
    columns,
    data,
    filterPlaceholder: "Search...",
    exportHeaders: true,
    filterDigit: 3,
  };
  return (
    <DataTableExtensions {...tableData}>
      <DataTable
        columns={columns}
        data={data}
        noHeader
        defaultSortField="id"
        defaultSortAsc={false}
        pagination
        // highlightOnHover
      />
    </DataTableExtensions>
  );
};

export default Table;
