import ProductItem from "../ProductItem/ProductItem";
import classes from "./Products.module.scss";
import { useSelector } from "react-redux";

const Products = (props) => {
  const productsState = useSelector((state) => state.products);
  const { products } = productsState;

  const productsJSX = products.map((singleProduct) => {
    const { id, title, price, description } = singleProduct;
    return (
      <ProductItem
        key={id}
        id={id}
        title={title}
        price={price}
        description={description}
      />
    );
  });
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{productsJSX}</ul>
    </section>
  );
};

export default Products;
