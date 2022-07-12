import { Button, Divider, Modal, Space, Tag, Typography } from "antd";
import { WarningFilled } from "@ant-design/icons";
import React, { useContext, useState } from "react";
import BlockchainContext from "../Context/BlockchainContext";
import BidsContext from "../Context/BidsContext";
import StepStateContext from "../Context/StepStateContext";

const { Paragraph } = Typography;

const DisputeMandatoryModal = ({ visible, setVisible }) => {
  const { address, contract } = useContext(BlockchainContext);
  const { nonce, bid } = useContext(BidsContext);
  const { stepsState, setStepsState } = useContext(StepStateContext);
  const [loading, setLoading] = useState(false);

  const disputeClicked = () => {
    setLoading(true);
  };

  return (
    <Modal
      closable={false}
      visible={visible}
      setVisible={setVisible}
      title={
        <Space direction="horizontal">
          <WarningFilled style={{ color: "orange" }} />
          Oops! we have detected a problem!
        </Space>
      }
      footer={
        <Button type="danger" onClick={disputeClicked} loading={loading}>
          Dispute
        </Button>
      }
    >
      <Paragraph>
        Our algorithm has detected that although you are the highest bid,
        someone else has been announced as a winner. You have to dispute
      </Paragraph>
      <Divider />
      <Paragraph>
        By disputing, the following informaiton will be submitted into the
        blockchain:
        <ul>
          <li>
            Address: <Tag>{address}</Tag>
          </li>
          <li>
            Nonce: <Tag>{nonce}</Tag>
          </li>
          <li>
            Bid: <Tag>{bid}</Tag>
          </li>
        </ul>
      </Paragraph>
    </Modal>
  );
};

export default DisputeMandatoryModal;
