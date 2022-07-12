import React from "react";
import { Row, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Spinner = () => {
  const spinIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );

  return (
    <Row justify="center">
      <Spin indicator={spinIcon} />
    </Row>
  );
};

export default Spinner;
