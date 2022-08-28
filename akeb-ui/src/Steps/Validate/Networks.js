import axios from "axios";
import formWinnersData from "../../Logics/FormWinnersData";

const fetchWinnerFromBackEnd = (setWinnerValue, timeOutID) => {
  console.log("in API call");
  const url = "http://127.0.0.1:8000/get-winner/";
  axios.get(url).then((res, error) => {
    if (error) {
      //   console.log("error in fetching winner from backend", error);
      return;
    }
    const obj = JSON.parse(res.data);
    const winner = obj["winner"];

    // Stop the timer
    if (winner !== -1000) {
      clearInterval(timeOutID);
      setWinnerValue(winner);
    }

    console.log("winner", winner);
    console.log("*********");
  });
};

const fetchWinnerBidFromBC = async (contract, intervalID, setWinners) => {
  await contract.methods.getWinnerBid().call((error, res) => {
    if (error) {
      console.error("Error in fetching winner bid in BC", error);
      return;
    }
    if (res.length !== 0) {
      clearInterval(intervalID);
      const winnersInArray = formWinnersData(res);
      console.log("winners in array", winnersInArray);
      setWinners(winnersInArray);
    }
    // console.log("res", res);
  });
};

const fetchAllWinnerFromBC = async (
  contract,
  intervalID,
  setWinners,
  setLoading
) => {
  await contract.methods.getAllWinners().call((error, res) => {
    if (error) {
      console.error("Error in getting all winners", error);
    }
    if (intervalID) {
      if (res.length !== 0) {
        clearInterval(intervalID);
        const winnersInArray = formWinnersData(res);
        console.log("winners in array", winnersInArray);
        setWinners(winnersInArray);
      }
    } else {
      const winnersInArray = formWinnersData(res);
      console.log("winners in array", winnersInArray);
      setWinners(winnersInArray);
      setLoading(false);
    }
  });
};

const fetchWinnerAddressFromBC = async (contract, setWinnerAddress) => {
  await contract.methods.getWinnerAddress().call((error, res) => {
    if (error) {
      console.log("Error in fetching winner address from BC", error);
      return;
    }
    setWinnerAddress(res);
  });
};

const fetchWinnerNonceFromBC = async (contract, setWinnerNonce) => {
  await contract.methods.getwinnerNonce().call((error, res) => {
    if (error) {
      console.log("Error in fetching winner nonce from BC", error);
      return;
    }
    setWinnerNonce(res);
  });
};

const submitWinnerInfoIntoBC = async (
  contract,
  bid,
  address,
  nonce,
  setStepsState,
  stepsState,
  setWinnerAddress,
  setWinnerBid,
  setWinnerNonce,
  setVisible,
  setLoading,
  setBidderPosition
) => {
  console.log("winner bid", bid);
  console.log("winner nonce", nonce);
  const bidInGWei = bid * 1000 * 1000 * 1000;
  await contract.methods
    .submitWinner(bidInGWei, nonce)
    .send({ from: address }, (error, res) => {
      if (error) {
        console.log("error in sending winner info to BC", error);
        return;
      }
      // setWinnerAddress(address);
      // setWinnerBid(bidInGWei);
      // setWinnerNonce(nonce);
      setLoading(false);
      setVisible(false);
      // setStepsState(stepsState + 1);
      setBidderPosition(0);
    });
};

const submitAssetInfoIntoBC = async (
  assetName,
  assetDescription,
  setVisible,
  setStepsState,
  setLoading,
  contract,
  address
) => {
  await contract.methods
    .registerAuctionInfo(assetName, assetDescription)
    .send({ from: address }, (error, res) => {
      if (error) {
        console.error("error in registering autction info", error);
        return;
      }
      setLoading(false);
      setVisible(false);
      setStepsState(5);
    });
};

const fetchAssetInfoFromBC = async (contract, setAsset) => {
  await contract.methods.getAuctionInfo().call((error, res) => {
    if (error) {
      console.error("error in fetching asset info", error);
      return;
    }

    const dict = {
      name: res[0][0],
      description: res[0][1],
    };

    setAsset(dict);
  });
};

export default fetchWinnerFromBackEnd;
export {
  fetchAllWinnerFromBC,
  fetchWinnerBidFromBC,
  fetchWinnerAddressFromBC,
  fetchWinnerNonceFromBC,
  submitWinnerInfoIntoBC,
  submitAssetInfoIntoBC,
  fetchAssetInfoFromBC,
};
