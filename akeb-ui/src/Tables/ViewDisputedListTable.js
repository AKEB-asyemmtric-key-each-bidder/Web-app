import React from "react";
import { Space, Table, Tag } from "antd";

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
      render: (bid) => (
        <Space direction="horizontal">
          {bid}
          <Tag color="#108ee9">GWEI</Tag>
        </Space>
      ),
    },
  ];
  return <Table dataSource={data} columns={cols} />;
};

export default ViewDisputedListTable;
