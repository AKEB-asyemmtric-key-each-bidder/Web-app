import React, { useContext, useState } from "react";
import axios from "axios";
import { Button, Result, Space } from "antd";
import { RightCircleFilled } from "@ant-design/icons";
import StepStateContext from "../../Context/StepStateContext";
import BlockchainContext from "../../Context/BlockchainContext";
import EnterAssetModal from "../../Modals/EnterAssetInfoModal";

const Enter = () => {
  const { stepsState, setStepsState } = useContext(StepStateContext);
  const { address, contract } = useContext(BlockchainContext);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const onEnterHandler = () => {
    registerBidderOnBC();
    setLoading(true);
  };

  const enterAsSellerClicked = () => {
    setVisible(true);
  };

  const registerBidderOnBC = async () => {
    await contract.methods
      .registerBidder()
      .send({ from: address }, function(error, res) {
        setLoading(false);

        if (error) {
          console.error("error in registering bidder smart contract", error);
          return;
        }

        registerBidderOnBackEnd();
      });
  };

  const registerBidderOnBackEnd = () => {
    let url = "http://127.0.0.1:8000/increment-number-of-bidders/";
    axios.get(url).then((res, error) => {
      if (error) {
        console.error("error", error);
      }
      setStepsState(stepsState + 1);
    });
  };

  return (
    <Result
      icon={<RightCircleFilled />}
      title="Ready to enter the auction?"
      subTitle="Metamask screen will pop up"
      extra={
        <Space direction="vertical">
          <Button
            type="primary"
            size="large"
            onClick={onEnterHandler}
            loading={loading}
          >
            Enter as BIDDER
          </Button>
          <Button
            type="dashed"
            size="large"
            onClick={enterAsSellerClicked}
            loading={loading}
          >
            Enter as SELLER
          </Button>
          <EnterAssetModal visible={visible} setVisible={setVisible} />
        </Space>
      }
    />
  );
};

export default Enter;
