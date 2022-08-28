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
    visible == true && fetchAssetInfoFromBC(contract, setAsset);
  }, [visible]);

  return (
    asset && (
      <Modal
        visible={visible}
        setVisible={setVisible}
        onCancel={cancelClicked}
        footer={null}
        title="Asset Information"
      >
        <Statistic
          title="Name"
          value={asset.name}
          prefix={<SketchOutlined style={{ color: "blue" }} />}
        />
        <Divider />
        <Statistic title="Description" value={asset.description} />
      </Modal>
    )
  );
};

export default AssetInfoModal;
