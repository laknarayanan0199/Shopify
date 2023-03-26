import React from "react";
import { useDispatch } from "react-redux";

import Card from "../UI/Card";
import { cartActions } from "../../store/cartSlice";
import classes from "./ProductItem.module.css";
import { useNavigate } from "react-router";

const ProductItem = (props) => {
  const navigate = useNavigate();
  const { id, image, name, price, description } = props;

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addToCart({ id, name, price, description }));
  };

  const navigateHandler = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <Card>
      <div className={classes.productItem} onClick={() => navigateHandler(id)}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <span>Price: ${price}</span>
        <p className={classes.description}>
          <span>Product Details:</span>
          <br />
          {description}
        </p>
      </div>
      <button className={classes.cartBtn} onClick={addToCartHandler}>
        Add to cart
      </button>
    </Card>
  );
};

export default ProductItem;
