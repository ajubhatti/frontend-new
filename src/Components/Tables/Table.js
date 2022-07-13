import React from "react";
// import {
//   DatatableWrapper,
//   Filter,
//   Pagination,
//   PaginationOptions,
//   TableBody,
//   TableHeader,
// } from "react-bs-datatable";
import { Table } from "react-bootstrap";
import { CSVLink } from "react-csv";
import { FiletypeCsv } from "react-bootstrap-icons";

const TableComponent = ({ data, headerName }) => {
  return (
    <div className="card">
      {/* <DatatableWrapper
        body={data}
        headers={headerName}
        // sortProps={{
        //   initialState: {
        //     order: "desc",
        //     prop: "created_at",
        //   },
        //   sortValueObj: {
        //     created_at: (date) => moment(date).format("DD-MM-YYYY h:mm:ss a"),
        //   },
        // }}
        paginationOptionsProps={{
          initialState: {
            rowsPerPage: 10,
            options: [10, 20, 50, 100],
          },
        }}
      >
        <div
          className="py-4 px-0 mx-4"
          style={{ borderBottom: "1px solid #e7eaf3" }}
        >
          <div className="row justify-content-sm-between align-items-sm-center">
            <div className="col-md-5 col-lg-4 mb-2 mb-md-0"></div>
            <div className="col-md-6">
              <div className="d-flex">
                <div className="mr-2">
                  <div className="dropdown bootstrap-select js-select dropdown-select fit-width">
                    <PaginationOptions />
                  </div>
                </div>
                <div className="js-focus-state input-group input-group-sm mr-2">
                  <Filter placeholder={"Search activities"} />
                </div>
                <div className="btn btn-xs btn-soft-success">
                  <CSVLink
                    data={data}
                    headers={headerName}
                    className="button d-flex justify-content-center align-items-center"
                  >
                    <FiletypeCsv />
                  </CSVLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body p-4">
          <Table hover responsive borderless>
            <TableHeader />
            <TableBody />
          </Table>
          <div className="d-flex align-items-center justify-content-end">
            <Pagination />
          </div>
        </div>
      </DatatableWrapper> */}
    </div>
  );
};

export default TableComponent;
