import axios from "axios";

export function getProducts() {
  return axios.get("/products");
}

export function getProductId(productId) {
  return axios.get(`/products/${productId}`);
}

export function updateProduct(productId, data) {
  return axios.put(`/products/${productId}`, { ...data });
}

export function createProduct(data) {
  return axios.post(`/products`, { ...data });
}

export function deleteProduct(productId) {
  return axios.delete(`/products/${productId}`);
}
