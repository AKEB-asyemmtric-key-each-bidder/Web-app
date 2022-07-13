import React from "react";
import { Divider, Modal, Tag, Typography } from "antd";

const { Paragraph } = Typography;

const GasCostModal = ({ visible, setVisible }) => {
  const cancelClicked = () => {
    setVisible(false);
  };

  return (
    <Modal
      visible={visible}
      setVisible={setVisible}
      title="Gas costs"
      footer={null}
      onCancel={cancelClicked}
    >
      <Paragraph>
        These are estimated values and can slightly vary in different network
        situations
      </Paragraph>
      <Divider />
      <ul>
        <li>
          Register bidder : <Tag>0.00018224 Ether</Tag>
        </li>
        <Divider />
        <li>
          Submit bid : <Tag>0.00013614 Ether</Tag>
        </li>
        <Divider />
        <li>
          Submit winner information : <Tag>0.00013155 Ether</Tag>
        </li>
        <Divider />
        <li>
          Dispute : <Tag>0.00035623 Ether</Tag>
        </li>
        <Divider />
        <li>
          Get winner information : <Tag>0 Ether</Tag>
        </li>
        <Divider />
        <li>
          Get disputted information : <Tag>0 Ether</Tag>
        </li>
      </ul>
    </Modal>
  );
};

export default GasCostModal;
