import React from "react";
import { Table } from "antd";

const ViewDisputedListTable = ({ data }) => {
  const cols = [
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Nonce",
      dataIndex: "nonce",
      key: "nonce",
    },
    {
      title: "Bid",
      dataIndex: "bid",
      key: "bid",
    },
  ];
  return <Table dataSource={data} columns={cols} />;
};

export default ViewDisputedListTable;
