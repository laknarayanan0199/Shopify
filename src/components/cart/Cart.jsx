import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import { useNavigate } from "react-router";

const Cart = () => {
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);
  // console.log(cartItems);

  const productsPageNavigator = () => {
    navigate("/");
  };

  return (
    // <Card>
      <div className={classes.cart}>
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
    // </Card>
  );
};

export default Cart;
