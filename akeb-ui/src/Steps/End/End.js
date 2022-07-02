import { Result } from "antd";
import { TrophyFilled } from "@ant-design/icons";

import React from "react";
import Dispute from "./Dispute";

const End = () => {
  return (
    <Result
      icon={<TrophyFilled />}
      title="The winner is"
      subTitle="If you think there is a mistake in calculatin the winner, you can dispute"
      extra={<Dispute />}
    />
  );
};

export default End;
