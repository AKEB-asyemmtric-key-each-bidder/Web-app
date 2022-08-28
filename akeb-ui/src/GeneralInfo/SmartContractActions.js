import { Button, Card } from "antd";
import React, { useContext, useState } from "react";
import BlockchainContext from "../Context/BlockchainContext";
import GasCostModal from "../Modals/GasCostsModal";
import ViewDisputedListModal from "../Modals/ViewDisputedListModal";
import resetSmartContract from "../Networks/ResetSM";

const SmartContractActions = () => {
  const [loading, setLoading] = useState(false);
  const { contract, address } = useContext(BlockchainContext);
  const [
    viewDisputedListModalVisible,
    setViewDisputedListModalVisible,
  ] = useState(false);
  const [gasCostModalVisible, setGasCostModalVisible] = useState(false);

  const resetClicked = () => {
    setLoading(true);
    resetSmartContract(contract, setLoading, address);
  };

  const viewDisputedListClicked = () => {
    setViewDisputedListModalVisible(true);
  };

  const gasCostClicked = () => {
    setGasCostModalVisible(true);
  };

  return (
    <Card>
      <ul style={{ paddingLeft: "10px" }}>
        <li>
          <a
            href="https://rinkeby.etherscan.io/address/0xa2B9A6507E8185Ee652BB346034b5B47d581F0C4"
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
        <li>
          <Button
            type="link"
            style={{ paddingLeft: "0px" }}
            onClick={gasCostClicked}
          >
            Gas costs
          </Button>
          <GasCostModal
            visible={gasCostModalVisible}
            setVisible={setGasCostModalVisible}
          />
        </li>
      </ul>
    </Card>
  );
};

export default SmartContractActions;
