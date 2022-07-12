import React, { useContext } from "react";
import { Divider, Modal, Tag, Typography } from "antd";
import BlockchainContext from "../Context/BlockchainContext";
import BidsContext from "../Context/BidsContext";

const { Paragraph } = Typography;

const SubmitWinnerModal = ({ visible, setVisible }) => {
  const { address } = useContext(BlockchainContext);
  const { bid, nonce } = useContext(BidsContext);

  const okClicked = () => {
    console.log("ok clicked");
  };

  return (
    <Modal
      visible={visible}
      setVisible={setVisible}
      title="It looks like you are the winner"
      okText="Submit"
      onOk={okClicked}
      closable={false}
    >
      <Paragraph>
        Our algorithm has detected that you are the winner. Now you have to
        submit your bid information to blockchain.
      </Paragraph>
      <Divider />
      <Paragraph>
        By submitting the bid information, the following will be submitted into
        blockchain:
        <ul>
          <li>
            Address: <Tag>{address}</Tag>
          </li>
          <li>
            Nonce: <Tag>{nonce}</Tag>
          </li>
          <li>
            Bid: <Tag>{bid}</Tag>
          </li>
        </ul>
      </Paragraph>
    </Modal>
  );
};

export default SubmitWinnerModal;
