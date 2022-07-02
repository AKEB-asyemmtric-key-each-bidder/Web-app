import { Button, Card } from "antd";
import React from "react";

const ViewSmartContract = () => {
  return (
    <Card>
      <a
        href="https://rinkeby.etherscan.io/address/0x06602d0adf53e42c9afcd163cc3e0f1c46cd8c88"
        target="_blank"
        rel="noopener noreferrer"
      >
        View the smart contract
      </a>
    </Card>
  );
};

export default ViewSmartContract;
