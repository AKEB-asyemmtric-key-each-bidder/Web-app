import React, { useContext, useEffect, useState } from "react";
import { ExperimentFilled } from "@ant-design/icons";
import { Button, Result } from "antd";
import StepStateContext from "../../Context/StepStateContext";
import fetchWinnerFromBackEnd, {
  fetchAllWinnerFromBC,
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
    winnerBid,
    setWinnerBid,
    winnerAddress,
    setWinnerAddress,
    winnerNonce,
    setWinnerNonce,
    winners,
    setWinners,
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

  const { contract } = useContext(BlockchainContext);

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
    winnerValue !== -1000 &&
      winnerValue &&
      compareBidWithWinnerValue(winnerValue, bid, setBidderPosition);
  }, [winnerValue]);

  useEffect(() => {
    bidderPosition === 0 && performBCLoop();
  }, [bidderPosition]);

  const performBCLoop = () => {
    console.log("In BC loop");
    const intervalID = setInterval(() => {
      fetchAllWinnerFromBC(contract, intervalID, setWinners);
    }, 3000);
    return () => clearInterval(intervalID);
  };

  // useEffect(() => {
  //   winnerBid && fetchWinnerAddressFromBC(contract, setWinnerAddress);
  // }, [winnerBid]);

  // useEffect(() => {
  //   winnerAddress && fetchWinnerNonceFromBC(contract, setWinnerNonce);
  // }, [winnerAddress]);

  // useEffect(() => {
  //   winnerNonce && setStepsState(stepsState + 1);
  // }, [winnerNonce]);

  useEffect(() => {
    winners.length != 0 && setStepsState(stepsState + 1);
  }, [winners]);

  useEffect(() => {
    bidderPosition === 1 && setSubmitWinnerModalVisible(true);
  }, [bidderPosition]);

  useEffect(() => {
    bidderPosition === 2 && setDisputeModalVisible(true);
  }, [bidderPosition]);

  return (
    <React.Fragment>
      <Result
        icon={<ExperimentFilled spin={loading} />}
        title="Receiving the winner & validating it..."
        subTitle="Meta mask screen will pop up depending on your status"
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
        setBidderPosition={setBidderPosition}
      />
      <DisputeMandatoryModal
        visible={disputeModalVisible}
        setVisible={setDisputeModalVisible}
        setBidderPosition={setBidderPosition}
      />
    </React.Fragment>
  );
};

export default Validate;
