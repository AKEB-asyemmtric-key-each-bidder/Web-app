import { Card, Typography } from "antd";
import React, { useContext } from "react";
import PassphraseContext from "../Context/PassphraseContext";
const { Paragraph } = Typography;

const PassphraseCard = () => {
  const { passphrase } = useContext(PassphraseContext);

  return (
    <Card title="Passphrase">
      <Paragraph copyable>{passphrase}</Paragraph>
    </Card>
  );
};

export default PassphraseCard;
