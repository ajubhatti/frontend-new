import moment from 'moment';
import React from 'react'

const Invoice = ({data}) => {
      return (
    <table className="table table-responsive invoice-table">
      <thead>
        <tr>
          <th style={{ borderBottom: "1px solid #377dff" }} colSpan={2}>
            Transaction Details
          </th>
        </tr>
        <tr>
          <th colSpan={2}>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="w-75">Account/Consumer/Customer/Number:</td>
          <td>{data?.customerNo || "-"}</td>
        </tr>
        <tr>
          <td className="w-75">TX ID:</td>
          <td>{"-"}</td>
        </tr>
        <tr>
          <td className="w-75">Operator Id:</td>
          <td>{data?.responseData?.opid || "-"}</td>
        </tr>
        <tr>
          <td className="w-75">Operator</td>
          <td>{data?.operator || "-"}</td>
        </tr>
        <tr>
          <td className="w-75">Amount</td>
          <td>{data?.amount || 0}</td>
        </tr>
        <tr>
          <td className="w-75">Date</td>
          <td>{moment(data?.created).format("MM/DD/yyyy" || "-")}</td>
        </tr>
        <tr>
          <td className="w-75">Account/Consumer/Customer/Number</td>
          <td>{data?.status || "-"}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Invoice