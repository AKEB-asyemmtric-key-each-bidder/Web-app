import { Col, Row } from "antd";
import React, { useContext } from "react";
import BlockchainContext from "../Context/BlockchainContext";
import GeneralInfoCard from "./GeneralInfoCard";

const GeneralInfo = () => {
  const { address } = useContext(BlockchainContext);

  return (
    <Row gutter={[8, 8]}>
      <Col span={12}>
        <GeneralInfoCard title="Address" value={address} />
      </Col>
      <Col span={12}>
        <GeneralInfoCard title="Nonce" value="nonce" />
      </Col>
      <Col span={12}>
        <GeneralInfoCard title="Bid" value="bid" />
      </Col>
      <Col span={12}>
        <GeneralInfoCard title="Encoded value" value="encoded" />
      </Col>
      <Col span={12}>
        <GeneralInfoCard title="Dispute" value="No" />
      </Col>
      <Col span={12}>
        <GeneralInfoCard title="Winner" value="winner" />
      </Col>
    </Row>
  );
};

export default GeneralInfo;
