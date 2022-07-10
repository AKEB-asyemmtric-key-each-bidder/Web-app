import React, { useContext, useEffect, useState } from "react";
import { ExperimentFilled } from "@ant-design/icons";
import { Button, Result } from "antd";
import StepStateContext from "../../Context/StepStateContext";
import fetchWinnerFromBackEnd from "./Networks";

const Validate = () => {
  const { stepsState, setStepsState } = useContext(StepStateContext);
  const [winnerValue, setWinnerValue] = useState();
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   console.log("in useEffect");
  //   winnerValue == -1000 && performLoop();
  // }, [winnerValue]);

  const validateClicked = () => {
    setLoading(true);
    // setWinnerValue(-1000);
    performLoop();
  };

  const performLoop = () => {
    console.log("in loop");
    const timeOutID = setInterval(() => {
      fetchWinnerFromBackEnd(setWinnerValue, timeOutID);
    }, 3000);
    return () => clearInterval(timeOutID);
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
