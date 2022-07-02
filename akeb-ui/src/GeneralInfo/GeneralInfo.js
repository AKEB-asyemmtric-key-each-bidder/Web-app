import { Col, Row } from "antd";
import React, { useContext } from "react";
import BidsContext from "../Context/BidsContext";
import BlockchainContext from "../Context/BlockchainContext";
import GeneralInfoCard from "./GeneralInfoCard";
import WinnerCard from "./WinnerCard";

const GeneralInfo = () => {
  const { address } = useContext(BlockchainContext);
  const { nonce, bid, encodedBid } = useContext(BidsContext);

  return (
    <Row gutter={[8, 8]}>
      <Col span={12}>
        <GeneralInfoCard title="Address" value={address} />
      </Col>
      <Col span={12}>
        <GeneralInfoCard title="Nonce" value={nonce} />
      </Col>
      <Col span={12}>
        <GeneralInfoCard title="Bid" value={bid} suffix="Ether" />
      </Col>
      <Col span={12}>
        <GeneralInfoCard title="Encoded value" value={encodedBid} />
      </Col>
      <Col span={12}>
        <GeneralInfoCard title="Dispute" value="No" />
      </Col>
      <Col span={12}>
        <WinnerCard />
      </Col>
    </Row>
  );
};

export default GeneralInfo;
