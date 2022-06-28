import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "antd";
import createAKEBContract from "./ABI/AKEB";
import Web3 from "web3";

import "antd/dist/antd.css";
import StepsBar from "./Auction-Steps";
import Connect from "./Steps/Connect";
import Enter from "./Steps/Enter";
import StepStateContext from "./Context/StepStateContext";
import Bid from "./Steps/Bid";
import Confirm from "./Steps/Confirm";
import End from "./Steps/End";

function App() {
  // 0: Connect, 1: Enter
  // 2: Bid, 3: Confirm ,4: End
  const [stepsState, setStepsState] = useState(0);

  const steps = [<Connect />, <Enter />, <Bid />, <Confirm />, <End />];

  console.log("step state", stepsState);

  return (
    <StepStateContext.Provider value={{ stepsState, setStepsState }}>
      <Row justify="center" gutter={[16, 24]}>
        <Col span={20}>
          <StepsBar />
        </Col>
      </Row>
      <Row
        justify="center"
        align="middle"
        style={{ minHeight: "300px", border: "1px solid black" }}
      >
        {steps[stepsState]}
      </Row>
    </StepStateContext.Provider>
  );
}

export default App;
