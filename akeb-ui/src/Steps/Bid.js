import { Button, Col, Form, InputNumber, Row, Space } from "antd";
import React, { useContext } from "react";
import PassphraseContext from "../Context/PassphraseContext";
import BidTimer from "./Bid-Timer";
import PassphraseCard from "./PassphraseCard";

const Bid = () => {
  const { passphrase } = useContext(PassphraseContext);

  return (
    <Space direction="vertical" size="large">
      <BidTimer />

      <Form layout="vertical">
        <Form.Item
          label="Enter your bid"
          rules={[
            {
              required: true,
              message: "Bid number is required",
            },
          ]}
        >
          <InputNumber
            style={{ minWidth: "200px" }}
            size="large"
            step="0.0000001"
            stringMode
          />
        </Form.Item>
        <Button type="primary" htmlType="submit" block size="large">
          Submit
        </Button>
      </Form>

      <PassphraseCard />
    </Space>
  );
};

export default Bid;
