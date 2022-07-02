import { Divider, Modal, Tag, Typography } from "antd";
import React, { useContext, useState } from "react";
import BidsContext from "../Context/BidsContext";

const { Paragraph } = Typography;

const DisputeModal = ({ disputeModalVisible, setDisputeModalVisible }) => {
  const { nonce, bid } = useContext(BidsContext);
  const [loading, setLoading] = useState(false);
  const onClose = () => {
    setDisputeModalVisible(false);
  };

  const okClicked = () => {
    setLoading(true);
  };

  return (
    <Modal
      title="Dispute request"
      visible={disputeModalVisible}
      onCancel={onClose}
      onOk={okClicked}
      okText="Dispute"
      okButtonProps={{ type: "danger", loading: loading }}
    >
      <Paragraph>
        If you think there is a mistake in finding the winner, you can dispute
      </Paragraph>
      <Divider />
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
