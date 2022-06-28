import React, { useContext } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Button, Result } from "antd";
import StepStateContext from "../Context/StepStateContext";

const Confirm = () => {
  const { stepsState, setStepsState } = useContext(StepStateContext);

  return (
    <Result
      icon={<LoadingOutlined />}
      title="Calculating the winner & confirming it"
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

export default Confirm;
