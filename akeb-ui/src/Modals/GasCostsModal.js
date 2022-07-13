import React from "react";
import { Modal } from "antd";

const GasCostModal = ({ visible, setVisible }) => {
  const cancelClicked = () => {
    setVisible(false);
  };

  return (
    <Modal
      visible={visible}
      setVisible={setVisible}
      title="Gas costs"
      footer={null}
      onCancel={cancelClicked}
    >
      Gas costs
    </Modal>
  );
};

export default GasCostModal;
