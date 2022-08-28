const formWinnersData = (winnersInRaw) => {
  const res = [];
  let key = 0;
  for (const winner of winnersInRaw) {
    const dict = {
      key: key,
      winnerAddress: winner["winnerAddress"],
      bid: winner["bid"],
      nonce: winner["nonce"],
    };
    res.push(dict);
    key += 1;
  }

  return res;
};

export default formWinnersData;
