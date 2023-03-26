import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { cartActions } from "../../store/cartSlice";
import { useFetch } from "../utils/FetchProducts";
import classes from "./productDetail.module.css";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { products } = useFetch();

  const filteredProduct = products.filter((prod) => prod.id === Number(id));

  const addToCartHandler = (products) => {
    dispatch(cartActions.addToCart(products));
  };

  return (
    <div>
      {filteredProduct.map((product) => (
        <div key={product?.id} className={classes.product}>
          <img src={product?.image} alt={product?.name} />
          <h3>{product?.name}</h3>
          <span>Price: ${product?.price}</span>
          <p className={classes.description}>
            Product Details:
            <br />
            {product?.description}
          </p>
          <button
            className={classes.cartBtn}
            onClick={() => addToCartHandler(product)}
          >
            Add to cart
          </button>
          <button onClick={() => navigate("/")}>Back</button>
        </div>
      ))}
    </div>
  );
};

export default ProductDetail;
