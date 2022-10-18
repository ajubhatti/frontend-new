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
          #{d.slipNo}
        </div>
      ),
    },
    {
      name: "isActive",
      selector: "isActive",
      sortable: true,
      cell: (d) => (
        <div className="align-middle">
          <span>{d.isActive}</span>
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
      sortable: true,
      cell: (d) => (
        <div className="align-middle text-secondary">{d.created}</div>
      ),
    },
    {
      name: "Status",
      selector: "statusOfWalletRequest",
      sortable: true,
      cell: (d) => (
        <div
          className={`align-middle text-${
            d.statusOfWalletRequest === "completed"
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

  console.log({ user, userWalletData });

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
            <Table data={userWalletData} columns={columns} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletHistory;
