import { Button, Card } from "antd";
import React, { useState } from "react";
import WinnerModal from "../Modals/WinnerModal";

const WinnerCard = () => {
  const [winnerModalVisible, setWinnerModalVisible] = useState(false);
  const onShowWinnerClicked = () => {
    setWinnerModalVisible(true);
  };

  return (
    <Card>
      <Button type="link" onClick={onShowWinnerClicked}>
        Show Winner
      </Button>
      <WinnerModal
        winnerModalVisible={winnerModalVisible}
        setWinnerModalVisible={setWinnerModalVisible}
      />
    </Card>
  );
};

export default WinnerCard;
