import { Button } from "antd";
import React, { useContext } from "react";
import StepStateContext from "../Context/StepStateContext";
import BlockchainContext from "../Context/BlockchainContext";

const Enter = () => {
  const { stepsState, setStepsState } = useContext(StepStateContext);
  const { address, setAddress, contract } = useContext(BlockchainContext);

  const onEnterHandler = () => {
    getSampleString();
    // setStepsState(stepsState + 1);
  };

  const getSampleString = async () => {
    const str = await contract.methods.getSampleString().call();
    console.log("str", str);
  };

  return (
    <Button type="primary" size="large" onClick={onEnterHandler}>
      Enter the auction!
    </Button>
  );
};

export default Enter;
