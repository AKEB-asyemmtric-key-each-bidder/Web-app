import { Button } from "antd";
import React, { useState } from "react";
import DisputeModal from "../../Modals/DisputeModal";

const Dispute = () => {
  const [disputeModalVisible, setDisputeModalVisible] = useState(false);

  const disputeClicked = () => {
    setDisputeModalVisible(true);
  };

  return (
    <React.Fragment>
      <Button size="large" type="danger" onClick={disputeClicked}>
        Dispute
      </Button>
      <DisputeModal
        disputeModalVisible={disputeModalVisible}
        setDisputeModalVisible={setDisputeModalVisible}
      />
    </React.Fragment>
  );
};

export default Dispute;
