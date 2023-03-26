import "./App.css";
import MainHeader from "./components/UI/MainHeader";
import { Route, Routes } from "react-router";
import ProductDetail from "./components/products/ProductDetail";
import Cart from "./components/cart/Cart";
import Products from "./components/products/Products";

function App() {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/details/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
