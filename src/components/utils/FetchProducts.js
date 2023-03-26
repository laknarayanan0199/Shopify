import { useEffect, useState } from "react";

export const useFetch = () => {
  const [products, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Page Not Found");
        }
        return res.json();
      })
      .then((prod) => {
        setProducts(prod);
        setIsLoading(false);
      })
      .catch((err) => setError(err.message));
  }, []);

  return { products, isLoading, error };
};
