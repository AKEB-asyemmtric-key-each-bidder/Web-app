import showSuccessNotif from "../Notification/ShowSuccessNotif";

const resetSmartContract = async (contract, setLoading, address) => {
  console.log(contract.methods);
  await contract.methods.reset().send({ from: address }, (error, res) => {
    if (error) {
      console.log("error in reseting SM", error);
      return;
    }
    setLoading(false);
    showSuccessNotif("Smart contract successfuly reset");
  });
};

export default resetSmartContract;
