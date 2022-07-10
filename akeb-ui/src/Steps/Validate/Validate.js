import React, { useContext, useEffect, useState } from "react";
import { ExperimentFilled } from "@ant-design/icons";
import { Button, Result } from "antd";
import StepStateContext from "../../Context/StepStateContext";
import fetchWinnerFromBackEnd, { fetchWinnerInfoFromBC } from "./Networks";
import compareBidWithWinnerValue from "./Logic";
import BidsContext from "../../Context/BidsContext";
import BlockchainContext from "../../Context/BlockchainContext";

const Validate = () => {
  const { stepsState, setStepsState } = useContext(StepStateContext);
  const { bid } = useContext(BidsContext);
  const [winnerValue, setWinnerValue] = useState();
  const [loading, setLoading] = useState(false);

  // 0: winnerValue > bid
  // 1 : winnerValue == bid
  // 2: winnerValue < bid
  const [bidderPosition, setBidderPosition] = useState();

  const { contract, address } = useContext(BlockchainContext);

  const validateClicked = () => {
    setLoading(true);
    performLoop();
  };

  const performLoop = () => {
    console.log("in Backend loop");
    const timeOutID = setInterval(() => {
      fetchWinnerFromBackEnd(setWinnerValue, timeOutID);
    }, 3000);
    return () => clearInterval(timeOutID);
  };

  useEffect(() => {
    winnerValue != -1000 &&
      compareBidWithWinnerValue(winnerValue, bid, setBidderPosition);
  }, [winnerValue]);

  useEffect(() => {
    bidderPosition == 0 && performBCLoop();
  });

  const performBCLoop = () => {
    console.log("In BC loop");
    const intervalID = setInterval(() => {
      fetchWinnerInfoFromBC(contract);
    }, 3000);
  };

  return (
    <Result
      icon={<ExperimentFilled spin={loading} />}
      title="Calculating the winner & validating it..."
      subTitle={`Seconds remaining: 10`}
      extra={
        <Button
          loading={loading}
          size="large"
          type="primary"
          onClick={validateClicked}
        >
          Validate
        </Button>
      }
    />
  );
};

export default Validate;
