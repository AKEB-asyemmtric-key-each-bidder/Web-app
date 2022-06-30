import { Button } from "antd";
import React, { useContext, useState } from "react";
import StepStateContext from "../Context/StepStateContext";
import BlockchainContext from "../Context/BlockchainContext";

const Enter = () => {
  const { stepsState, setStepsState } = useContext(StepStateContext);
  const { address, setAddress, contract } = useContext(BlockchainContext);
  const [loading, setLoading] = useState(false);

  const onEnterHandler = () => {
    registerBidder();
    setLoading(true);
    // setStepsState(stepsState + 1);
  };

  const registerBidder = async () => {
    await contract.methods
      .registerBidder()
      .send({ from: address }, function(error, res) {
        setLoading(false);

        if (error) {
          console.log("error", error);
          return;
        }
        console.log("res", res);
      });
    // console.log("str", str);
  };

  return (
    <Button
      type="primary"
      size="large"
      onClick={onEnterHandler}
      loading={loading}
    >
      Enter the auction!
    </Button>
  );
};

export default Enter;
