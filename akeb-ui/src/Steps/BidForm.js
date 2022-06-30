import React, { useContext } from "react";
import { Button, Form, InputNumber } from "antd";
import BidsContext from "../Context/BidsContext";

const BidForm = () => {
  const { bid, setBid, passphrase } = useContext(BidsContext);

  console.log("bid in bidForm", bid);

  const onBidFormFinished = (values) => {
    const input = values["bid"];
    setBid(input);
  };

  return (
    <Form layout="vertical" onFinish={onBidFormFinished}>
      <Form.Item
        label="Enter your bid"
        name="bid"
        rules={[
          {
            required: true,
            message: "Bid number is required",
          },
        ]}
      >
        <InputNumber
          addonAfter="Ether"
          style={{ minWidth: "200px" }}
          size="large"
          step="0.0000001"
          stringMode
        />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};

export default BidForm;
