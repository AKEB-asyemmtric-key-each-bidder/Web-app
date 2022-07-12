import React from "react";
import { Button, Modal } from "antd";

const ViewDisputedListModal = ({ visible, setVisible }) => {
  const cancelClicked = () => {
    setVisible(false);
  };

  return (
    <Modal
      visible={visible}
      setVisible={setVisible}
      onCancel={cancelClicked}
      title="List of disputed bidders"
      footer={null}
    >
      Disputed bidders
    </Modal>
  );
};

export default ViewDisputedListModal;
