import classes from "./CartItem.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;
  const productNumber = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const addProductHandler = () => {
    dispatch(
      cartActions.addProduct({
        id,
        title,
        price,
      })
    );
  };

  const minusProductHandler = () => {
    dispatch(cartActions.minusProduct(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={minusProductHandler}>-</button>
          <button onClick={addProductHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
