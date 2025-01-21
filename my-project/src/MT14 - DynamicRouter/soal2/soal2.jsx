import {
  createBrowserRouter,
  RouterProvider,
  Link,
  useParams,
} from "react-router-dom";
import ProductDetail from "./productDetail";
import ProductList from "./ItemList";


const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductList />,
  },
  {
    path: "/product/:id",
    element: <ProductDetail />,
  },
]);

function AxioCard() {
  return <RouterProvider router={router} />;
}

export default AxioCard;