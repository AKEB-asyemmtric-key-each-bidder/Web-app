import React, { useContext, useState } from "react";
import { Button, Result } from "antd";
import { RightCircleFilled } from "@ant-design/icons";
import StepStateContext from "../Context/StepStateContext";
import BlockchainContext from "../Context/BlockchainContext";

const Enter = () => {
  const { stepsState, setStepsState } = useContext(StepStateContext);
  const { address, contract } = useContext(BlockchainContext);
  const [loading, setLoading] = useState(false);

  const onEnterHandler = () => {
    // registerBidder();
    // setLoading(true);
    setStepsState(stepsState + 1);
  };

  const registerBidder = async () => {
    await contract.methods
      .registerBidder()
      .send({ from: address }, function(error, res) {
        setLoading(false);

        if (error) {
          console.log("error in registering bidder smart contract", error);
          return;
        }

        setStepsState(stepsState + 1);
        // console.log("res", res);
      });
  };

  return (
    <Result
      icon={<RightCircleFilled />}
      title="Ready to enter the auction?"
      extra={
        <Button
          type="primary"
          size="large"
          onClick={onEnterHandler}
          loading={loading}
        >
          Enter the auction!
        </Button>
      }
    />
  );
};

export default Enter;
