import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "./Menu";
import { getUser } from "../../Helper/LocalStorage";
import { getActivityData } from "./store/actions";
import moment from "moment";
import BasicDataTable from "../../Components/Tables/BasicDataTable";

const ProfileTransaction = () => {
  const dispatch = useDispatch();
  const user = getUser();

  const { activity } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(
      getActivityData({
        userId: user.id,
      })
    );
  }, []);

  const columns = [
    {
      name: "created",
      selector: "created",
      sortable: true,
      cell: (d) => (
        <div className="align-middle text-secondary">
          {moment(d?.created).format("DD-MM-YYYY h:mm:ss a")}
        </div>
      ),
    },
    {
      name: "Payment type",
      selector: "type",
      sortable: true,
      cell: (d) => <div>{d.type}</div>,
    },
    {
      name: "Transaction Id",
      selector: "transactionId",
      sortable: false,
      Cell: (props) => <div>{props?.page * 10 + props?.index + 1}</div>,
    },
    {
      name: "slip No",
      selector: "slipNo",
      sortable: true,
      cell: (d) => <div>{d?.slipNo}</div>,
    },
    {
      name: "remark",
      selector: "remark",
      // sortable: true,
      cell: (d) => (
        <div className="align-middle">
          <span>{!!d?.remark ? d?.remark : "-"}</span>
        </div>
      ),
    },
    {
      name: "Customer No",
      selector: "customerNo",
      sortable: true,
      cell: (d) => <div className="align-middle ">{d?.customerNo}</div>,
    },
    {
      name: "Balance",
      selector: "userBalance",
      sortable: true,
      cell: (d) => <div className="align-middle ">{d?.userBalance}</div>,
    },
    {
      name: "Request Amount",
      selector: "requestAmount",
      sortable: true,
      cell: (d) => <div className="align-middle ">{d?.requestAmount}</div>,
    },
    {
      name: "Recharge Amount",
      selector: "rechargeAmount",
      sortable: true,
      cell: (d) => <div className="align-middle ">{d?.rechargeAmount}</div>,
    },
    {
      name: "CashBack Amount",
      selector: "cashBackAmount",
      sortable: true,
      cell: (d) => <div className="align-middle ">{d?.cashBackAmount}</div>,
    },
    {
      name: "FinalBalance",
      selector: "userFinalBalance",
      sortable: true,
      cell: (d) => <div className="align-middle ">{d?.userFinalBalance}</div>,
    },
    {
      name: "amount",
      selector: "amount",
      sortable: true,
      cell: (d) => <div className="align-middle ">{d?.amount}</div>,
    },
    {
      name: "created",
      selector: "created",
      // sortable: true,
      cell: (d) => (
        <div className="align-middle text-secondary">
          {moment(d?.created).format("DD-MM-YYYY h:mm:ss a")}
        </div>
      ),
    },
    {
      name: "status",
      selector: "status",
      // sortable: true,
      cell: (d) => (
        <div
          className={`align-middle text-${
            d?.status === "completed"
              ? "success"
              : d?.status === "pending"
              ? "warning"
              : "danger"
          }`}
        >
          {d?.status}
        </div>
      ),
    },
  ];

  console.log("activity", activity);

  return (
    <div className="bg-light">
      <Menu />
      <div className="container space-2">
        <div className="card">
          <div className="card-body p-4">
            <BasicDataTable columns={columns} data={activity.data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTransaction;
