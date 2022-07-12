import React, { useContext, useEffect, useState } from "react";
import { Button, Modal } from "antd";
import BlockchainContext from "../Context/BlockchainContext";
import ViewDisputedListTable from "../Tables/ViewDisputedListTable";
import fetchListOfDisputers from "../Networks/FetchListOfDisputers";
import Spinner from "../Spinners/Spinner";

const ViewDisputedListModal = ({ visible, setVisible }) => {
  const { contract } = useContext(BlockchainContext);
  const [loadingData, setLoadingData] = useState(true);
  const cancelClicked = () => {
    setVisible(false);
  };

  useEffect(() => {
    visible && fetchListOfDisputers(contract);
  }, [visible]);

  return (
    <Modal
      visible={visible}
      setVisible={setVisible}
      onCancel={cancelClicked}
      title="List of disputed bidders"
      footer={null}
    >
      {loadingData ? <Spinner /> : <ViewDisputedListTable />}
    </Modal>
  );
};

export default ViewDisputedListModal;
