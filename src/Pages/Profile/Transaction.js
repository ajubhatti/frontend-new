import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "./Menu";
import Table from "./Table";
import { getUser } from "../../Helper/LocalStorage";
import { getActivityData } from "./store/actions";
import moment from "moment";

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
      name: "_id",
      selector: "_id",
      sortable: false,
      Cell: (props) => <div>{props?.page * 10 + props?.index + 1}</div>,
    },
    {
      name: "slip No",
      selector: "slipNo",
      sortable: true,
      cell: (d) => (
        <div className="align-middle text-secondary font-weight-normal">
          #{d?.slipNo}
        </div>
      ),
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
      name: "amount",
      selector: "amount",
      sortable: true,
      cell: (d) => (
        <div className="align-middle text-primary">${d?.amount}</div>
      ),
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
            <Table columns={columns} data={activity.data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTransaction;
