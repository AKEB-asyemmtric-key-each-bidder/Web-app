import React from "react";
import { Form, Modal } from "antd";
import EnterAssetInfoForm from "../Steps/Enter/EnterAssetInfoForm";

const EnterAssetModal = ({ visible, setVisible }) => {
  const [form] = Form.useForm();

  const cancelClicked = () => {
    setVisible(false);
  };

  const submitClicked = () => {
    form.validateFields().then((values) => {
      console.log("values", values);
    });
  };

  return (
    <Modal
      visible={visible}
      setVisible={setVisible}
      title="Enter Asset Information"
      onCancel={cancelClicked}
      okText="Submit"
      onOk={submitClicked}
    >
      <EnterAssetInfoForm form={form} />
    </Modal>
  );
};

export default EnterAssetModal;
