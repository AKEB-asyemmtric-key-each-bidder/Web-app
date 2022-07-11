import { Button, Card } from "antd";
import React, { useContext, useState } from "react";
import BlockchainContext from "../Context/BlockchainContext";
import resetSmartContract from "../Networks/ResetSM";

const SmartContractActions = () => {
  const [loading, setLoading] = useState(false);
  const { contract, address } = useContext(BlockchainContext);

  const resetClicked = () => {
    setLoading(true);
    resetSmartContract(contract, setLoading, address);
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
      </ul>
    </Card>
  );
};

export default SmartContractActions;
