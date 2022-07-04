import React from "react";
import Menu from "./Menu";
import Table from "./Table";

const ProfileTransaction = () => {
  return (
    <div className="bg-light">
      <Menu />
      <div className="container space-2">
        <div className="card">
          <div className="card-body p-4">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTransaction;
