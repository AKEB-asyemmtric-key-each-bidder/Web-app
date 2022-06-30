import { Button, Form, Input } from "antd";
import React from "react";

const Passsphrase = () => {
  const onFinish = () => {
    console.log("on finish clicked");
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
