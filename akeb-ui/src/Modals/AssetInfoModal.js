import { Modal } from "antd";
import React from "react";

const AssetInfoModal = ({ visible, setVisible }) => {
  const cancelClicked = () => {
    setVisible(false);
  };

  return (
    <Modal
      visible={visible}
      setVisible={setVisible}
      onCancel={cancelClicked}
      footer={null}
      title="Asset Information"
    >
      Asset info
    </Modal>
  );
};

export default AssetInfoModal;
