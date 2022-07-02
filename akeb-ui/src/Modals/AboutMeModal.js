import { Modal } from "antd";
import React from "react";

const AboutMeModal = ({ isAboutMeModalVisible, setIsAboutMeModalVisible }) => {
  const onClose = () => {
    setIsAboutMeModalVisible(false);
  };

  return (
    <Modal
      title="About me"
      visible={isAboutMeModalVisible}
      onCancel={onClose}
      onOk={onClose}
    >
      About me
    </Modal>
  );
};

export default AboutMeModal;
