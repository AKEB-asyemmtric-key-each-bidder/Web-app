import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "antd";
import createAKEBContract from "./ABI/AKEB";
import Web3 from "web3";

import "antd/dist/antd.css";
import StepsBar from "./StepsBar";
import Connect from "./Steps/Connect/Connect";
import Enter from "./Steps/Enter";
import StepStateContext from "./Context/StepStateContext";
import Bid from "./Steps/Bid";
import Confirm from "./Steps/Confirm";
import End from "./Steps/End";
import Passphrase from "./Steps/Nonce";
import BlockchainContext from "./Context/BlockchainContext";
import BidsContext from "./Context/BidsContext";
import AuctionSkeleton from "./Skeleton/AuctionSkeleton";

function App() {
  // 0: Connect, 1: Enter
  // 2: Bid, 3: Passphrase,
  // 4: Confirm ,5: End
  const [stepsState, setStepsState] = useState(0);

  const [web3, setWeb3] = useState();
  const [address, setAddress] = useState();
  const [contract, setContract] = useState();

  const [nonce, setNonce] = useState();
  const [bid, setBid] = useState();
  const [encodedBid, setEncodedBid] = useState();

  const steps = [
    <Connect />,
    <Enter />,
    <Passphrase />,
    <Bid />,
    <Confirm />,
    <End />,
  ];

  return (
    <AuctionSkeleton>
      <BidsContext.Provider
        value={{ nonce, setNonce, bid, setBid, encodedBid, setEncodedBid }}
      >
        <BlockchainContext.Provider
          value={{ web3, setWeb3, address, setAddress, contract, setContract }}
        >
          <StepStateContext.Provider value={{ stepsState, setStepsState }}>
            <Row
              justify="center"
              align="middle"
              style={{ border: "1px solid blue", height: "10vh" }}
            >
              <StepsBar />
            </Row>
            <Row
              justify="center"
              align="middle"
              style={{ height: "65vh", border: "1px solid blue" }}
            >
              {steps[stepsState]}
            </Row>
          </StepStateContext.Provider>
        </BlockchainContext.Provider>
      </BidsContext.Provider>
    </AuctionSkeleton>
  );
}

export default App;
