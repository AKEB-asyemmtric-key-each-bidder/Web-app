import React from "react";
import { MoneyCollectFilled } from "@ant-design/icons";
import { Result } from "antd";
import BidForm from "./BidForm";

const Bid = () => {
  return (
    <Result
      icon={<MoneyCollectFilled />}
      title="Please enter your bid"
      subTitle="Combination of bid and nonce will be hashed (SHA256) and submitted to the blockchain"
      extra={<BidForm />}
    />
  );
};

export default Bid;
