import React, { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData, sendCartData } from "./redux/cartActions";

let isInitial = true;

function App() {
  const cart = useSelector((state) => state.cart);
  const changed = useSelector((state) => state.cart.changed);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch, changed]);

  return (
    <React.Fragment>
      {notification && <Notification />}
      <Layout>
        <Cart />
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
