import { Button, Form, Input, Result } from "antd";
import React, { useContext } from "react";
import { InteractionFilled } from "@ant-design/icons";
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

  const NonceForm = () => {
    return (
      <Form layout="vertical" name="passphraseForm" onFinish={onFinish}>
        <Form.Item
          label="Enter your nonce"
          name="nonce"
          rules={[
            {
              required: true,
              message: "Nonce is required",
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

  return (
    <Result
      icon={<InteractionFilled rotate={90} />}
      title="Please enter your nonce"
      subTitle="Nonce will be added to bid for randomizing value and making it harder to guess"
      extra={<NonceForm />}
    />
  );
};

export default Nonce;
