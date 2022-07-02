import { Card, Statistic, Tag } from "antd";
import React from "react";

const GeneralInfoCard = ({ title, value, suffix }) => {
  const CardTag = () => {
    return suffix ? <Tag>{suffix}</Tag> : null;
  };

  return (
    <Card>
      <Statistic
        suffix={CardTag()}
        title={title}
        loading={value ? false : true}
        value={value ? value : "..."}
        valueStyle={{ wordBreak: "break-all", fontSize: "16px" }}
      />
    </Card>
  );
};

export default GeneralInfoCard;
