import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const productNumber = useSelector((state) => state.cart.products);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{ title: "Test Item", quantity: productNumber, total: productNumber * 6, price: 6 }}
        />
      </ul>
    </Card>
  );
};

export default Cart;
