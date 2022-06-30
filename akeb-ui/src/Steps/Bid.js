import { Button, Col, Form, InputNumber, Row, Space } from "antd";
import React, { useContext } from "react";
import PassphraseContext from "../Context/PassphraseContext";
import BidTimer from "./Bid-Timer";

const Bid = () => {
  const { passphrase } = useContext(PassphraseContext);

  console.log("passphrase in bid", passphrase);

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
    </Space>
  );
};

export default Bid;
