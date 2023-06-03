import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart";

const CartButton = (props) => {

  const productNumber = useSelector((state) => state.cart.products)
  const dispatch = useDispatch();
  const handleShowCart = () => {
    console.log("button clicked")
    dispatch(cartActions.toggleCart());
  };
  return (
    <button className={classes.button} onClick={handleShowCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{productNumber}</span>
    </button>
  );
};

export default CartButton;
