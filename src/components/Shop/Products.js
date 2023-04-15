import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: 1,
    title: "iPhone",
    price: 65.9,
  },
  {
    id: 2,
    title: "iPad",
    price: 195.9,
  },
  {
    id: 3,
    title: "iWatch",
    price: 45.9,
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((item) => (
          <ProductItem
            title={item.title}
            price={item.price}
            id={item.id}
            key={item.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
