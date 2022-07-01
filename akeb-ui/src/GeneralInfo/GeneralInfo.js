import { Col, Row } from "antd";
import React from "react";
import GeneralInfoCard from "./GeneralInfoCard";

const GeneralInfo = () => {
  return (
    <Row gutter={8}>
      <Col span={4}>
        <GeneralInfoCard title="Address" value="DDD" />
      </Col>
      <Col span={4}>
        <GeneralInfoCard title="Nonce" value="nonce" />
      </Col>
      <Col span={4}>
        <GeneralInfoCard title="Bid" value="bid" />
      </Col>
      <Col span={4}>
        <GeneralInfoCard title="Encoded value" value="encoded" />
      </Col>
      <Col span={4}>
        <GeneralInfoCard title="Dispute" value="No" />
      </Col>
      <Col span={4}>
        <GeneralInfoCard title="Winner" value="winner" />
      </Col>
    </Row>
  );
};

export default GeneralInfo;
