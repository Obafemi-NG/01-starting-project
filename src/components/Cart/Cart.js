import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import React from "react";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const display = useSelector((state) => state.ui.display);
  return (
    <React.Fragment>
      {display && (
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                price={item.price}
                title={item.name}
                total={item.totalPrice}
                quantity={item.quantity}
              />
            ))}
          </ul>
        </Card>
      )}
    </React.Fragment>
  );
};

export default Cart;
