import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../../store/productsSlice";

import classes from "./Search.module.css";

const SearchPage = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);

  const searchHandler = (event) => {
    dispatch(productsActions.searchFilter(event.target.value));
    console.log(products);
  };

  return (
    <>
      <input
        placeholder="Search for Books"
        onChange={searchHandler}
        className={classes.search}
      />
    </>
  );
};

export default SearchPage;
