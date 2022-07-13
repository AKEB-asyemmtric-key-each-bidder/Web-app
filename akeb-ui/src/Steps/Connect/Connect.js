import { Button, Result } from "antd";
import { WalletFilled } from "@ant-design/icons";
import React, { useContext, useEffect } from "react";
import Web3 from "web3";
import createAKEBContract from "../../ABI/AKEB";
import BlockchainContext from "../../Context/BlockchainContext";
import StepStateContext from "../../Context/StepStateContext";

const Connect = () => {
  const { stepsState, setStepsState } = useContext(StepStateContext);
  const {
    web3,
    setWeb3,
    address,
    setAddress,
    contract,
    setContract,
  } = useContext(BlockchainContext);

  const onConnectHandler = async () => {
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum != "undefined"
    ) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3Obj = new Web3(window.ethereum);
        setWeb3(web3Obj);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.error("Meta mask is not installed");
    }
  };

  useEffect(() => {
    web3 && getAccounts();
  }, [web3]);

  const getAccounts = async () => {
    const addresses = await web3.eth.getAccounts();
    console.log("addresses", addresses);
    setAddress(addresses[0]);
  };

  useEffect(() => {
    address && getContract();
  }, [address]);

  const getContract = () => {
    const AKEBContract = createAKEBContract(web3);
    setContract(AKEBContract);
  };

  useEffect(() => {
    contract && setStepsState(stepsState + 1);
  }, [contract]);

  return (
    <Result
      icon={<WalletFilled />}
      title="Please connect your Metamask wallet"
      subTitle="Metamask screen will pop up"
      extra={
        <Button type="primary" onClick={onConnectHandler} size="large">
          Connect your wallet
        </Button>
      }
    />
  );
};

export default Connect;
