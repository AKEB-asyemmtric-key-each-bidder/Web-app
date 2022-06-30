import { Alert, Card, Space, Typography } from "antd";
import React, { useContext } from "react";
import BidsContext from "../Context/BidsContext";
const { Paragraph } = Typography;

const PassphraseCard = () => {
  const { nonce } = useContext(BidsContext);

  return (
    <Card title="Nonce">
      <Space direction="vertical">
        <Paragraph copyable>{nonce}</Paragraph>
      </Space>
    </Card>
  );
};

export default PassphraseCard;
