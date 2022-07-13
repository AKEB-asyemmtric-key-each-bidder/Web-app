import React from "react";
import { DollarCircleFilled } from "@ant-design/icons";
import { Result } from "antd";
import BidForm from "./BidForm";

const Bid = () => {
  return (
    <Result
      icon={<DollarCircleFilled />}
      title="Please enter your bid"
      subTitle={
        <p>
          Combination of bid and nonce will be hashed (SHA256) and submitted to
          the blockchain.
          <br /> Metamask screen will pop up.
        </p>
      }
      extra={<BidForm />}
    />
  );
};

export default Bid;
