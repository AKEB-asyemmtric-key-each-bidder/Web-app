import { Button, Card } from "antd";
import React, { useContext, useState } from "react";
import BlockchainContext from "../Context/BlockchainContext";
import ViewDisputedListModal from "../Modals/ViewDisputedListModal";
import resetSmartContract from "../Networks/ResetSM";

const SmartContractActions = () => {
  const [loading, setLoading] = useState(false);
  const { contract, address } = useContext(BlockchainContext);
  const [
    viewDisputedListModalVisible,
    setViewDisputedListModalVisible,
  ] = useState(false);

  const resetClicked = () => {
    setLoading(true);
    resetSmartContract(contract, setLoading, address);
  };

  const viewDisputedListClicked = () => {
    setViewDisputedListModalVisible(true);
  };

  return (
    <Card>
      <ul style={{ paddingLeft: "10px" }}>
        <li>
          <a
            href="https://rinkeby.etherscan.io/address/0x340cAbE162eA92b1CcBADb6eBf696369b2148798"
            target="_blank"
            rel="noopener noreferrer"
          >
            View the smart contract
          </a>
        </li>
        {contract && (
          <>
            <li>
              <Button
                type="link"
                style={{ paddingLeft: "0px" }}
                onClick={resetClicked}
                loading={loading}
              >
                Reset smart contract
              </Button>
            </li>
            <li>
              <Button
                type="link"
                style={{ paddingLeft: "0px" }}
                onClick={viewDisputedListClicked}
              >
                View disputed list
              </Button>
              <ViewDisputedListModal
                visible={viewDisputedListModalVisible}
                setVisible={setViewDisputedListModalVisible}
              />
            </li>
          </>
        )}
      </ul>
    </Card>
  );
};

export default SmartContractActions;
