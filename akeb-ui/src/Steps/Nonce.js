import { Button, Form, Input, Result } from "antd";
import React, { useContext } from "react";
import { InteractionFilled } from "@ant-design/icons";
import BidsContext from "../Context/BidsContext";
import StepStateContext from "../Context/StepStateContext";

const Nonce = () => {
  const { setNonce } = useContext(BidsContext);
  const { stepsState, setStepsState } = useContext(StepStateContext);

  // const onFinish = (values) => {
  //   const input = values["nonce"];
  //   setNonce(input);
  //   setStepsState(stepsState + 1);
  // };

  const generateClicked = () => {
    console.log("Generate clicked");
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

export default Nonce;
