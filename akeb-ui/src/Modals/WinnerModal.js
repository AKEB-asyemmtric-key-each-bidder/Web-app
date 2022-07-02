import { Modal } from "antd";
import React from "react";

const WinnerModal = ({ winnerModalVisible, setWinnerModalVisible }) => {
  const onClose = () => {
    setWinnerModalVisible(false);
  };
  return (
    <Modal
      visible={winnerModalVisible}
      onCancel={onClose}
      onOk={onClose}
      title="Winner information"
    >
      Winner info
    </Modal>
  );
};

export default WinnerModal;
