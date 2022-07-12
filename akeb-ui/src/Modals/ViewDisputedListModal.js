import React, { useEffect } from "react";
import { Button, Modal } from "antd";
import ViewDisputedListTable from "../Tables/ViewDisputedListTable";

const ViewDisputedListModal = ({ visible, setVisible }) => {
  const cancelClicked = () => {
    setVisible(false);
  };

  useEffect(() => {
    visible && console.log("in view disputed list modal");
  }, [visible]);

  return (
    <Modal
      visible={visible}
      setVisible={setVisible}
      onCancel={cancelClicked}
      title="List of disputed bidders"
      footer={null}
    >
      <ViewDisputedListTable />
    </Modal>
  );
};

export default ViewDisputedListModal;
