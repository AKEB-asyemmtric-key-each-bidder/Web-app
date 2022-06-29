import { Button } from "antd";
import React, { useContext } from "react";
import BlockchainContext from "../Context/BlockchainContext";
import StepStateContext from "../Context/StepStateContext";

const Connect = () => {
  const { stepsState, setStepsState } = useContext(StepStateContext);
  const {
    web3,
    setWeb3,
    address,
    setAddress,
    contract,
    setContract,
  } = useContext(BlockchainContext);

  console.log("Web3", web3);

  const onConnectHandler = () => {
    setStepsState(stepsState + 1);
  };

  return (
    <Button type="primary" onClick={onConnectHandler} size="large">
      Connect your wallet
    </Button>
  );
};

export default Connect;
