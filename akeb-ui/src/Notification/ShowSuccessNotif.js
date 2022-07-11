import { notification } from "antd";

const showSuccessNotif = (message) => {
  notification["success"]({
    message: message,
    description: null,
  });
};

export default showSuccessNotif;
