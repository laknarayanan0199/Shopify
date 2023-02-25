import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import Card from "../UI/Card";
import { uiActions } from "../../store/uiSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);

  const productsPageNavigator = () => {
    dispatch(uiActions.showCart());
  };

  return (
    <Card className={classes.cart}>
      <div>
        {cartItems.length === 0 ? (
          <div className={classes.emptyCart}>
            <p>Your Cart is empty</p>
            <button onClick={productsPageNavigator}>
              Add products to cart
            </button>
          </div>
        ) : (
          <h1 className={classes.h1}>Cart Items</h1>
        )}
        <ul className={classes.u1}>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={{
                id: item.id,
                title: item.title,
                quantity: item.quantity,
                price: item.price,
                totalPrice: item.totalPrice,
              }}
            />
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default Cart;
