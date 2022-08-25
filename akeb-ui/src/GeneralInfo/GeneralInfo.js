import { Col, Row } from "antd";
import React, { useContext } from "react";
import BidsContext from "../Context/BidsContext";
import BlockchainContext from "../Context/BlockchainContext";
import GeneralInfoCard from "./GeneralInfoCard";
import SmartContractActions from "./SmartContractActions";

const GeneralInfo = () => {
  const { address } = useContext(BlockchainContext);
  const { nonce, bid, encodedBid } = useContext(BidsContext);

  return (
    <Row gutter={[8, 8]}>
      <Col span={24}>
        <GeneralInfoCard title="Address" value={address} />
      </Col>
      <Col span={14}>
        <GeneralInfoCard title="Nonce" value={nonce} />
      </Col>
      <Col span={10}>
        <GeneralInfoCard title="Bid" value={bid} suffix="Ether" />
      </Col>
      <Col span={24}>
        <GeneralInfoCard
          title="Encoded value (submitted to blockchain)"
          value={encodedBid}
        />
      </Col>
      <Col span={24}>
        <SmartContractActions />
      </Col>
    </Row>
  );
};

export default GeneralInfo;
