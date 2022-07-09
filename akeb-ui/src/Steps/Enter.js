import React, { useContext, useState } from "react";
import axios from "axios";
import { Button, Result } from "antd";
import { RightCircleFilled } from "@ant-design/icons";
import StepStateContext from "../Context/StepStateContext";
import BlockchainContext from "../Context/BlockchainContext";

const Enter = () => {
  const { stepsState, setStepsState } = useContext(StepStateContext);
  const { address, contract } = useContext(BlockchainContext);
  const [loading, setLoading] = useState(false);

  const onEnterHandler = () => {
    // To be uncommented in the final version
    // registerBidderOnBC();
    setLoading(true);

    // To be removed in final version
    registerBidderOnBackEnd();
  };

  const registerBidderOnBC = async () => {
    await contract.methods
      .registerBidder()
      .send({ from: address }, function(error, res) {
        setLoading(false);

        if (error) {
          console.log("error in registering bidder smart contract", error);
          return;
        }

        registerBidderOnBackEnd();
      });
  };

  const registerBidderOnBackEnd = () => {
    let url = "http://127.0.0.1:8000/increment-number-of-bidders/";
    axios.get(url).then((res, error) => {
      if (error) {
        console.log("error", error);
      }
      setStepsState(stepsState + 1);

      console.log("res", res);
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
