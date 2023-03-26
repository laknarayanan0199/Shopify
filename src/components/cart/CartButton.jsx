import React from "react";
import {  useSelector } from "react-redux";
// import { uiActions } from "../../store/uiSlice";
import classes from "./CartButton.module.css";
import cart from "./cart.png";
import { useNavigate } from "react-router";

const CartButton = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  // const dispatch = useDispatch();
  const navigate = useNavigate();


  const showCartHandler = () => {
    // dispatch(uiActions.showCart());
    navigate(`/cart`);

  };
  return (
    <button className={classes.button} onClick={showCartHandler}>
      <div className={classes.cart}>
        <span>
          <img src={cart} alt="cart" />
        </span>
        <span className={classes.badge}>{totalQuantity}</span>
      </div>
    </button>
  );
};

export default CartButton;
