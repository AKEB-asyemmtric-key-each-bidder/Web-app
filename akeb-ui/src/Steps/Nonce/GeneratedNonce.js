import React, { useContext } from "react";
import { Button, Result } from "antd";
import { InteractionFilled } from "@ant-design/icons";
import BidsContext from "../../Context/BidsContext";
import StepStateContext from "../../Context/StepStateContext";
import generateNonce from "../../Logics/GenerateNonce";

const GeneratedNonce = () => {
  const { setNonce } = useContext(BidsContext);
  const { stepsState, setStepsState } = useContext(StepStateContext);

  const generateClicked = () => {
    const res = generateNonce();
    setNonce(res);
    setStepsState(stepsState + 1);
  };

  const NonceButton = () => {
    return (
      <Button type="primary" size="large" onClick={generateClicked}>
        Generate
      </Button>
    );
  };

  return (
    <Result
      icon={<InteractionFilled rotate={90} />}
      title="Please generate your nonce"
      subTitle="Nonce will be added to bid for randomizing value and making it harder to guess"
      extra={<NonceButton />}
    />
  );
};

export default GeneratedNonce;
