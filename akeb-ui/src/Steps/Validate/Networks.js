import axios from "axios";

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
    if (winner != -1000) {
      clearInterval(timeOutID);
      setWinnerValue(winner);
    }

    console.log("winner", winner);
    console.log("*********");
  });
};

const fetchWinnerBidFromBC = async (contract, intervalID, setWinnerBid) => {
  await contract.methods.getWinnerBid().call((error, res) => {
    if (error) {
      console.log("Error in fetching winner bid in BC", error);
      return;
    }
    if (res != 0) {
      clearInterval(intervalID);
      setWinnerBid(res);
    }
    console.log("res", res);
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
  await contract.methods.getWinnerKey().call((error, res) => {
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
  setWinnerNonce
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
      setWinnerAddress(address);
      setWinnerBid(bidInGWei);
      setWinnerNonce(nonce);
      setStepsState(stepsState + 1);
    });
};

export default fetchWinnerFromBackEnd;
export {
  fetchWinnerBidFromBC,
  fetchWinnerAddressFromBC,
  fetchWinnerNonceFromBC,
  submitWinnerInfoIntoBC,
};
