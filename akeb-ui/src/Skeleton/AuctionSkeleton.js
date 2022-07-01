import React from "react";
import { Layout, Menu, Space, Typography } from "antd";

const { Text } = Typography;
const { Header, Content, Footer } = Layout;

const AuctionSkeleton = ({ children }) => {
  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" />
        <Content>{children}</Content>
        <Footer style={{ textAlign: "center" }}>
          <Text>All rights reserved by University of Victoria</Text>
        </Footer>
      </Header>
    </Layout>
  );
};

export default AuctionSkeleton;
