import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { cartActions, fetchCartData } from "./store/cart";
import { useDispatch } from "react-redux";
import { Fragment } from "react";
import Notification from "./components/UI/Notification";
import { sendCartData } from "./store/cart";

function App() {
  const showCart = useSelector((state) => state.cart.showCart);
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.cart.notification);
  const [isInitial, setIsInitial] = useState(true);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      setIsInitial(false);
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
