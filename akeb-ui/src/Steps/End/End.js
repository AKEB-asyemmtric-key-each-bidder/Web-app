import { Result } from "antd";
import { TrophyFilled } from "@ant-design/icons";

import React from "react";
import Dispute from "./Dispute";
import WinnerInfo from "./WinnerInfo";

const End = () => {
  return (
    <Result
      icon={<TrophyFilled />}
      title="The winner information is:"
      // subTitle="If you think there is a mistake in calculatin the winner, you can dispute"
      extra={
        <React.Fragment>
          <WinnerInfo />
          <Dispute />
        </React.Fragment>
      }
    />
  );
};

export default End;
