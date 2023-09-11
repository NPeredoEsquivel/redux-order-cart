import classes from "./CartButton.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../../../store/uiSlice/uiSlice";

const CartButton = (props) => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const onCartClickHandler = () => {
    dispatch(toggleCart());
  };
  return (
    <button onClick={onCartClickHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{items.length ?? 0}</span>
    </button>
  );
};

export default CartButton;
