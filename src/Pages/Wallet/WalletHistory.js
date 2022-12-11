import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../Helper/LocalStorage";
import Menu from "../Profile/Menu";
import Table from "../Profile/Table";
import { getAllUserWalletList } from "./store/actions";

const WalletHistory = () => {
  const dispatch = useDispatch();
  const user = getUser();
  const { userWalletData } = useSelector((state) => state.wallet);
  const [data, setData] = useState([]);

  const columns = [
    {
      name: "No",
      selector: "_id",
      sortable: false,
      Cell: (props) => <div>{props.page * 10 + props.index + 1}</div>,
    },
    {
      name: "slip No",
      selector: "slipNo",
      sortable: true,
      cell: (d) => (
        <div className="align-middle text-secondary font-weight-normal">
          {!!d?.slipNo ? "# " + d?.slipNo : "-"}
        </div>
      ),
    },
    {
      name: "isActive",
      selector: "isActive",
      // sortable: true,
      cell: (d) => (
        <div className="align-middle">
          <span className="text-capitalize">{"" + d.isActive}</span>
        </div>
      ),
    },
    {
      name: "Amount",
      selector: "requestAmount",
      sortable: true,
      cell: (d) => (
        <div className="align-middle text-primary">${d.requestAmount}</div>
      ),
    },
    {
      name: "Date",
      selector: "created",
      // sortable: true,
      cell: (d) => (
        <div className="align-middle text-secondary">
          {moment(d.created).format("DD-MM-YYYY h:mm:ss a")}
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
  ];

  const conditionalRowStyles = [
    {
      when: (row) => row.statusOfWalletRequest === "approve",
      style: {
        backgroundColor: "rgba(63, 195, 128, 0.9)",
        color: "white",
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
    {
      when: (row) => row.statusOfWalletRequest === "pending",
      style: {
        backgroundColor: "rgba(248, 148, 6, 0.9)",
        color: "white",
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
    {
      when: (row) =>
        row.statusOfWalletRequest !== "approve" &&
        row.statusOfWalletRequest !== "pending",
      style: {
        backgroundColor: "rgba(242, 38, 19, 0.9)",
        color: "white",
        "&:hover": {
          cursor: "not-allowed",
        },
      },
    },
  ];

  useEffect(() => {
    let payload = { userId: user.id };
    dispatch(getAllUserWalletList(payload));
  }, []);

  return (
    <div className="bg-light">
      <Menu />
      <div className="container space-2">
        <div className="card">
          <div className="card-body p-4">
            <Table
              data={userWalletData}
              columns={columns}
              // conditionalRowStyles={conditionalRowStyles}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletHistory;
