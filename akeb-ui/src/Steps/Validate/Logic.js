const compareBidWithWinnerValue = (winnerValue, bid, setBidderPosition) => {
  console.log("winner value", winnerValue);
  console.log("bid", bid);
  if (winnerValue > bid) {
    setBidderPosition(0);
  } else if (winnerValue == bid) {
    setBidderPosition(1);
  } else if (winnerValue < bid) {
    setBidderPosition(2);
  }
};

export default compareBidWithWinnerValue;
