import React from "react";
import { Form, Modal } from "antd";
import EnterAssetInfoForm from "../Steps/Enter/EnterAssetInfoForm";

const EnterAssetModal = ({ visible, setVisible }) => {
  const [form] = Form.useForm();

  const cancelClicked = () => {
    setVisible(false);
  };

  return (
    <Modal
      visible={visible}
      setVisible={setVisible}
      title="Enter Asset Information"
      onCancel={cancelClicked}
    >
      <EnterAssetInfoForm form={form} />
    </Modal>
  );
};

export default EnterAssetModal;
