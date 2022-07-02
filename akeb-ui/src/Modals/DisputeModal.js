import { Modal } from "antd";
import React from "react";

const DisputeModal = ({ disputeModalVisible, setDisputeModalVisible }) => {
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
      DisputeModal
    </Modal>
  );
};

export default DisputeModal;
