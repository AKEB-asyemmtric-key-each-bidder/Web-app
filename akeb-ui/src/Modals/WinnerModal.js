import { Modal, Tag } from "antd";
import React, { useContext } from "react";
import BidsContext from "../Context/BidsContext";

const WinnerModal = ({ winnerModalVisible, setWinnerModalVisible }) => {
  const { winnerAddress, winnerNonce, winnerBid } = useContext(BidsContext);
  const onClose = () => {
    setWinnerModalVisible(false);
  };
  return (
    <Modal
      visible={winnerModalVisible}
      onCancel={onClose}
      onOk={onClose}
      title="Winner information"
    >
      <ul>
        <li>
          Address: <Tag>{winnerAddress}</Tag>
        </li>
        <li>
          Bid: <Tag>{winnerBid}</Tag> Ether
        </li>
        <li>
          Nonce: <Tag>{winnerNonce}</Tag>
        </li>
      </ul>
    </Modal>
  );
};

export default WinnerModal;
