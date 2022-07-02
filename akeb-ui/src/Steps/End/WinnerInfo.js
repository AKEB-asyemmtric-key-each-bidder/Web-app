import { Tag } from "antd";
import React, { useContext } from "react";
import BidsContext from "../../Context/BidsContext";

const WinnerInfo = () => {
  const { winnerAddress, winnerNonce, winnerBid } = useContext(BidsContext);
  return (
    <div style={{ textAlign: "left" }}>
      <div style={{ padding: "8px", background: "#F0F2F5" }}>
        <ul>
          <li>
            Address: <Tag>{winnerAddress}</Tag>
          </li>
          <li>
            Bid: <Tag>{winnerBid}</Tag>
          </li>
          <li>
            Nonce: <Tag>{winnerNonce}</Tag>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WinnerInfo;
