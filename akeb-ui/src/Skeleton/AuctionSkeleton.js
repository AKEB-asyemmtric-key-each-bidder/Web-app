import React, { useState } from "react";
import { Button, Image, Layout, Menu } from "antd";
import Logo from "../Statics/Images/Logo.png";

import "../Statics/Styles/Styles.css";
import AboutMeModal from "../Modals/AboutMeModal";
import MethodologyModal from "../Modals/MethodologyModal";

const { Header, Content } = Layout;

const AuctionSkeleton = ({ children }) => {
  const [isAboutMeModalVisible, setIsAboutMeModalVisible] = useState(false);
  const [methodologyModalVisible, setMethodologyModalVisible] = useState(false);

  const aboutMeClicked = () => {
    setIsAboutMeModalVisible(true);
  };

  const methodClicked = () => {
    setMethodologyModalVisible(true);
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
              <Button type="link" onClick={methodClicked}>
                Methodology
              </Button>
              <MethodologyModal
                methodologyModalVisible={methodologyModalVisible}
                setMethodologyModalVisible={setMethodologyModalVisible}
              />
            </Menu.Item>
            <Menu.Item
              key="1"
              style={{
                float: "right",
              }}
            >
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
      </Header>
    </Layout>
  );
};

export default AuctionSkeleton;
