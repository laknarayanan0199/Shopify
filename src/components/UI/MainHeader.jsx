import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/uiSlice";

import CartButton from "../cart/CartButton";
import SearchPage from "../pages/Search";
import classes from "../UI/Header.module.css";

const MainHeader = () => {
  const dispatch = useDispatch();
  const homePageHandler = () => {
    dispatch(uiActions.showProducts());
  };

  return (
    <header className={classes.header}>
      <h1>
        <Link to={"/"} onClick={homePageHandler}>
          Shop
        </Link>
      </h1>
      <nav>
        <ul>
          <li className={classes.listItems}>
            <SearchPage />
          </li>
          <li className={classes.listItems}>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
