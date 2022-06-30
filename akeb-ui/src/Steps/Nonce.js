import { Button, Form, Input } from "antd";
import React, { useContext } from "react";
import BidsContext from "../Context/BidsContext";
import StepStateContext from "../Context/StepStateContext";

const Nonce = () => {
  const { setNonce } = useContext(BidsContext);
  const { stepsState, setStepsState } = useContext(StepStateContext);

  const onFinish = (values) => {
    const input = values["nonce"];
    setNonce(input);
    setStepsState(stepsState + 1);
  };

  return (
    <Form layout="vertical" name="passphraseForm" onFinish={onFinish}>
      <Form.Item
        label="Enter your nonce"
        name="nonce"
        rules={[
          {
            required: true,
            message: "Passphrase is required",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Nonce;
