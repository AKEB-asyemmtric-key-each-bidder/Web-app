import { Alert, Card, Space, Typography } from "antd";
import React, { useContext } from "react";
import BidsContext from "../Context/BidsContext";
const { Paragraph } = Typography;

const PassphraseCard = () => {
  const { passphrase } = useContext(BidsContext);

  return (
    <Card title="Passphrase">
      <Space direction="vertical">
        <Alert
          message="Never share your passphrase with anyone!"
          type="warning"
        />
        <Paragraph copyable>{passphrase}</Paragraph>
      </Space>
    </Card>
  );
};

export default PassphraseCard;
