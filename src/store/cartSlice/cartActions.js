import { updateNotification } from "../uiSlice/uiSlice";
import { initialiceItems } from "../cartSlice/cartSlice";

const PENDING = "Pending";
const SUCCESS = "Success";
const ERROR = "Error";

export const fetchCartData = () => {
  return async (dispatch) => {
    const getData = async () => {
      const response = await fetch(
        "https://cart-storage-4e37f-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Failed fetching data");
      }
      const data = await response.json();
      return data;
    };

    try {
      const data = await getData();
      const items = data ?? [];
      dispatch(initialiceItems(items));
    } catch (error) {
      dispatch(
        updateNotification({
          title: ERROR,
          message: "Error while fetching data",
          status: ERROR.toLowerCase(),
        })
      );
      console.error("error while fetching data", error);
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      updateNotification({
        title: PENDING,
        message: "Sending data...",
        status: "",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://cart-storage-4e37f-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to send data");
      }
    };
    try {
      await sendRequest();
      dispatch(
        updateNotification({
          title: SUCCESS,
          message: "Successfully sent",
          status: SUCCESS.toLowerCase(),
        })
      );
    } catch (error) {
      dispatch(
        updateNotification({
          title: ERROR,
          message: "Failed to send data",
          status: ERROR.toLowerCase(),
        })
      );
    }
  };
};
