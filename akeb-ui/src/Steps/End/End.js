import { Button, Result, Row, Space } from "antd";
import { TrophyFilled, ReloadOutlined } from "@ant-design/icons";

import React, { useContext, useState } from "react";
import Dispute from "./Dispute";
import WinnerInfo from "./WinnerInfo";
import { fetchAllWinnerFromBC } from "../Validate/Networks";
import BlockchainContext from "../../Context/BlockchainContext";
import BidsContext from "../../Context/BidsContext";

const End = () => {
  const { contract } = useContext(BlockchainContext);
  const { setWinners } = useContext(BidsContext);
  const [loading, setLoading] = useState(false);
  const refreshClicked = () => {
    setLoading(true);
    fetchAllWinnerFromBC(contract, null, setWinners, setLoading);
  };

  return (
    <Result
      icon={<TrophyFilled />}
      title={
        <Space direction="horizontal" size="middle">
          The winner(s)
          <Button
            type="primary"
            onClick={refreshClicked}
            icon={<ReloadOutlined />}
            loading={loading}
          />
        </Space>
      }
      extra={
        <>
          <Row gutter={[8, 8]}>
            <WinnerInfo />
          </Row>
          <Dispute />
        </>
      }
    />
  );
};

export default End;
