import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { toggleCart } from "../../redux/uiSlice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.cart.totalQuantity);
  return (
    <button onClick={() => dispatch(toggleCart())} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartCount}</span>
    </button>
  );
};

export default CartButton;
