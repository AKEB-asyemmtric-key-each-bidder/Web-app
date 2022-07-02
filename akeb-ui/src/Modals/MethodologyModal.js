import { Divider, Modal, Typography } from "antd";
import React from "react";

const { Paragraph } = Typography;

const MethodologyModal = ({
  methodologyModalVisible,
  setMethodologyModalVisible,
}) => {
  const onClose = () => {
    setMethodologyModalVisible(false);
  };
  return (
    <Modal
      title="Methodolgy"
      visible={methodologyModalVisible}
      onCancel={onClose}
      onOk={onClose}
    >
      <Paragraph>This is a first price sealed bid auction system.</Paragraph>
      <Paragraph>
        Despite other auction systems on blockchain which violate user privacy,
        this auction system preserves user privacy and provides a reliable way
        to confirm the integrity of the system.
      </Paragraph>
      <Paragraph>
        You can find all transactions of this system on{" "}
        <a
          href="https://rinkeby.etherscan.io/address/0x06602d0adf53e42c9afcd163cc3e0f1c46cd8c88"
          target="_blank"
          rel="noopener noreferrer"
        >
          Etherscan
        </a>
      </Paragraph>
      <Divider />
      <Paragraph>
        This approach uses the following tools
        <ul>
          <li>
            Reactjs: for designing and developing UI (user interface) and
            validating AWS
          </li>
          <li>
            Smart contract: for storing all data in a secure manner (Rinkeby
            testnet)
          </li>
          <li>
            AWS (Amazon Web Service): for calculating the winner (Please note
            that only bid numbers are passed to AWS and is deleted upon
            completion)
          </li>
        </ul>
      </Paragraph>
    </Modal>
  );
};

export default MethodologyModal;
