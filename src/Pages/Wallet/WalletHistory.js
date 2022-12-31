import moment from "moment";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../Helper/LocalStorage";
import Menu from "../Profile/Menu";
import {
  fetchAllUserWalletList,
  setPerWallet,
  setSizePerPageWallet,
  setSortFieldOfWallet,
  setSortOrderOfWallet,
} from "./store/actions";
import { addDays } from "date-fns";
import useOutsideClick from "../../Hooks/useOutSideClick";
import BasicDataTable from "../../Components/Tables/BasicDataTable";
import { sizePerPageList } from "../../Constants/table";
import CustomTable from "../../Components/Tables/CustomTable";
import ReactDatePicker from "../../Components/DateRangePicker/ReactDatePicker";

import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { CheckLg } from "react-bootstrap-icons";


const WalletHistory = () => {
  const dispatch = useDispatch();
  const user = getUser();

  const {
    userWalletData,
    walletLoading,
    page,
    sizePerPage,
    totalSize,
    search,
    sortField,
    sortOrder,
    walletListData,
  } = useSelector((state) => state.walletReducer);

  const [data, setData] = useState([]);
  const [totalRows, setTotalRows] = useState(300);
  const [perPage, setPerPage] = useState(10);

  const [show, setShow] = useState(false);
  const [closeDate, setCloseDate] = useState(false);
  const [inputDate, setInputDate] = useState("");

  const [showDatePicker, setShowDatePicker] = useState(false)

  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ])


  const [rangeDate, setRangeDate] = useState([
    {
      startDate: addDays(new Date(), -7),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [dateRange, setDateRange] = useState([null, null]);

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
        dataField: "created",
        text: "Date",
        sort: true,
        formatter: (cellContent, row) => (
          <span>
            <div className="align-middle">
              {row?.created
                ? moment(row?.created).format("DD/MM/YYYY, h:mm:ss a")
                : "-"}
            </div>
          </span>
        ),
      },
      {
        dataField: "walletTransactionId",
        text: "Payment Id",
        sort: true,
        formatter: (cellContent, row) => {
          return (
            <span>
              {row?.walletTransactionId ? row?.walletTransactionId : "-"}
            </span>
          );
        },
      },
      {
        dataField: "paymentMode.modeName",
        text: "Payment Type",
        sort: true,
        formatter: (cellContent, row) => {
          return (
            <span>
              {row?.paymentMode?.modeName ? row?.paymentMode?.modeName : "-"}
            </span>
          );
        },
      },
      {
        dataField: "slipNo",
        text: "Slip No",
        sort: true,
        formatter: (cellContent, row) => {
          return (
            <div className="align-middle font-weight-normal">
              {!!row?.slipNo ? "#" + row?.slipNo : "-"}
            </div>
          );
        },
      },
      {
        dataField: "remark",
        text: "Remark",
        sort: true,
        formatter: (cellContent, row) => {
          return (
            <div className="align-middle font-weight-normal">
              {!!row?.remark ? row?.remark : "-"}
            </div>
          );
        },
      },
      {
        dataField: "requestAmount",
        text: "Request Amount",
        sort: true,
        formatter: (cellContent, row) => {
          return (
            <div className="align-middle text-primary">
              {row.requestAmount ? row.requestAmount : "-"}
            </div>
          );
        },
      },
      {
        dataField: "requestAmount",
        text: "Debit Amount",
        sort: true,
        formatter: (cellContent, row) => {
          return (
            <div className="align-middle text-primary">
              {!!row?.debitAmount ? row?.debitAmount : "-"}
            </div>
          );
        },
      },
      {
        dataField: "finalWalletAmount",
        text: "Final Amount",
        sortable: true,
        formatter: (cellContent, row) => {
          return (
            <div className="align-middle text-primary">
              {!!row?.finalWalletAmount ? row?.finalWalletAmount : "-"}
            </div>
          );
        },
      },
      {
        dataField: "statusOfWalletRequest",
        text: "Status",
        formatter: (cellContent, row) => {
          return (
            <div
              className={`align-middle text-${row?.statusOfWalletRequest === "approve"
                  ? "success"
                  : row?.statusOfWalletRequest === "pending"
                    ? "warning"
                    : "danger"
                }`}
            >

              <span className={`text-capitalize text-white p-1 rounded ${row?.statusOfWalletRequest === "approve"
                  ? "bg-success"
                  : row?.statusOfWalletRequest === "pending"
                    ? "bg-warning"
                    : "bg-danger"}`}>{row?.statusOfWalletRequest}</span>
            
            
            </div>
          );
        },
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
    setTotalRows(userWalletData.total);
  }, [userWalletData]);

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
      handleCloseCalendar();
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
    console.log({ payloadData });
    dispatch(fetchAllUserWalletList(payloadData));
  }, [payloadData]);

  const handlePageChange = (page) => {
    console.log({ page });
    setPayloadData((prev) => ({
      ...prev,
      page: page,
    }));
    // fetchData(page, perPage);
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
        dispatch(setSortFieldOfWallet(sortField));
        dispatch(setSortOrderOfWallet(sortOrder.toUpperCase()));
        break;
      case "pagination":
        dispatch(setPerWallet(page));
        dispatch(setSizePerPageWallet(sizePerPage));
        break;
      default:
        break;
    }
  };

  const handleChangeDate = (e) => {
    console.log(e);
    setDates([e.selection])
  }

  return (
    <div className="bg-light">
      <Menu />
      <div className="container space-2">
        <div className="card">
          <div className="card-body p-4">
            <CustomTable
              showAddButton={false}
              pageOptions={pageOptions}
              keyField="wallet_id"
              data={walletListData}
              columns={columns}
              showSearch={false}
              onTableChange={onTableChange}
              withPagination={true}
              loading={walletLoading}
              withCard={false}
            >
              {/* {showDatePicker && ( */}
              {/* <ReactDatePicker
                setRangeDate={setDateRange}
                rangeDate={dateRange}
              /> */}
              {/* // )} */}
              <div className="position-relative" >

                <div className="d-flex justify-content-end">
                  <input type="text" style={{ width: "200px" }} className="form-control" onClick={() => setShowDatePicker(!showDatePicker)} value={moment(dates[0]?.startDate).format("MM DD, YYYY") + " - " + moment(dates[0]?.endDate).format("MM DD, YYYY")} />
                </div>
                <div className="position-absolute" style={{ right: "0px", top: "55px" }}>

                  {
                    showDatePicker &&
                    <DateRangePicker
                      ranges={dates}
                      onChange={handleChangeDate}
                      showSelectionPreview={true}
                    />
                  }
                </div>
              </div>
            </CustomTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletHistory;
