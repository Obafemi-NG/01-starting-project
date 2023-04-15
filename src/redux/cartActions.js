import { replaceItem } from "./cartSlice";
import { displayNotification } from "./uiSlice";

export const fetchCartData = () => {
  return async (dispatch) => {
    dispatch(
      displayNotification({
        title: "Fetching",
        message: "Fetching items from cart...",
        status: "pending",
      })
    );
    const fetchData = async () => {
      const response = await fetch(
        "https://use-http-c96c5-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("Failed to successfully send cart data.");
      }
      const data = await response.json();
      dispatch(replaceItem(data));
    };
    try {
      fetchData();
      dispatch(
        displayNotification({
          title: "Success",
          message: "Item successfully fetched from cart",
          status: "success",
        })
      );
    } catch (error) {
      dispatch(
        displayNotification({
          title: "Failed",
          message: error.message,
          status: "failed",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      displayNotification({
        title: "Pending",
        message: "Adding item to cart...",
        status: "pending",
      })
    );
    try {
      const response = await fetch(
        "https://use-http-c96c5-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items || [],
            totalQuantity: cart.totalQuantity,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to successfully send cart data.");
      }
      dispatch(
        displayNotification({
          title: "Success",
          message: "Item successfully add to cart",
          status: "success",
        })
      );
    } catch (error) {
      dispatch(
        displayNotification({
          title: "Failed",
          message: error.message,
          status: "failed",
        })
      );
    }
  };
};
