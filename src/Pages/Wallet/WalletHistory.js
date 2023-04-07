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
import {
  fetchAllUserWalletList,
  setPerWallet,
  setSizePerPageWallet,
  setSortFieldOfWallet,
  setSortOrderOfWallet,
} from "./store/actions";

const options = {
  fieldSeparator: ",",
  quoteStrings: '"',
  decimalSeparator: ".",
  showLabels: true,
  showTitle: true,
  title: "Wallet Histories",
  useTextFile: false,
  useBom: true,
  useKeysAsHeaders: true,
};

const csvExporter = new ExportToCsv(options);

const WalletHistory = () => {
  const dispatch = useDispatch();
  const user = getUser();
  const {
    walletLoading,
    page,
    sizePerPage,
    totalSize,
    search,
    sortField,
    sortOrder,
    walletListData,
  } = useSelector((state) => state.walletReducer);

  const [dateRangeValue, setDateRangeValue] = useState({
    start: null,
    end: null,
  });
  const [payloadData, setPayloadData] = useState({
    userId: user?.id,
    page: 1,
    limits: 25,
    sortBy: "created",
    orderBy: "desc",
    skip: 0,
    search: "",
    startDate: "", //"10-15-2022",
    endDate: "", //"10-30-2022",
  });
  const [searchString, setSearchString] = useState("");
  const [exportLoading, setExportLoading] = useState(false);

  const columns = useMemo(
    () => [
      {
        text: "No.",
        dataField: "no",

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
        formatter: (cell, row, rowIndex, formatExtraData) => (
          <div className="align-middle">
            {row?.created
              ? moment(row?.created).format("DD/MM/YYYY hh:mm:ss")
              : "-"}
          </div>
        ),
      },
      {
        text: "Payment Id",
        dataField: "walletTransactionId",
        sort: true,
        formatter: (cell, row, rowIndex, formatExtraData) => (
          <div>{row?.walletTransactionId ? row?.walletTransactionId : "-"}</div>
        ),
      },
      {
        text: "Payment Type",
        dataField: "paymentMode.modeName",
        sort: true,
        formatter: (cell, row, rowIndex, formatExtraData) => (
          <div>
            {row?.paymentMode?.modeName ? row?.paymentMode?.modeName : "-"}
          </div>
        ),
      },
      {
        text: "Slip No",
        dataField: "slipNo",
        sort: true,
        formatter: (cell, row, rowIndex, formatExtraData) => (
          <div className="align-middle font-weight-normal">
            {!!row?.slipNo ? "#" + row?.slipNo : "-"}
          </div>
        ),
      },
      {
        text: "Remark",
        dataField: "remark",
        sort: true,
        formatter: (cell, row, rowIndex, formatExtraData) => (
          <div className="align-middle font-weight-normal">
            {!!row?.remark ? row?.remark : "-"}
          </div>
        ),
      },
      {
        text: "Request Amount",
        dataField: "requestAmount",
        sort: true,
        formatter: (cell, row, rowIndex, formatExtraData) => (
          <div className="align-middle text-primary">
            {row?.requestAmount ? row?.requestAmount : "-"}
          </div>
        ),
      },
      {
        text: "Debit Amount",
        dataField: "debitAmount",
        sort: true,
        formatter: (cell, row, rowIndex, formatExtraData) => (
          <div className="align-middle text-primary">
            {!!row?.debitAmount ? row?.debitAmount : "-"}
          </div>
        ),
      },
      {
        text: "Final Amount",
        dataField: "finalWalletAmount",
        sortable: true,
        formatter: (cell, row, rowIndex, formatExtraData) => (
          <div className="align-middle text-primary">
            {!!row?.finalWalletAmount ? row?.finalWalletAmount : "-"}
          </div>
        ),
      },
      {
        text: "Status",
        dataField: "statusOfWalletRequest",
        formatter: (cell, row, rowIndex, formatExtraData) => (
          <div
            className={`align-middle text-${
              row?.statusOfWalletRequest === "approve"
                ? "success"
                : row?.statusOfWalletRequest === "pending"
                ? "warning"
                : "danger"
            }`}
          >
            <span
              className={`text-capitalize text-white p-1 rounded ${
                row?.statusOfWalletRequest === "approve"
                  ? "bg-success"
                  : row?.statusOfWalletRequest === "pending"
                  ? "bg-warning"
                  : "bg-danger"
              }`}
            >
              {row?.statusOfWalletRequest}
            </span>
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

  useEffect(() => {
    setPayloadData((previousData) => ({
      ...previousData,
      userId: user?.id,
      page: page,
      limits: sizePerPage,
      sortBy: "created",
      orderBy: "desc",
      skip: 0,
      search: "",
    }));
  }, [sizePerPage, page, user?.id]);

  useEffect(() => {
    dispatch(fetchAllUserWalletList(payloadData));
  }, [dispatch, payloadData]);

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
        fetchAllUserWalletList(payload, (status) => {
          if (status) {
            const exportData = status?.data?.map((item) => {
              return {
                date:
                  moment(item?.created).format("DD/MM/YYYY, h:mm:ss a") || "-",
                Payment_id: item?.walletTransactionId || "-",
                Payment_type: item?.paymentMode.modeName || "-",
                Slip_No: item?.slipNo || "-",
                Remark: item?.remark || "-",
                Request_Amount: item?.requestAmount || "-",
                Debit_Amount: item?.debitAmount || "-",
                Final_Wallet_Amount: item?.finalWalletAmount || "-",
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
      <div className="container space-2">
        <div className="card">
          <div className="card-body">
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
              <div className="wallet-search-heading">
                <div className="">
                  <label>Search</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="search"
                    onChange={handleSearch}
                  />
                </div>
                <CustomDateRangePicker
                  rangeDate={dateRangeValue}
                  setRangeDate={setDateRangeValue}
                />
                <div className="">
                  <button
                    className={`btn btn-secondary btn-md wallet-common-btn me-2${
                      exportLoading ? "disabled" : ""
                    }`}
                    onClick={handleFilterData}
                  >
                    Find
                  </button>
                  <button
                    className={`btn btn-secondary btn-md wallet-common-btn ${
                      exportLoading ? "disabled" : ""
                    }`}
                    onClick={handleCSV}
                  >
                    {exportLoading ? "Exporting.." : "Export CSV"}
                  </button>
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
