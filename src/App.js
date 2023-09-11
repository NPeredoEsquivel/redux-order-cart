import { useEffect } from "react";
import Notification from "./components/UI/Notification/Notification";
import Cart from "./components/Cart/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products/Products";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartData, sendCartData } from "./store/cartSlice/cartActions";
import { toggleNotificationUI } from "./store/uiSlice/uiActions";

function App() {
  const { cartVisible, notification } = useSelector((state) => state.ui);
  const { items, changed } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (items.length > 0 && changed) {
      dispatch(sendCartData(items));
      dispatch(toggleNotificationUI());
    }
  }, [items, changed, dispatch]);
  return (
    <>
      {notification.showNotification && <Notification />}
      <Layout>
        {cartVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
