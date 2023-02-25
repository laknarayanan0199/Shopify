import React from "react";
import { useSelector } from "react-redux";
import Products from "../products/Products";
import Cart from "../cart/Cart";

const MainPage = () => {
  const showProducts = useSelector((state) => state.ui.productsIsVisible);
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  return (
    <>
      {showProducts && <Products />}
      {showCart && <Cart />}
    </>
  );
};

export default MainPage;
