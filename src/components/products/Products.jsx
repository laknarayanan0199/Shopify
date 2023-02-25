import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const { filteredProducts } = useSelector((state) => state.products);

  const [products, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Page Not Found");
        }
        return res.json();
      })
      .then((prod) => {
        setProducts(prod.products);
        setIsLoading(false);
      })
      .catch((err) => setError(err.message));
  }, []);

  console.log(products, "Hello");

  // console.log(filteredProducts, "filter");

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
