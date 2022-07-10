import React, { useContext, useEffect, useState } from "react";
import { ExperimentFilled } from "@ant-design/icons";
import { Button, Result } from "antd";
import StepStateContext from "../../Context/StepStateContext";
import fetchWinnerFromBackEnd from "./Networks";

const Validate = () => {
  const { stepsState, setStepsState } = useContext(StepStateContext);
  const [
    isBackEndInWinnerCalulationProcess,
    setIsBackEndInWinnerCalulationProcess,
  ] = useState(true);
  const [run, setRun] = useState(true);

  useEffect(() => {
    run && performLoop();
    if (run == true) {
      setRun(false);
    }
    console.log("in use effect");
    // isBackEndInWinnerCalulationProcess && performLoop();
  }, [run]);

  const performLoop = () => {
    console.log("in loop");
    const timeOutID = setTimeout(() => {
      fetchWinnerFromBackEnd(setIsBackEndInWinnerCalulationProcess);
    }, 3000);
    return () => clearTimeout(timeOutID);
  };

  return (
    <Result
      icon={<ExperimentFilled spin />}
      title="Calculating the winner & validating it..."
      subTitle={`Seconds remaining: 10`}
      extra={
        <Button
          onClick={() => {
            setStepsState(stepsState + 1);
          }}
        >
          next
        </Button>
      }
    />
  );
};

export default Validate;
