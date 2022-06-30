import { Button, Form, Input } from "antd";
import React, { useContext } from "react";
import PassphraseContext from "../Context/PassphraseContext";
import StepStateContext from "../Context/StepStateContext";

const Passsphrase = () => {
  const { setPassphrase } = useContext(PassphraseContext);
  const { stepsState, setStepsState } = useContext(StepStateContext);

  const onFinish = (values) => {
    const input = values["passphrase"];
    setPassphrase(input);
    setStepsState(stepsState + 1);
  };

  return (
    <Form layout="vertical" name="passphraseForm" onFinish={onFinish}>
      <Form.Item
        label="Enter your passphrase"
        name="passphrase"
        rules={[
          {
            required: true,
            message: "Passphrase is required",
          },
        ]}
        help="Never share this key with anyone!"
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

export default Passsphrase;
