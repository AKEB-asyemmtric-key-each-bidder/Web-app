import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
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
    // Uncommented when Back-end is implemented
    setLoading(true);
    const input = values["bid"];
    setBid(input);
  };

  // const getSubmittedEncodedBid = async () => {
  //   await contract.methods.getEncodedBid(address).call((error, res) => {
  //     if (error) {
  //       console.log("error in getting submitted data", error);
  //       return;
  //     }
  //     console.log("res of submitted encoded bid", res);
  //   });
  // };

  // To be uncommented in the final version
  // useEffect(() => {
  //   bid && encryptBid();
  // }, [bid]);

  // To be removed in the final version
  useEffect(() => {
    bid && submitBidIntoBackend();
  }, [bid]);

  const encryptBid = () => {
    const res = CryptoJS.SHA256(bid + nonce).toString();
    setEncodedBid(res);
  };

  useEffect(() => {
    encodedBid && submitEncodedBidIntoBC();
  }, [encodedBid]);

  const submitEncodedBidIntoBC = async () => {
    await contract.methods
      .submitEncodedBid(encodedBid)
      .send({ from: address }, (error, res) => {
        setLoading(false);
        if (error) {
          console.log("error in submitting encoded bid", error);
          return;
        }
        submitBidIntoBackend();
      });
  };

  const submitBidIntoBackend = () => {
    const url = "http://127.0.0.1:8000/submit-bid/";
    const body = { bid: bid };
    axios.post(url, body).then((res, error) => {
      if (error) {
        console.log("error in submitting bids into backend", error);
        return;
      }
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
