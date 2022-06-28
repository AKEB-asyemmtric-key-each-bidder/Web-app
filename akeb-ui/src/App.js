import React, { useEffect,useState } from 'react';
import { Button, Col, Row } from 'antd';
import createAKEBContract from "./ABI/AKEB"
import Web3 from "web3"

import 'antd/dist/antd.css'
import StepsBar from './Auction-Steps';
import Connect from './Steps/Connect';
import Enter from './Steps/Enter';
import StepStateContext from './Context/StepStateContext';


function App() {
  // 0: Connect, 1: Enter
  // 2: Bid, 3: Confirm ,4: End
  const [stepsState, setStepsState] = useState(0)
  
  const steps = [
    <Connect/>, 
    <Enter />
  ]

  console.log("step state", stepsState)

  return (
    <StepStateContext.Provider value={{stepsState, setStepsState}}>
        <Row justify='center' gutter={[16,24]}>
          <Col span={20}>
            <StepsBar />
          </Col>
          <Col span={20} style={{'border':'1px solid red'}}>
            {steps[stepsState]}
          </Col>
        </Row>
        
    </StepStateContext.Provider>
  );
}

export default App;
