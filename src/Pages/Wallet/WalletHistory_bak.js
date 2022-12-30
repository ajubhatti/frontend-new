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

const WalletHistory = () => {
  const dispatch = useDispatch();
  const user = getUser();

  const ref = useRef();
  const {
    userWalletData,
    loading,
    subscriptions,
    page,
    sizePerPage,
    totalSize,
    activeStatus,
    loadingTotalSubscriptionDetails,
    totalSubscriptionDetails,
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
        name: "#",
        // selector: "_id",
        sortable: false,
        cell: (props) => <div>{props.page * 10 + props.index + 1}</div>,
      },
      {
        name: "Date",
        selector: "created",
        sortable: true,
        cell: (d) => (
          <div className="align-middle">
            {moment(d.created).format("DD-MM-YYYY h:mm:ss a")}
          </div>
        ),
      },
      {
        name: "Payment Id",
        selector: "walletTransactionId",
        sortable: true,
        cell: (d) => (
          <div className="align-middle font-weight-normal">
            {!!d?.walletTransactionId ? d?.walletTransactionId : "-"}
          </div>
        ),
      },
      {
        name: "Payment Type",
        selector: "paymentMode.modeName",
        // sortable: true,
        cell: (d) => (
          <div className="align-middle font-weight-normal">
            {!!d?.paymentMode?.modeName ? d?.paymentMode?.modeName : "-"}
          </div>
        ),
      },
      {
        name: "Slip No",
        selector: "slipNo",
        sortable: true,
        cell: (d) => (
          <div className="align-middle font-weight-normal">
            {!!d?.slipNo ? "#" + d?.slipNo : "-"}
          </div>
        ),
      },
      {
        name: "Remark",
        selector: "remark",
        sortable: true,
        cell: (d) => (
          <div className="align-middle font-weight-normal">
            {!!d?.remark ? d?.remark : "-"}
          </div>
        ),
      },

      {
        name: "Request Amount",
        selector: "requestAmount",
        sortable: true,
        cell: (d) => (
          <div className="align-middle text-primary">{d.requestAmount}</div>
        ),
      },
      {
        name: "Debit Amount",
        selector: "requestAmount",
        sortable: true,
        cell: (d) => (
          <div className="align-middle text-primary">
            {!!d?.debitAmount ? d?.debitAmount : "-"}
          </div>
        ),
      },
      {
        name: "Final Amount",
        selector: "finalWalletAmount",
        sortable: true,
        cell: (d) => (
          <div className="align-middle text-primary">
            {!!d?.finalWalletAmount ? d?.finalWalletAmount : "-"}
          </div>
        ),
      },
      {
        name: "Status",
        selector: "statusOfWalletRequest",
        // sortable: true,
        cell: (d) => (
          <div
            className={`align-middle text-${
              d.statusOfWalletRequest === "approve"
                ? "success"
                : d.statusOfWalletRequest === "pending"
                ? "warning"
                : "danger"
            }`}
          >
            {d.statusOfWalletRequest}
          </div>
        ),
      },
      {
        name: "Is Active",
        selector: "isActive",
        // sortable: true,
        cell: (d) => (
          <div className="align-middle">
            <span className="text-capitalize">{"" + d.isActive}</span>
          </div>
        ),
      },
    ],
    []
  );
  const columns2 = useMemo(
    () => [
      {
        dataField: "created",
        text: "Date",
        sort: true,
        formatter: (cellContent, row) => (
          <span>
            <div className="align-middle">
              {row?.created
                ? moment(row?.created).format("DD/MM/YYYY h:mm:ss a")
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
              className={`align-middle text-${
                row?.statusOfWalletRequest === "approve"
                  ? "success"
                  : row?.statusOfWalletRequest === "pending"
                  ? "warning"
                  : "danger"
              }`}
            >
              {row?.statusOfWalletRequest}
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

  // const conditionalRowStyles = [
  //   {
  //     when: (row) => row.statusOfWalletRequest === "approve",
  //     style: {
  //       backgroundColor: "rgba(63, 195, 128, 0.9)",
  //       color: "white",
  //       "&:hover": {
  //         cursor: "pointer",
  //       },
  //     },
  //   },
  //   {
  //     when: (row) => row.statusOfWalletRequest === "pending",
  //     style: {
  //       backgroundColor: "rgba(248, 148, 6, 0.9)",
  //       color: "white",
  //       "&:hover": {
  //         cursor: "pointer",
  //       },
  //     },
  //   },
  //   {
  //     when: (row) =>
  //       row.statusOfWalletRequest !== "approve" &&
  //       row.statusOfWalletRequest !== "pending",
  //     style: {
  //       backgroundColor: "rgba(242, 38, 19, 0.9)",
  //       color: "white",
  //       "&:hover": {
  //         cursor: "not-allowed",
  //       },
  //     },
  //   },
  // ];

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

  useOutsideClick(ref, handleCloseCalendar);
  {
    console.log("walletListData----", { userWalletData, walletListData });
  }
  return (
    <div className="bg-light">
      <Menu />
      <div className="container space-2">
        <div className="card">
          <div className="card-body p-4">
            <BasicDataTable
              data={userWalletData.data}
              columns={columns}
              totalRows={totalRows}
              handlePageChange={handlePageChange}
              handlePerRowsChange={handlePerRowsChange}
              // conditionalRowStyles={conditionalRowStyles}
              showDatePicker={true}
              setDateRange={setDateRange}
              dateRange={dateRange}
            />
            <CustomTable
              showAddButton={false}
              pageOptions={pageOptions}
              keyField="wallet_id"
              data={walletListData}
              columns={columns2}
              showSearch={false}
              onTableChange={onTableChange}
              withPagination={false}
              loading={loading}
              withCard={false}
            ></CustomTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletHistory;
