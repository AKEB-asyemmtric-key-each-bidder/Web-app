import { Alert } from "antd";
import React, { useContext, useEffect, useState } from "react";
import StepStateContext from "../Context/StepStateContext";

const BidTimer = () => {
  const [timeLeft, setTimeLeft] = useState(10);
  const { stepsState, setStepsState } = useContext(StepStateContext);

  // useEffect(() => {
  //   if (timeLeft === 0) {
  //     setStepsState(stepsState + 1);
  //   }
  //   const timer = setTimeout(() => {
  //     setTimeLeft(timeLeft - 1);
  //   }, 1000);

  //   return () => clearTimeout(timer);
  // });

  return (
    <Alert
      type="warning"
      description={`Seconds remaining: ${timeLeft}`}
      showIcon
    />
  );
};

export default BidTimer;
