// Smart contract ABI
const AKEBAbi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "inputDisputedBid",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "inputDisputedNonce",
        type: "string",
      },
    ],
    name: "dispute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "assetNameInput",
        type: "string",
      },
      {
        internalType: "string",
        name: "assetDescriptionInput",
        type: "string",
      },
    ],
    name: "registerAuctionInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "registerBidder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "reset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "resetEncodedBids",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "inputEncodedBid",
        type: "string",
      },
    ],
    name: "submitEncodedBid",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "inputWinnerBid",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "inputwinnerNonce",
        type: "string",
      },
    ],
    name: "submitWinner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "assetDescription",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "assetName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "bidders",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "disputedBidders",
    outputs: [
      {
        internalType: "uint256",
        name: "bid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "disputeAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "nonce",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "encodedBids",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllBidders",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllDisputers",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "bid",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "disputeAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "nonce",
            type: "string",
          },
        ],
        internalType: "struct AKEB.DisputedBidders[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllWinners",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "winnerAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "bid",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "nonce",
            type: "string",
          },
        ],
        internalType: "struct AKEB.winner[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAuctionInfo",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getBidderAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "inputAddress",
        type: "address",
      },
    ],
    name: "getEncodedBid",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "winners",
    outputs: [
      {
        internalType: "address",
        name: "winnerAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "bid",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "nonce",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const createAKEBContract = (web3) => {
  return new web3.eth.Contract(
    AKEBAbi,
    "0xeB63c218F12D5A33A1F8C23e8EcaBDD55Fbdaf92"
  );
};

export default createAKEBContract;
