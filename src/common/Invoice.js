import moment from "moment";
import React, { forwardRef } from "react";

const Invoice = forwardRef(({ data }, ref) => {
  return (
    <div ref={ref} id="invoice_card" className="mt4">
      <table border="0" className="table table-responsive-xl invoice-table">
        <thead>
          <tr>
            <th colSpan={2} className="noBorder">
              Receipt
            </th>
          </tr>
        </thead>
        <tbody className="noBorder">
          <tr>
            <td className="w-60">Account/Consumer/Customer/Number:</td>
            <td>{data?.customerNo || "-"}</td>
          </tr>
          <tr>
            <td className="w-60">Transaction ID:</td>
            <td>
              {data?.rechargeData?.TRNID || data?.rechargeData?.rpid || "-"}
            </td>
          </tr>
          <tr>
            <td className="w-60">Operator ID:</td>
            <td>
              {data?.rechargeData?.opid || data?.rechargeData?.OPRID || "-"}
            </td>
          </tr>
          <tr>
            <td className="w-60">Operator</td>
            <td>{data?.rechargeByOperator?.operatorName || "-"}</td>
          </tr>
          <tr>
            <td className="w-60">Amount</td>
            <td>{data?.amount || 0}</td>
          </tr>
          <tr>
            <td className="w-60">Date</td>
            <td>
              {moment(data?.created).format("DD/MM/yyyy hh:mm:ss" || "-")}
            </td>
          </tr>
          <tr>
            <td className="w-60">Account/Consumer/Customer/Number:</td>
            <td>{data?.status || "-"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
});

export default Invoice;
