import moment from "moment";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../Helper/LocalStorage";
import Menu from "../Profile/Menu";
import { addDays } from "date-fns";
import { sizePerPageList } from "../../Constants/table";
import CustomTable from "../../Components/Tables/CustomTable";
import ReactDatePicker from "../../Components/DateRangePicker/ReactDatePicker";
import {
  fetchAllUserTransactionList,
  setPerTransaction,
  setSizePerPageTransaction,
  setSortFieldOfTransaction,
  setSortOrderOfTransaction,
} from "./store/actions";

const TransactionHistory = () => {
  const dispatch = useDispatch();
  const user = getUser();
  const {
    userTransactionsData,
    transactionsLoading,
    page,
    sizePerPage,
    totalSize,
    search,
    sortField,
    sortOrder,
    transactionListData,
  } = useSelector((state) => state.transactionReducer);

  const [perPage, setPerPage] = useState(10);
  const [show, setShow] = useState(false);
  const [closeDate, setCloseDate] = useState(false);
  const [inputDate, setInputDate] = useState("");
  const [dateRange, setDateRange] = useState([null, null]);
  const [rangeDate, setRangeDate] = useState([
    {
      startDate: addDays(new Date(), -7),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [payloadData, setPayloadData] = useState({
    userId: user.id,
    page: 1,
    limits: 20,
    sortBy: "created",
    orderBy: "desc",
    skip: 0,
    search: "",
    startDate: "", //"10-15-2022",
    endDate: "", //"10-30-2022",
  });

  const columns = useMemo(
    () => [
      {
        dataField: "sl.no",
        text: "Sl no.",
        formatter: (cell, row, rowIndex, formatExtraData) =>
          page * 10 + rowIndex + 1,
        sort: true,
      },
      {
        text: "created",
        dataField: "created",
        sort: true,
        formatter: (cell, row, rowIndex, formatExtraData) => (
          <div className="align-middle text-secondary">
            {moment(row?.created).format("DD-MM-YYYY h:mm:ss a")}
          </div>
        ),
      },
      {
        text: "Payment type",
        dataField: "type",
        sort: true,
        formatter: (cell, row, rowIndex, formatExtraData) => (
          <div className="align-middle text-secondary">{row?.type}</div>
        ),
      },
      {
        text: "Transaction Id",
        dataField: "transactionId",
        sort: false,
        formatter: (cell, row, rowIndex, formatExtraData) => (
          <div>{row?.page * 10 + rowIndex + 1}</div>
        ),
      },
      {
        text: "slip No",
        dataField: "slipNo",
        sort: true,
        formatter: (cell, row, rowIndex, formatExtraData) => (
          <div>{row?.slipNo}</div>
        ),
      },
      {
        text: "remark",
        dataField: "remark",
        // sort: true,
        formatter: (cell, row, rowIndex, formatExtraData) => (
          <div className="align-middle">
            <span>{!!row?.remark ? row?.remark : "-"}</span>
          </div>
        ),
      },
      {
        text: "Customer No",
        dataField: "customerNo",
        sort: true,
        formatter: (cell, row, rowIndex, formatExtraData) => (
          <div className="align-middle ">{row?.customerNo}</div>
        ),
      },
      {
        text: "Balance",
        dataField: "userBalance",
        sort: true,
        formatter: (cell, row, rowIndex, formatExtraData) => (
          <div className="align-middle ">{row?.userBalance}</div>
        ),
      },
      {
        text: "Request Amount",
        dataField: "requestAmount",
        sort: true,
        formatter: (cell, row, rowIndex, formatExtraData) => (
          <div className="align-middle ">{row?.requestAmount}</div>
        ),
      },
      {
        text: "Recharge Amount",
        dataField: "rechargeAmount",
        sort: true,
        formatter: (cell, row, rowIndex, formatExtraData) => (
          <div className="align-middle ">{row?.rechargeAmount}</div>
        ),
      },
      {
        text: "CashBack Amount",
        dataField: "cashBackAmount",
        sort: true,
        formatter: (cell, row, rowIndex, formatExtraData) => (
          <div className="align-middle ">{row?.cashBackAmount}</div>
        ),
      },
      {
        text: "FinalBalance",
        dataField: "userFinalBalance",
        sort: true,
        formatter: (cell, row, rowIndex, formatExtraData) => (
          <div className="align-middle ">{row?.userFinalBalance}</div>
        ),
      },
      {
        text: "amount",
        dataField: "amount",
        sort: true,
        formatter: (cell, row, rowIndex, formatExtraData) => (
          <div className="align-middle ">{row?.amount}</div>
        ),
      },
      {
        text: "created",
        dataField: "created",
        // sort: true,
        formatter: (cell, row, rowIndex, formatExtraData) => (
          <div className="align-middle text-secondary">
            {moment(row?.created).format("DD-MM-YYYY h:mm:ss a")}
          </div>
        ),
      },
      {
        text: "status",
        dataField: "status",
        // sort: true,
        formatter: (cell, row, rowIndex, formatExtraData) => (
          <div
            className={`align-middle text-${
              row?.status === "completed"
                ? "success"
                : row?.status === "pending"
                ? "warning"
                : "danger"
            }`}
          >
            {row?.status}
          </div>
        ),
      },
    ],
    []
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

  useEffect(() => {
    setPayloadData({
      userId: user.id,
      page: page,
      limits: sizePerPage,
      sortBy: "created",
      orderBy: "desc",
      skip: 0,
      search: "",
      startDate: "",
      endDate: "",
    });
  }, [sizePerPage, page]);

  useEffect(() => {
    if (dateRange[0] && dateRange[1]) {
      const selectedStartDate = moment(dateRange[0]).format("yyyy-MM-DD");
      const selectedEndDate = moment(dateRange[1]).format("yyyy-MM-DD");
      if (selectedStartDate && selectedEndDate)
        console.log({ dateRange, selectedStartDate, selectedEndDate });
      setPayloadData((prev) => ({
        ...prev,
        startDate: selectedStartDate,
        endDate: selectedEndDate,
      }));
    }
  }, [dateRange]);

  useEffect(() => {
    const selectedStartDate = moment(rangeDate[0]?.startDate).format(
      "yyyy-MM-DD"
    );
    const selectedEndDate = moment(rangeDate[0]?.endDate).format("yyyy-MM-DD");
    setInputDate(
      moment(selectedStartDate).format("MM/DD/yyyy") +
        " - " +
        moment(selectedEndDate).format("MM/DD/yyyy")
    );

    console.log({ rangeDate });
    if (rangeDate[0]?.endDate) {
      handleCloseCalendar;
    }

    // let data = {
    //   hub_id: parseInt(hubId),
    //   start_date: selectedStartDate,
    //   end_date: selectedEndDate,
    // };

    // dispatch(getVisitorReport({ data, cb: handleCloseCalendar }));
  }, [rangeDate]);

  const handleCloseCalendar = () => {
    setCloseDate(true);
  };

  useEffect(() => {
    dispatch(fetchAllUserTransactionList(payloadData));
  }, [payloadData]);

  const handlePageChange = (page) => {
    console.log({ page });
    setPayloadData((prev) => ({
      ...prev,
      page: page,
    }));
  };

  const handlePerRowsChange = async (newPerPage, page) => {
    setPerPage(newPerPage);
  };

  const handleDataRange = () => {
    if (show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const onTableChange = (type, { page, sizePerPage, sortField, sortOrder }) => {
    switch (type) {
      case "sort":
        dispatch(setSortFieldOfTransaction(sortField));
        dispatch(setSortOrderOfTransaction(sortOrder.toUpperCase()));
        break;
      case "pagination":
        dispatch(setPerTransaction(page));
        dispatch(setSizePerPageTransaction(sizePerPage));
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-light">
      <Menu />
      <div className="container space-2">
        <div className="card">
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
              <ReactDatePicker
                setRangeDate={setDateRange}
                rangeDate={dateRange}
              />
            </CustomTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
