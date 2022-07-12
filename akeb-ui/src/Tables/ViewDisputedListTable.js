import React from "react";
import { Table } from "antd";

const ViewDisputedListTable = () => {
  const data = [
    {
      address: "0xsfdljfdsljflsj",
      nonce: "my nonce",
      bid: "0.000087",
    },
    {
      address: "0xffddccccss",
      nonce: "my nonce3",
      bid: "0.000056",
    },
  ];
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
