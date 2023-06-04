import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { cartActions } from "./store/cart";
import { useDispatch } from "react-redux";
import { Fragment } from "react";
import Notification from "./components/UI/Notification";

function App() {
  const showCart = useSelector((state) => state.cart.showCart);
  const cart = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.cart.notification);
  const [isInitial, setIsInitial] = useState(true);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        cartActions.showNotification({
          status: "pending",
          title: "sending",
          message: "sending cart data",
        })
      );
      const response = await fetch(
        "https://advanced-re-f6537-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );

      if (!response.ok) {
        throw new Error("sending cart data failed");
      }

      dispatch(
        cartActions.showNotification({
          status: "success",
          title: "success",
          message: "send cart data success",
        })
      );
    };

    if (isInitial) {
      setIsInitial(false);
      return;
    }

    sendCartData().catch((error) => {
      dispatch(
        cartActions.showNotification({
          status: "error",
          title: "error",
          message: "send cart data failed",
        })
      );
    });
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
