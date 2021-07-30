import ProductList from "./pages/ProductList"
import ProductForm from "./pages/ProductForm"

const routes = [
  { path: "/", exact: true, component: ProductList },
  { path: "/productos", exact: true, component: ProductList },
  { path: "/producto/:productId", exact: true, component: ProductForm },
  { path: "/nuevo-producto", exact: true, component: ProductForm },
];

export default routes;
