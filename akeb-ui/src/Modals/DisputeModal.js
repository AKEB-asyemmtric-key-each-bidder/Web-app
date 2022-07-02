import { Modal, Tag, Typography } from "antd";
import React, { useContext } from "react";
import BidsContext from "../Context/BidsContext";

const { Paragraph } = Typography;

const DisputeModal = ({ disputeModalVisible, setDisputeModalVisible }) => {
  const { nonce, bid } = useContext(BidsContext);
  const onClose = () => {
    setDisputeModalVisible(false);
  };
  return (
    <Modal
      title="Dispute request"
      visible={disputeModalVisible}
      onCancel={onClose}
      onOk={onClose}
    >
      <Paragraph>
        By requesting dispute, the following information will be revealed to
        blockchain network to validate your request
      </Paragraph>
      <ul>
        <li>
          Nonce: <Tag>{nonce}</Tag>
        </li>
        <li>
          Bid: <Tag>{bid}</Tag>
        </li>
      </ul>
    </Modal>
  );
};

export default DisputeModal;
