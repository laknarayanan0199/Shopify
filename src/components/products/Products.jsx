import React from "react";
import { useSelector } from "react-redux";
import { useFetch } from "../utils/FetchProducts";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const { filteredProducts } = useSelector((state) => state.products);

  const { products, isLoading, error } = useFetch();

  const PRODUCTS = products.filter((product) =>
    product.title.toLowerCase().includes(filteredProducts.toLowerCase())
  );
  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className={classes.products}>
      {isLoading ? (
        <h3 style={{ textAlign: "center" }}>Loading...</h3>
      ) : PRODUCTS.length > 0 ? (
        PRODUCTS.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.title}
            price={item.price}
            description={item.description}
          />
        ))
      ) : (
        <h1>No Products Found</h1>
      )}
    </div>
  );
};

export default Products;
