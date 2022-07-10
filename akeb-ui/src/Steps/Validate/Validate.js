import React, { useContext, useEffect } from "react";
import { ExperimentFilled } from "@ant-design/icons";
import { Button, Result } from "antd";
import StepStateContext from "../../Context/StepStateContext";

const Validate = () => {
  const { stepsState, setStepsState } = useContext(StepStateContext);

  useEffect(() => {}, []);

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
