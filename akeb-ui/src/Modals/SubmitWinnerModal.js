import React, { useContext, useState } from "react";
import { Button, Divider, Modal, Space, Tag, Typography } from "antd";
import { TrophyFilled } from "@ant-design/icons";
import BlockchainContext from "../Context/BlockchainContext";
import BidsContext from "../Context/BidsContext";
import { submitWinnerInfoIntoBC } from "../Steps/Validate/Networks";
import StepStateContext from "../Context/StepStateContext";

const { Paragraph } = Typography;

const SubmitWinnerModal = ({ visible, setVisible }) => {
  const { stepsState, setStepsState } = useContext(StepStateContext);
  const { address, contract } = useContext(BlockchainContext);
  const {
    bid,
    nonce,
    setWinnerAddress,
    setWinnerBid,
    setWinnerNonce,
  } = useContext(BidsContext);
  const [loading, setLoading] = useState(false);

  const submitClicked = () => {
    setLoading(true);
    submitWinnerInfoIntoBC(
      contract,
      bid,
      address,
      nonce,
      setStepsState,
      stepsState,
      setWinnerAddress,
      setWinnerBid,
      setWinnerNonce,
      setVisible,
      setLoading
    );
  };

  return (
    <Modal
      visible={visible}
      setVisible={setVisible}
      title={
        <Space direction="horizontal">
          <TrophyFilled />
          It looks like you are the winner
        </Space>
      }
      okText="Submit"
      closable={false}
      footer={
        <Button type="primary" onClick={submitClicked} loading={loading}>
          Submit
        </Button>
      }
    >
      <Paragraph>
        Our algorithm has detected that you are the winner. Now you have to
        submit your bid information to blockchain.
      </Paragraph>
      <Divider />
      <Paragraph>
        By submitting the bid information, the following will be submitted into
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

export default SubmitWinnerModal;
