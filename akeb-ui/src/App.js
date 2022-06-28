import React, { useEffect,useState } from 'react';
import { Button, Col, Row } from 'antd';
import createAKEBContract from "./ABI/AKEB"
import Web3 from "web3"

import 'antd/dist/antd.css'
import AuctionSteps from './Auction-Steps';
import Connect from './Steps/Connect';
import Enter from './Steps/Enter';


function App() {
  // 0: Connect, 1: Enter
  // 2: Bid, 3: Confirm ,4: End
  const [state, setState] = useState(0)
  // const [web3, setWeb3] = useState()
  // const [address, setAddress] = useState()
  // const [contract, setContract] = useState()
  // const [publicKey, setPublicKey] = useState()

  // console.log("Web3", web3)
  // console.log("address", address)
  // console.log("contract", contract)
  // console.log("public key", publicKey)

  // useEffect(() => {
  //   contract && submitPublicKey()
  // }, [contract])

  // const onGetPublicKey = async () => {
  //   console.log("in onGetPublicKey")
  //   const res = await contract.methods.getMyPublicKey().call(function (err, res) {
  //     if (err) {
  //       console.log("An error occured", err)
  //       return
  //     }
  //     console.log("public key: ", res)
  //     })
  //   console.log("res", res)
  //   setPublicKey(res)
  // }

  // const submitPublicKey = async () => {
  //   await contract.methods.submitPublicKeys(
  //     address,
  //     "Public-key"
  //   ).send({from:address})
  // }


  // const onConnect = async () => {
  //   if(typeof window !== "undefined" && typeof window.ethereum != "undefined") {
  //     try {
  //       await window.ethereum.request({method: "eth_requestAccounts"})
  //       const web3 = new Web3(window.ethereum)
  //       setWeb3(web3)
  //       const addresses = await web3.eth.getAccounts()
  //       setAddress(addresses[0])

  //       const AKEBContract = createAKEBContract(web3)
  //       setContract(AKEBContract)

  //     } catch(error) {
  //       console.log(error)
  //     }
  //   }
  //   else {
  //     console.error("Meta mask is not installed")
  //   }
  // }
  const steps = [
    <Connect/>, 
    <Enter />
  ]


  return (
    <div>
      {/* Auction
      <br />
      <Button 
      type="primary"
      onClick={onConnect}>Connect</Button>
      <button onClick={onGetPublicKey}>Get public keys</button>
      <div>
        Public keys : {publicKey}
      </div> */}
      <Row justify='center' gutter={[16,24]}>
        <Col span={20}>
          <AuctionSteps />
        </Col>
      </Row>
      {steps[state]}
    </div>
    
  );
}

export default App;
