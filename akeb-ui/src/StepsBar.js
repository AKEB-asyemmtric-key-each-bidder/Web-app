import React, { useContext } from "react";

import {
  MoneyCollectFilled,
  ExperimentFilled,
  RightCircleFilled,
  WalletFilled,
  TrophyFilled,
  InteractionFilled,
} from "@ant-design/icons";
import { Steps } from "antd";
import "./Statics/Styles/Styles.css";
import StepStateContext from "./Context/StepStateContext";

const { Step } = Steps;

const StepsBar = () => {
  const { stepsState } = useContext(StepStateContext);

  return (
    <Steps current={stepsState} className="auction-steps">
      <Step title="Connect" icon={<WalletFilled />} />
      <Step title="Enter" icon={<RightCircleFilled />} />
      <Step title="Nonce" icon={<InteractionFilled rotate={90} />} />
      <Step title="Bid" icon={<MoneyCollectFilled />} />
      <Step title="Validate" icon={<ExperimentFilled />} />
      <Step title="End" icon={<TrophyFilled />} />
    </Steps>
  );
};

export default StepsBar;
