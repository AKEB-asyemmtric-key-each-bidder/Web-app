const disputeRequestNetwork = async (
  contract,
  bid,
  nonce,
  address,
  setVisible,
  setBidderPosition
) => {
  let bidInGwei = bid * 1000 * 1000 * 1000;
  await contract.methods
    .dispute(bidInGwei, nonce)
    .send({ from: address }, (error, res) => {
      if (error) {
        console.error("error in disputing", error);
        return;
      }
      setVisible(false);
      if (setBidderPosition) {
        setBidderPosition(0);
      }
    });
};

export default disputeRequestNetwork;
