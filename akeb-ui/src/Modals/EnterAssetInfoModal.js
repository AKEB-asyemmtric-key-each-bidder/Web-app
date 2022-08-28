import React, { useContext, useEffect, useState } from "react";
import { Form, Modal } from "antd";
import EnterAssetInfoForm from "../Steps/Enter/EnterAssetInfoForm";
import BidsContext from "../Context/BidsContext";
import { submitAssetInfoIntoBC } from "../Steps/Validate/Networks";
import StepStateContext from "../Context/StepStateContext";
import BlockchainContext from "../Context/BlockchainContext";

const EnterAssetModal = ({ visible, setVisible }) => {
  const [form] = Form.useForm();
  const { asset, setAsset } = useContext(BidsContext);
  const { setStepsState } = useContext(StepStateContext);
  const { contract, address } = useContext(BlockchainContext);
  const [loading, setLoading] = useState(false);

  const cancelClicked = () => {
    setVisible(false);
  };

  const submitClicked = () => {
    form.validateFields().then((values) => {
      setLoading(true);
      setAsset(values);
    });
  };

  useEffect(() => {
    asset &&
      submitAssetInfoIntoBC(
        asset,
        setVisible,
        setStepsState,
        setLoading,
        contract,
        address
      );
  }, [asset]);

  return (
    <Modal
      visible={visible}
      setVisible={setVisible}
      title="Enter Asset Information"
      onCancel={cancelClicked}
      okText="Submit"
      onOk={submitClicked}
      okButtonProps={{ loading: loading }}
    >
      <EnterAssetInfoForm form={form} />
    </Modal>
  );
};

export default EnterAssetModal;
