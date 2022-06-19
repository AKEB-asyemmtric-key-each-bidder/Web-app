import React from 'react';
import { useState } from "react"
import Web3 from "web3"


function App() {
  const [web3, setWeb3] = useState()
  const [address, setAddress] = useState()

  console.log("Web3", web3)
  console.log("address", address)


  const onConnect = async () => {
    if(typeof window !== "undefined" && typeof window.ethereum != "undefined") {
      try {
        await window.ethereum.request({method: "eth_requestAccounts"})
        const web3 = new Web3(window.ethereum)
        setWeb3(web3)
        const addresses = await web3.eth.getAccounts()
        setAddress(addresses[0])
      } catch(error) {
        console.log(error)
      }
    }
    else {
      console.error("Meta mask is not installed")
    }
  }

  return (
    <div>
      Auction
      <button onClick={onConnect}>Connect</button>
    </div>
    
  );
}

export default App;
