import React, { useContext, useEffect, useState } from "react";
import { ExperimentFilled } from "@ant-design/icons";
import { Button, Result } from "antd";
import StepStateContext from "../../Context/StepStateContext";
import fetchWinnerFromBackEnd, {
  fetchWinnerAddressFromBC,
  fetchWinnerBidFromBC,
  fetchWinnerNonceFromBC,
} from "./Networks";
import compareBidWithWinnerValue from "./Logic";
import BidsContext from "../../Context/BidsContext";
import BlockchainContext from "../../Context/BlockchainContext";
import SubmitWinnerModal from "../../Modals/SubmitWinnerModal";
import DisputeMandatoryModal from "../../Modals/DisuteMandatoryModal";

const Validate = () => {
  const { stepsState, setStepsState } = useContext(StepStateContext);
  const {
    bid,
    nonce,
    winnerBid,
    setWinnerBid,
    winnerAddress,
    setWinnerAddress,
    winnerNonce,
    setWinnerNonce,
  } = useContext(BidsContext);
  const [winnerValue, setWinnerValue] = useState();
  const [loading, setLoading] = useState(false);
  const [submitWinnerModalVisible, setSubmitWinnerModalVisible] = useState(
    false
  );
  const [disputeModalVisible, setDisputeModalVisible] = useState(false);

  // 0: winnerValue > bid
  // 1 : winnerValue == bid
  // 2: winnerValue < bid
  const [bidderPosition, setBidderPosition] = useState();

  const { contract, address } = useContext(BlockchainContext);

  const validateClicked = () => {
    setLoading(true);
    performLoop();
  };

  const performLoop = () => {
    console.log("in Backend loop");
    const timeOutID = setInterval(() => {
      fetchWinnerFromBackEnd(setWinnerValue, timeOutID);
    }, 3000);
    return () => clearInterval(timeOutID);
  };

  useEffect(() => {
    winnerValue != -1000 &&
      winnerValue &&
      compareBidWithWinnerValue(winnerValue, bid, setBidderPosition);
  }, [winnerValue]);

  useEffect(() => {
    bidderPosition == 0 && performBCLoop();
  });

  const performBCLoop = () => {
    console.log("In BC loop");
    const intervalID = setInterval(() => {
      fetchWinnerBidFromBC(contract, intervalID, setWinnerBid);
    }, 3000);
  };

  useEffect(() => {
    winnerBid && fetchWinnerAddressFromBC(contract, setWinnerAddress);
  }, [winnerBid]);

  useEffect(() => {
    winnerAddress && fetchWinnerNonceFromBC(contract, setWinnerNonce);
  }, [winnerAddress]);

  useEffect(() => {
    winnerNonce && setStepsState(stepsState + 1);
  }, [winnerNonce]);

  useEffect(() => {
    bidderPosition == 1 && setSubmitWinnerModalVisible(true);
  }, [bidderPosition]);

  useEffect(() => {
    bidderPosition == 2 && setDisputeModalVisible(true);
  }, [bidderPosition]);

  return (
    <React.Fragment>
      <Result
        icon={<ExperimentFilled spin={loading} />}
        title="Calculating the winner & validating it..."
        subTitle={`Seconds remaining: 10`}
        extra={
          <Button
            loading={loading}
            size="large"
            type="primary"
            onClick={validateClicked}
          >
            Validate
          </Button>
        }
      />
      <SubmitWinnerModal
        visible={submitWinnerModalVisible}
        setVisible={setSubmitWinnerModalVisible}
      />
      <DisputeMandatoryModal
        visible={disputeModalVisible}
        setVisible={setDisputeModalVisible}
      />
    </React.Fragment>
  );
};

export default Validate;
