import React, { useEffect, useState } from "react";
import Table from "../../Components/Tables/Table";
import { getUser } from "../../Helper/LocalStorage";
import FormModal from "../Profile/Deposits/FormModal";
import * as moment from "moment";

const headerName = [
  {
    label: "Date",
    key: "created",
    prop: "created",
    title: "Date",
    cell: (row) => moment(row.created_at).format("DD-MM-YYYY H:mm:ss"),
    isSortable: true,
  },
  {
    label: "Type",
    key: "amountType",
    prop: "amountType",
    title: "Type",
    isSortable: true,
    isFilterable: true,
  },
  {
    label: "Reference No",
    key: "slipNo",
    prop: "slipNo",
    title: "Reference No",
    isSortable: true,
  },
  {
    label: "Amount",
    key: "requestAmount",
    prop: "requestAmount",
    title: "Amount",
    isSortable: true,
  },
  {
    label: "Remark",
    key: "remark",
    prop: "remark",
    title: "Remark",
    isSortable: true,
    isFilterable: true,
  },
  {
    label: "Status",
    key: "statusOfWalletRequest",
    prop: "statusOfWalletRequest",
    title: "Status",
    isSortable: true,
  },
];

const Wallet = (props) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const userDetails = getUser();
    const getWalletTransaction = async () => {
      await props.walletListing({ userId: userDetails.id }).then((res) => {
        setData(res.data);
      });
    };

    getWalletTransaction();
  }, [props]);

  const buttonHandler = () => {
    setOpen(true);
  };

  const modalHide = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="bg-light">
        <div className="container space-2">
          <div className="mb-9">
            <div className="mb-3">
              <h2 className="h5 mb-0">Your current Wallet</h2>
            </div>
            <div className="card-deck d-block d-md-flex">
              <div className="card mb-4 mb-md-0">
                <div className="card-body p-5">
                  <h4 className="h6">
                    Total Balance{" "}
                    <span className="btn btn-xs btn-soft-success">$1100</span>
                  </h4>
                  <p className="font-size-1">
                    With just a few taps, you can add money to your Wallet.
                  </p>
                  <button
                    className="btn btn-xs btn-primary transition-3d-hover mr-1"
                    onClick={buttonHandler}
                  >
                    Add Money
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="card-body p-5">
                  <h4 className="h6">
                    Min Amount{" "}
                    <span className="btn btn-xs btn-soft-success">$10</span>
                  </h4>
                  <p className="font-size-1">
                    Everyone wants their money transfers to be quick and easy.
                    Hence, to save on time and effort with the online money
                    transfers Badipay ‘Wallet to Wallet’ feature is the best
                    solution.
                  </p>
                  <button className="btn btn-xs btn-primary transition-3d-hover mr-1">
                    Transfer Money
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-9">
            <div className="mb-3">
              <h2 className="h5 mb-0">Your recent activity</h2>
            </div>
            <Table data={data} headerName={headerName} />
          </div>
        </div>
      </div>
      {open && <FormModal show={open} onHide={modalHide} {...props} />}
    </>
  );
};

export default Wallet;
