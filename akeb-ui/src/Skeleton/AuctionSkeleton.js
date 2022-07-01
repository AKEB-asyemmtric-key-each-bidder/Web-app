import React from "react";
import { Image, Layout, Menu, Space, Typography } from "antd";
import Logo from "../Statics/Images/Logo.png";

import "../Styles/Styles.css";

const { Text } = Typography;
const { Header, Content, Footer } = Layout;

const AuctionSkeleton = ({ children }) => {
  return (
    <Layout>
      <Header style={{ background: "#F0F2F5" }}>
        <div
          style={{
            float: "left",
            width: "60px",
            height: "100%",
          }}
        >
          <Image src={Logo} width={50} height={50} />
        </div>
        <Menu mode="horizontal" />
        <Content>{children}</Content>
        <Footer className="footer">
          <Text>All rights reserved by University of Victoria</Text>
        </Footer>
      </Header>
    </Layout>
  );
};

export default AuctionSkeleton;
