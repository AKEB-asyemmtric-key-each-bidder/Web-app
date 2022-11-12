import { Divider, Modal, Typography } from "antd";
import React from "react";

const { Paragraph } = Typography;

const AboutMeModal = ({ isAboutMeModalVisible, setIsAboutMeModalVisible }) => {
  const onClose = () => {
    setIsAboutMeModalVisible(false);
  };

  return (
    <Modal
      title="About Me"
      visible={isAboutMeModalVisible}
      onCancel={onClose}
      onOk={onClose}
    >
      <Paragraph>
        My name is Ehsan Ghasaei, graduated student in Master of engineering in
        Computer engineering @ University of Victoria. This is my Meng project.
      </Paragraph>
      <Divider />
      <Paragraph>
        All rights reserved by University of Victoria (UVIC) @ 2022
      </Paragraph>
    </Modal>
  );
};

export default AboutMeModal;
