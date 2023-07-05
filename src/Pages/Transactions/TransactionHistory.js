import moment from "moment";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../Helper/LocalStorage";
import Menu from "../Profile/Menu";
import { sizePerPageList } from "../../Constants/table";
import CustomTable from "../../Components/Tables/CustomTable";
import CustomDateRangePicker from "../../Components/DateRangePicker/CustomDateRangePicker";
import { ExportToCsv } from "export-to-csv";
import { toast } from "react-toastify";
import { FaPrint } from "react-icons/fa";
import InvoiceModal from "../../Components/Modal/invoiceModal";
import {
  fetchAllUserTransactionList,
  setPageTransaction,
  setSizePerPageTransaction,
  setSortFieldOfTransaction,
  setSortOrderOfTransaction,
} from "./store/actions";

const options = {
  fieldSeparator: ",",
  quoteStrings: '"',
  decimalSeparator: ".",
  showLabels: true,
  showTitle: true,
  title: "Activities",
  useTextFile: false,
  useBom: true,
  useKeysAsHeaders: true,
};

const csvExporter = new ExportToCsv(options);

const TransactionHistory = () => {
  const dispatch = useDispatch();
  const user = getUser();
  const {
    transactionsLoading,
    page,
    sizePerPage,
    totalSize,
    transactionListData,
  } = useSelector((state) => state.transactionReducer);

  const [exportLoading, setExportLoading] = useState(false);
  const [searchString, setSearchString] = useState("");
  const [isInvoiceModal, setIsInvoiceModal] = useState(false);
  const [invoiceData, setInvoiceData] = useState(null);
  const [dateRangeValue, setDateRangeValue] = useState({
    start: null,
    end: null,
  });
  const [payloadData, setPayloadData] = useState({
    userId: user?.id,
    page: 1,
    limits: 20,
    sortBy: "created",
    orderBy: "DESC",
    skip: 0,
    search: "",
    startDate: "", //"10-15-2022",
    endDate: "", //"10-30-2022",
  });

  const columns = useMemo(
    () => [
      {
        text: "No.",
        dataField: "no",
        headerStyle: (colum, colIndex) => ({
          width: "10%",
          textAlign: "center",
        }),

        // headerStyle: { width: "50px" },
        style: { height: "30px" },
        formatter: (cell, row, rowIndex, formatExtraData) => (
          <div className="align-middle">
            {sizePerPage * (page - 1) + rowIndex + 1}
          </div>
        ),
        sort: true,
      },
      {
        text: "Date",
        dataField: "created",
        sort: true,
        headerStyle: { width: "50px" },
        style: { height: "30px" },
        formatter: (cell, row, rowIndex, formatExtraData) => (
          <div className="align-middle">
            {row?.created
              ? moment(row?.created).format("DD/MM/YYYY hh:mm:ss")
              : "-"}
          </div>
        ),
      },
      {
        text: "Transaction Id",
        dataField: "transactionId",
        sort: false,
        formatter: (cell, row, rowIndex, formatExtraData) => (
          <div>{row?.transactionId ? row?.transactionId : "-"}</div>
        ),
      },
      {
        text: "Operator Id",
        dataField: "operatorId",
        sort: true,
        formatter: (cell, row, rowIndex, formatExtraData) => (
          <div className="align-middle ">
            {row?.rechargeData?.OPRID
              ? row?.rechargeData?.OPRID
              : row?.rechargeData?.opid
              ? row?.rechargeData?.opid
              : "-"}
          </div>
        ),
      },
      {
        text: "Operator Name",
        dataField: "operatorName",
        sort: true,
        formatter: (cell, row, rowIndex, formatExtraData) => (
          <div className="align-middle ">
            {row?.rechargeData?.operatorConfig?.operatorData?.operatorName
              ? row?.rechargeData?.operatorConfig?.operatorData?.operatorName
              : "-"}
          </div>
        ),
      },
      {
        text: "Customer No",
        dataField: "customerNo",
        sort: true,
        formatter: (cell, row, rowIndex, formatExtraData) => (
          <div className="align-middle ">
            {row?.customerNo ? row?.customerNo : "-"}
          </div>
        ),
      },
      {
        text: "Balance",
        dataField: "userBalance",
        sort: true,
        formatter: (cell, row, rowIndex, formatExtraData) => (
          <div className="align-middle ">
            {row?.userBalance ? row?.userBalance : "-"}
          </div>
        ),
      },
      {
        text: "Request Amount",
        dataField: "requestAmount",
        sort: true,
        formatter: (cell, row, rowIndex, formatExtraData) => (
          <div className="align-middle ">
            {row?.requestAmount ? row?.requestAmount : "-"}
          </div>
        ),
      },
      {
        text: "CashBack Amount",
        dataField: "cashBackAmount",
        sort: true,
        formatter: (cell, row, rowIndex, formatExtraData) => (
          <div className="align-middle ">
            {row?.cashBackAmount ? row?.cashBackAmount : "-"}
          </div>
        ),
      },
      {
        text: "Recharge Amount",
        dataField: "rechargeAmount",
        sort: true,
        formatter: (cell, row, rowIndex, formatExtraData) => (
          <div className="align-middle ">
            {row?.rechargeAmount ? row?.rechargeAmount : "-"}
          </div>
        ),
      },
      {
        text: "FinalBalance",
        dataField: "userFinalBalance",
        sort: true,
        formatter: (cell, row, rowIndex, formatExtraData) => (
          <div className="align-middle ">
            {row?.userFinalBalance ? row?.userFinalBalance : "-"}
          </div>
        ),
      },
      {
        text: "remark",
        dataField: "remark",
        formatter: (cell, row, rowIndex, formatExtraData) => (
          <div className="align-middle">
            <span>{!!row?.remark ? row?.remark : "-"}</span>
          </div>
        ),
      },

      {
        text: "status",
        dataField: "status",
        formatter: (cell, row, rowIndex, formatExtraData) => (
          <div
            className={`align-middle text-${
              row?.status === "success"
                ? "success"
                : row?.status === "pending"
                ? "warning"
                : "danger"
            }`}
          >
            <span
              className={`text-capitalize text-white p-1 rounded bg-${
                row?.status === "success"
                  ? "success"
                  : row?.status === "pending"
                  ? "warning"
                  : "danger"
              }`}
            >
              {row?.status}
            </span>
          </div>
        ),
      },
      {
        text: "print",
        dataField: "print",
        sort: false,
        formatter: (cell, row, rowIndex, formatExtraData) => (
          <div>
            <FaPrint onClick={() => printHandler(row)} />
          </div>
        ),
      },
    ],
    [page, sizePerPage]
  );

  const pageOptions = useMemo(
    () => ({
      page,
      sizePerPage,
      totalSize,
      custom: true,
      sizePerPageList,
    }),
    [sizePerPage, totalSize, page]
  );

  const printHandler = (data) => {
    setInvoiceData(data);
    setIsInvoiceModal(true);
  };

  useEffect(() => {
    setPayloadData((previousData) => ({
      ...previousData,
      userId: user?.id,
      page: page,
      limits: sizePerPage,
      sortBy: "created",
      orderBy: "DESC",
      skip: 0,
      search: "",
    }));
  }, [sizePerPage, page, user?.id]);

  useEffect(() => {
    dispatch(fetchAllUserTransactionList(payloadData));
  }, [dispatch, payloadData]);

  const onTableChange = (type, { page, sizePerPage, sortField, sortOrder }) => {
    switch (type) {
      case "sort":
        dispatch(setSortFieldOfTransaction(sortField));
        dispatch(setSortOrderOfTransaction(sortOrder.toUpperCase()));
        break;
      case "pagination":
        dispatch(setPageTransaction(page));
        dispatch(setSizePerPageTransaction(sizePerPage));
        break;
      default:
        break;
    }
  };

  const handleSearch = (e) => {
    setSearchString(e.target.value.trim());
  };

  const handleCSV = () => {
    try {
      setExportLoading(true);
      const payload = {
        ...payloadData,
        limits: totalSize,
      };
      dispatch(
        fetchAllUserTransactionList(payload, (status) => {
          if (status) {
            const exportData = status?.data?.map((item) => {
              return {
                date:
                  moment(item?.created).format("DD/MM/YYYY, h:mm:ss a") || "-",
                Payment_type: item?.type || "-",
                Transaction_Id: item?.transactionId || "-",
                Slip_No: !!item?.slipNo ? item?.slipNo : "-",
                Remark: item?.remark || "-",
                Customer_No: !!item?.customerNo ? item?.customerNo : "-",
                Balance: item?.userBalance || "-",
                Request_Amount: item?.requestAmount || "-",
                Recharge_Amount: item?.rechargeAmount || "-",
                Cashback_Amount: !!item.cashBackAmount
                  ? item?.cashBackAmount
                  : "-",
                Final_Balance: item?.userFinalBalance || "-",
                Amount: item?.amount || "-",
                status: item?.status || "-",
              };
            });
            setExportLoading(false);
            csvExporter.generateCsv(exportData);
          }
        })
      );
    } catch (err) {
      setExportLoading(false);
      toast.err("something want's wrong!!");
    }
  };

  const handleFilterData = () => {
    setPayloadData((prev) => ({
      ...prev,
      search: searchString,
      startDate: dateRangeValue.start
        ? moment(dateRangeValue.start).format("MM-DD-YYYY")
        : "",
      endDate: dateRangeValue.end
        ? moment(dateRangeValue.end).format("MM-DD-YYYY")
        : "",
    }));
  };

  return (
    <div className="bg-light">
      <Menu />

      {/* <div className="card">
        <TablePrintWithHook
          data={transactionListData}
          columns={columns}
          pageOptions={pageOptions}
        />
      </div> */}
      <div className="container space-2">
        <div className="card" id="non_printable">
          <div className="card-body p-4">
            <CustomTable
              showAddButton={false}
              pageOptions={pageOptions}
              keyField="transaction_id"
              data={transactionListData}
              columns={columns}
              showSearch={false}
              onTableChange={onTableChange}
              withPagination={true}
              loading={transactionsLoading}
              withCard={false}
            >
              <div className="position-relative">
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <div className="me-2">
                      <label>Search</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="search"
                        onChange={handleSearch}
                      />
                      x
                    </div>

                    <CustomDateRangePicker
                      rangeDate={dateRangeValue}
                      setRangeDate={setDateRangeValue}
                    />

                    <div className="me-2 d-flex align-items-end">
                      <button
                        className={`btn btn-secondary ${
                          exportLoading ? "disabled" : ""
                        }`}
                        onClick={handleFilterData}
                      >
                        Find
                      </button>
                    </div>
                  </div>
                  <div className="me-2 d-flex align-items-end">
                    <button
                      className={`btn btn-secondary ${
                        exportLoading ? "disabled" : ""
                      }`}
                      onClick={handleCSV}
                    >
                      {exportLoading ? "Exporting.." : "Export CSV"}
                    </button>
                  </div>
                </div>
              </div>
            </CustomTable>
          </div>
        </div>
      </div>

      {isInvoiceModal && (
        <InvoiceModal
          isInvoiceModal={isInvoiceModal}
          setIsInvoiceModal={setIsInvoiceModal}
          invoiceData={invoiceData}
          setInvoiceData={setInvoiceData}
        />
      )}
    </div>
  );
};

export default TransactionHistory;
