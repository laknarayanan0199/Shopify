import React from "react";
import { Link } from "react-router-dom";

import CartButton from "../cart/CartButton";
import SearchPage from "../pages/Search";
import classes from "../UI/Header.module.css";

const MainHeader = () => {
  return (
    <nav className={classes.header}>
      <h1>
        <Link to={"/"}>SS</Link>
      </h1>
      <ul>
        <li className={classes.listItems}>
          <SearchPage />
        </li>
        <li className={classes.listItems}>
          <CartButton />
        </li>
      </ul>
    </nav>
  );
};

export default MainHeader;
