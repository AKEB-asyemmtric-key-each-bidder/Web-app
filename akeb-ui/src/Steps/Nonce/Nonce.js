import React, { useState } from "react";
import { Checkbox, Col, Row } from "antd";
import GeneratedNonce from "./GeneratedNonce";
import ManualNonce from "./ManualNonce";

const Nonce = () => {
  const [automatedNonce, setAutomatedNonce] = useState(true);
  // const onFinish = (values) => {
  //   const input = values["nonce"];
  //   setNonce(input);
  //   setStepsState(stepsState + 1);
  // };

  const checkboxClicked = (e) => {
    setAutomatedNonce(!e.target.checked);
  };

  return (
    <Row justify="center">
      <Col span={18}>
        {automatedNonce ? <GeneratedNonce /> : <ManualNonce />}
      </Col>
      <Col span={24} style={{ textAlign: "center" }}>
        <Checkbox onChange={checkboxClicked}>
          I want to enter my own nonce
        </Checkbox>
      </Col>
    </Row>
  );
};

export default Nonce;
