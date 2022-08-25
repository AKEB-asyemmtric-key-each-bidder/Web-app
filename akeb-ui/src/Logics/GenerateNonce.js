// const generateNonce = () => {
//   var byteArray = new Uint32Array(10);
//   const res = crypto.getRandomValues(byteArray);
//   return res[0];
// };

const generateNonce = () => {
  let randomString = "";
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 30; i = i + 1) {
    const randomNum = generateRandomNumber(chars);
    randomString = randomString + chars.charAt(randomNum);
  }
  return randomString;
};

const generateRandomNumber = (chars) => {
  const randNum = Math.random() * 1000000000;
  const randNumFloored = Math.floor(randNum);
  const divideRemaining = randNumFloored % chars.length;
  return divideRemaining;
};

export default generateNonce;
