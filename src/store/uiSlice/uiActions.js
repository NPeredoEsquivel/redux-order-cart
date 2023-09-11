import { toggleNotification } from "./uiSlice";

export const toggleNotificationUI = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(toggleNotification());
    }, 2000);
  };
};
