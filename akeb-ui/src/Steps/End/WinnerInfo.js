import { Col, Tag } from "antd";
import React, { useContext } from "react";
import BidsContext from "../../Context/BidsContext";

const WinnerInfo = () => {
  const { winners } = useContext(BidsContext);
  return winners.map((winner) => {
    return (
      <Col span={winners.length == 1 ? 24 : 12} key={winner.key}>
        <div style={{ textAlign: "left" }}>
          <div style={{ padding: "8px", background: "#F0F2F5" }}>
            <ul>
              <li>
                Address: <Tag>{winner.winnerAddress}</Tag>
              </li>
              <li>
                Bid: <Tag>{winner.bid}</Tag>
                <Tag>GWei</Tag>
              </li>
              <li>
                Nonce: <Tag>{winner.nonce}</Tag>
              </li>
            </ul>
          </div>
        </div>
      </Col>
    );
  });
};

export default WinnerInfo;
