import { useEffect } from "react";
import Notification from "./components/UI/Notification/Notification";
import Cart from "./components/Cart/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products/Products";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartData, sendCartData } from "./store/cartSlice/cartActions";

function App() {
  const { cartVisible, notification } = useSelector((state) => state.ui);
  const { items, changed } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log("notification", notification);
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (items.length > 0 && changed) {
      dispatch(sendCartData(items));
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
