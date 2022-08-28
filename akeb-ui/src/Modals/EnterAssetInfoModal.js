import React from "react";
import { Modal } from "antd";

const EnterAssetModal = ({ visible, setVisible }) => {
  const cancelClicked = () => {
    setVisible(false);
  };

  return (
    <Modal
      visible={visible}
      setVisible={setVisible}
      title="Enter Asset Information"
      onCancel={cancelClicked}
    >
      Asset Modal
    </Modal>
  );
};

export default EnterAssetModal;
