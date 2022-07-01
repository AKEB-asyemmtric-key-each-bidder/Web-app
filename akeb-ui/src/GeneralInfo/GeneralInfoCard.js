import { Card, Statistic } from "antd";
import React from "react";

const GeneralInfoCard = ({ title, value }) => {
  return (
    <Card>
      <Statistic title={title} value={value} />
    </Card>
  );
};

export default GeneralInfoCard;
