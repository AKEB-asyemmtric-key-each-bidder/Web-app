import formDisputtersdata from "../Logics/FormDisputtersdata";

const fetchListOfDisputers = async (contract, setData, setLoadingData) => {
  await contract.methods.getAllDisputers().call((error, res) => {
    if (error) {
      console.error("Error in fetching all disputers", error);
      return;
    }
    const data = formDisputtersdata(res);
    setLoadingData(false);
    setData(data);
  });
};

export default fetchListOfDisputers;
