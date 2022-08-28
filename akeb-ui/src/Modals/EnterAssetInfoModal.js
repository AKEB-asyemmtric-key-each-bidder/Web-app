import React, { useContext, useEffect } from "react";
import { Form, Modal } from "antd";
import EnterAssetInfoForm from "../Steps/Enter/EnterAssetInfoForm";
import BidsContext from "../Context/BidsContext";

const EnterAssetModal = ({ visible, setVisible }) => {
  const [form] = Form.useForm();
  const { asset, setAsset } = useContext(BidsContext);

  const cancelClicked = () => {
    setVisible(false);
  };

  const submitClicked = () => {
    form.validateFields().then((values) => {
      setAsset(values);
    });
  };

  useEffect(() => {
    console.log("asset", asset);
  }, [asset]);

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
