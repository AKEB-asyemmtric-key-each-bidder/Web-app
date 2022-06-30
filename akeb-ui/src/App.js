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
import Passphrase from "./Steps/Passphrase";
import BlockchainContext from "./Context/BlockchainContext";
import BidsContext from "./Context/BidsContext";

function App() {
  // 0: Connect, 1: Enter
  // 2: Bid,3: Passphrase, 4: Confirm ,5: End
  const [stepsState, setStepsState] = useState(0);

  const [web3, setWeb3] = useState();
  const [address, setAddress] = useState();
  const [contract, setContract] = useState();

  const [passphrase, setPassphrase] = useState();

  const steps = [
    <Connect />,
    <Enter />,
    <Passphrase />,
    <Bid />,
    <Confirm />,
    <End />,
  ];

  return (
    <BidsContext.Provider value={{ passphrase, setPassphrase }}>
      <BlockchainContext.Provider
        value={{ web3, setWeb3, address, setAddress, contract, setContract }}
      >
        <StepStateContext.Provider value={{ stepsState, setStepsState }}>
          <Row justify="center" gutter={[16, 24]}>
            <Col span={20}>
              <StepsBar />
            </Col>
          </Row>
          <Row justify="center" align="middle" style={{ minHeight: "300px" }}>
            {steps[stepsState]}
          </Row>
        </StepStateContext.Provider>
      </BlockchainContext.Provider>
    </BidsContext.Provider>
  );
}

export default App;
