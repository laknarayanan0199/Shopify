import React from "react";
import { useDispatch } from "react-redux";

import Card from "../UI/Card";
import { cartActions } from "../../store/cartSlice";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const { id, name, price, description } = props;

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addToCart({ id, name, price, description }));
  };
  return (
    <Card>
      <h3>{name}</h3>
      <span>Price: ${price}</span>
      <p>Product Details: {description}</p>
      <button className={classes.cartBtn} onClick={addToCartHandler}>
        Add to cart
      </button>
    </Card>
  );
};

export default ProductItem;
