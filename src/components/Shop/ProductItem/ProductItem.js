import Card from "../../UI/Card/Card";
import classes from "./ProductItem.module.scss";
import { useDispatch } from "react-redux";
import { addItem } from "../../../store/cartSlice/cartSlice";

const ProductItem = (props) => {
  const { id, title, price, description } = props;
  const dispatch = useDispatch();

  const onAddItemEventHandler = () => {
    dispatch(addItem({ id, title, price, description }));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={onAddItemEventHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
