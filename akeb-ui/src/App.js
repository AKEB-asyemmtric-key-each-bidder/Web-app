import React, { useState } from "react";
import { Col, Row } from "antd";

import "antd/dist/antd.css";
import StepsBar from "./StepsBar";
import Connect from "./Steps/Connect/Connect";
import Enter from "./Steps/Enter/Enter";
import StepStateContext from "./Context/StepStateContext";
import Bid from "./Steps/Bid";
import Validate from "./Steps/Validate/Validate";
import End from "./Steps/End/End";
import Nonce from "./Steps/Nonce/Nonce";
import BlockchainContext from "./Context/BlockchainContext";
import BidsContext from "./Context/BidsContext";
import AuctionSkeleton from "./Skeleton/AuctionSkeleton";
import GeneralInfo from "./GeneralInfo/GeneralInfo";

function App() {
  // 0: Connect, 1: Enter
  // 2: Bid, 3: Nonce,
  // 4: Confirm ,5: End
  const [stepsState, setStepsState] = useState(0);

  const [web3, setWeb3] = useState();
  const [address, setAddress] = useState();
  const [contract, setContract] = useState();

  const [nonce, setNonce] = useState();
  const [bid, setBid] = useState();
  const [encodedBid, setEncodedBid] = useState();
  const [winnerAddress, setWinnerAddress] = useState();
  const [winnerBid, setWinnerBid] = useState();
  const [winnerNonce, setWinnerNonce] = useState();
  const [winners, setWinners] = useState([]);

  const steps = [
    <Connect />,
    <Enter />,
    <Nonce />,
    <Bid />,
    <Validate />,
    <End />,
  ];

  return (
    <div style={{ background: "#F0F2F5", height: "100vh" }}>
      <BidsContext.Provider
        value={{
          nonce,
          setNonce,
          bid,
          setBid,
          encodedBid,
          setEncodedBid,
          winnerAddress,
          setWinnerAddress,
          winnerBid,
          setWinnerBid,
          winnerNonce,
          setWinnerNonce,
          winners,
          setWinners,
        }}
      >
        <BlockchainContext.Provider
          value={{
            web3,
            setWeb3,
            address,
            setAddress,
            contract,
            setContract,
          }}
        >
          <StepStateContext.Provider value={{ stepsState, setStepsState }}>
            <AuctionSkeleton>
              <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
                <Col span={24}>
                  <StepsBar />
                </Col>
                <Col span={16}>
                  <Row
                    justify="center"
                    style={{
                      background: "white",
                    }}
                  >
                    {steps[stepsState]}
                  </Row>
                </Col>
                <Col span={8}>
                  <GeneralInfo />
                </Col>
              </Row>
            </AuctionSkeleton>
          </StepStateContext.Provider>
        </BlockchainContext.Provider>
      </BidsContext.Provider>
    </div>
  );
}

export default App;
