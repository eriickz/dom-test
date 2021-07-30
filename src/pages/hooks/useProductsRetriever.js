import { useState, useEffect } from "react";
import { getProducts, getProductId } from "../services";

const useProductsRetriever = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(({ data }) => {
      setProducts(data);
    })
  }, [])

  const getProductById = productId => {
    getProductId(productId).then(({ data }) => {
      return data;
    })
  }

  return { products, getProductById };
}

export default useProductsRetriever;
