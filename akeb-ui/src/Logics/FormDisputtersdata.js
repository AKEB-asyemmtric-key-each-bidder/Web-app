const formDisputtersdata = (data) => {
  const res = [];
  let key = 0;
  for (const disputter of data) {
    const dict = {
      key: key,
      address: disputter["disputeAddress"],
      nonce: disputter["nonce"],
      bid: disputter["bid"],
    };
    res.push(dict);
    key += 1;
  }
  return res;
};

export default formDisputtersdata;
