import { Divider, Modal, Statistic } from "antd";
import { SketchOutlined } from "@ant-design/icons";
import React from "react";

const AssetInfoModal = ({ visible, setVisible }) => {
  const cancelClicked = () => {
    setVisible(false);
  };

  return (
    <Modal
      visible={visible}
      setVisible={setVisible}
      onCancel={cancelClicked}
      footer={null}
      title="Asset Information"
    >
      <Statistic
        title="Name"
        value="Watch"
        prefix={<SketchOutlined style={{ color: "blue" }} />}
      />
      <Divider />
      <Statistic
        title="Description"
        value="Omega watch and great for your day!"
      />
    </Modal>
  );
};

export default AssetInfoModal;
