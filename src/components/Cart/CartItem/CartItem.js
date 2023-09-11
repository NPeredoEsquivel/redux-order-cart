import classes from "./CartItem.module.scss";
import {
  increaseQuantity,
  decreaseQuantity,
} from "../../../store/cartSlice/cartSlice";
import { useDispatch } from "react-redux";
const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item;
  const dispatch = useDispatch();

  const onIncreaseEventHandler = () => {
    dispatch(increaseQuantity({ id }));
  };
  const onDecreaseEventHandler = () => {
    dispatch(decreaseQuantity({ id }));
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
          <button onClick={onDecreaseEventHandler}>-</button>
          <button onClick={onIncreaseEventHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
