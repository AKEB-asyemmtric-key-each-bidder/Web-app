import { Alert, Card, Space, Typography } from "antd";
import React, { useContext } from "react";
import PassphraseContext from "../Context/PassphraseContext";
const { Paragraph } = Typography;

const PassphraseCard = () => {
  const { passphrase } = useContext(PassphraseContext);

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
