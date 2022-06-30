import React from "react";
import { Space } from "antd";
import BidTimer from "./Bid-Timer";
import PassphraseCard from "./NonceCard";
import BidForm from "./BidForm";

const Bid = () => {
  return (
    <Space direction="vertical" size="large">
      <BidTimer />

      <BidForm />

      <PassphraseCard />
    </Space>
  );
};

export default Bid;
