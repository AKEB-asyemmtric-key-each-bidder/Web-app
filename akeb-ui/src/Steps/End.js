import { Result } from "antd";
import { TrophyFilled } from "@ant-design/icons";

import React from "react";

const End = () => {
  return <Result icon={<TrophyFilled />} title="The winner is" />;
};

export default End;
