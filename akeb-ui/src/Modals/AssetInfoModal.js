import { Divider, Modal, Statistic } from "antd";
import { SketchOutlined } from "@ant-design/icons";
import React, { useContext, useEffect, useState } from "react";
import BlockchainContext from "../Context/BlockchainContext";
import { fetchAssetInfoFromBC } from "../Steps/Validate/Networks";

const AssetInfoModal = ({ visible, setVisible }) => {
  const [asset, setAsset] = useState();

  const { contract } = useContext(BlockchainContext);

  const cancelClicked = () => {
    setVisible(false);
  };

  useEffect(() => {
    visible == true && contract && fetchAssetInfoFromBC(contract, setAsset);
  }, [visible]);

  return (
    <Modal
      visible={visible}
      setVisible={setVisible}
      onCancel={cancelClicked}
      footer={null}
      title="Asset Info"
    >
      <Statistic
        title="Name"
        value={asset ? asset.name : ""}
        loading={asset ? false : true}
        prefix={<SketchOutlined style={{ color: "blue" }} />}
      />
      <Divider />
      <Statistic
        title="Description"
        value={asset ? asset.description : ""}
        loading={asset ? false : true}
      />
    </Modal>
  );
};

export default AssetInfoModal;
