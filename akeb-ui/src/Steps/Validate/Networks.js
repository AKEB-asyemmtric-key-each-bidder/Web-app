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

const fetchWinnerInfoFromBC = async (contract) => {
  await contract.methods.getWinnerBid().call((error, res) => {
    if (error) {
      console.log("Error in fetching winner info in BC", error);
      return;
    }
    console.log("res", res);
  });
};

export default fetchWinnerFromBackEnd;
export { fetchWinnerInfoFromBC };
