import React, { useState } from "react";
import { Button, Image, Layout, Menu, Space, Typography } from "antd";
import Logo from "../Statics/Images/Logo.png";

import "../Statics/Styles/Styles.css";
import AboutMeModal from "../Modals/AboutMeModal";

const { Text } = Typography;
const { Header, Content, Footer } = Layout;

const AuctionSkeleton = ({ children }) => {
  const [isAboutMeModalVisible, setIsAboutMeModalVisible] = useState(false);

  const aboutMeClicked = () => {
    setIsAboutMeModalVisible(true);
  };

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
          <Image src={Logo} width={50} height={50} preview={false} />
        </div>
        <Menu mode="horizontal" style={{ background: "#F0F2F5" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "right",
              width: "100%",
            }}
          >
            <Menu.Item key="0" style={{ float: "right" }}>
              <Button type="link">Methodology</Button>
            </Menu.Item>
            <Menu.Item key="1" style={{ float: "right" }}>
              <Button type="link" onClick={aboutMeClicked}>
                About
              </Button>
              <AboutMeModal
                isAboutMeModalVisible={isAboutMeModalVisible}
                setIsAboutMeModalVisible={setIsAboutMeModalVisible}
              />
            </Menu.Item>
          </div>
        </Menu>
        <Content style={{ width: "100%" }}>{children}</Content>
        <Footer className="footer">
          <Text>All rights reserved by University of Victoria</Text>
        </Footer>
      </Header>
    </Layout>
  );
};

export default AuctionSkeleton;
