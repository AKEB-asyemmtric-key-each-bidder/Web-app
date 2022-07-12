const fetchListOfDisputers = async (contract) => {
  await contract.methods.getAllDisputers().call((error, res) => {
    if (error) {
      console.error("Error in fetching all disputers", error);
      return;
    }
    console.info("list of all disputers", res);
  });
};

export default fetchListOfDisputers;
