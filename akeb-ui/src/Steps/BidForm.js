import React, { useContext, useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import { Button, Form, InputNumber } from "antd";
import BidsContext from "../Context/BidsContext";
import StepStateContext from "../Context/StepStateContext";
import BlockchainContext from "../Context/BlockchainContext";

const BidForm = () => {
  const { bid, setBid, nonce, setEncodedBid, encodedBid } = useContext(
    BidsContext
  );
  const { stepsState, setStepsState } = useContext(StepStateContext);
  const { contract, address } = useContext(BlockchainContext);

  const [loading, setLoading] = useState(false);

  const onBidFormFinished = (values) => {
    // Uncommented when AWS is implemented
    // setLoading(true);
    // const input = values["bid"];
    // setBid(input);

    // For checking if smart contract has value in it
    // To be removed when AWS is completed
    // getSubmittedEncodedBid();

    // To be removed when AWS is completed
    const input = values["bid"];
    setBid(input);
  };

  const getSubmittedEncodedBid = async () => {
    await contract.methods.getEncodedBid(address).call((error, res) => {
      if (error) {
        console.log("error in getting submitted data", error);
        return;
      }
      console.log("res of submitted encoded bid", res);
    });
  };

  useEffect(() => {
    bid && encryptBid();
  }, [bid]);

  const encryptBid = () => {
    const res = CryptoJS.SHA256(bid + nonce).toString();
    setEncodedBid(res);
  };

  // To be uncommented when AWS is implemented
  // useEffect(() => {
  //   encodedBid && submitEncodedBid();
  // }, [encodedBid]);

  // To be uncommented when AWS is implemented
  useEffect(() => {
    encodedBid && setStepsState(stepsState + 1);
  }, [encodedBid]);

  const submitEncodedBid = async () => {
    await contract.methods
      .submitEncryptedBid(encodedBid)
      .send({ from: address }, (error, res) => {
        setLoading(false);
        if (error) {
          console.log("error in submitting encoded bid");
          return;
        }
        console.log("res of submitting encoded bid", res);
        setStepsState(stepsState + 1);
      });
  };

  return (
    <Form layout="vertical" name="bidForm" onFinish={onBidFormFinished}>
      <Form.Item
        label="Enter your bid"
        name="bid"
        rules={[
          {
            required: true,
            message: "Bid number is required",
          },
        ]}
      >
        <InputNumber
          style={{ width: "100%" }}
          addonAfter="Ether"
          step="0.0000001"
          stringMode
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BidForm;
