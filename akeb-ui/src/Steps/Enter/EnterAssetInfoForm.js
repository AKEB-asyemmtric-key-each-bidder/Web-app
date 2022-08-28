import React from "react";
import { Form, Input } from "antd";

const EnterAssetInfoForm = ({ form }) => {
  return (
    <Form form={form} layout="vertical" name="asset_description">
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
            message: "Asset name is required",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[
          {
            required: true,
            message: "Asset description is required",
          },
        ]}
      >
        <Input.TextArea showCount={true} maxLength={200} />
      </Form.Item>
    </Form>
  );
};

export default EnterAssetInfoForm;
