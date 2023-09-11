import Card from "../../UI/Card/Card";
import classes from "./Cart.module.scss";
import CartItem from "../CartItem/CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartState = useSelector((state) => state.cart);
  const { items: cartItems } = cartState;
  const cartJSX = cartItems.map((singleCart) => {
    const { id, title, quantity, price } = singleCart;
    return (
      <CartItem
        key={id}
        item={{ id, title, quantity, total: quantity * price, price }}
      />
    );
  });
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{cartJSX}</ul>
    </Card>
  );
};

export default Cart;
