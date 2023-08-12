// const generateNonce = () => {
//   var byteArray = new Uint32Array(10);
//   const res = crypto.getRandomValues(byteArray);
//   return res[0];
// };

// const generateNonce = () => {
//   let randomString = "";
//   const chars =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   for (let i = 0; i < 30; i = i + 1) {
//     const randomNum = generateRandomNumber(chars);
//     randomString = randomString + chars.charAt(randomNum);
//   }
//   return randomString;
// };

// const generateRandomNumber = (chars) => {
//   const randNum = Math.random() * 1000000000;
//   const randNumFloored = Math.floor(randNum);
//   const divideRemaining = randNumFloored % chars.length;
//   return divideRemaining;
// };

// export default generateNonce;


const { randomBytes } = require("crypto");

// 32 hex valus = 32 * 4 = 128 bits
const length = 32

function generateNonce() {
  const randomBytesGenerated = randomBytes(Math.ceil(length / 2));
  return randomBytesGenerated.toString("ascii").slice(0, length);
}

export default generateNonce;

