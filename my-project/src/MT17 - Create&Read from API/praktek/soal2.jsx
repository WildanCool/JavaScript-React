import {
  createBrowserRouter,
  RouterProvider,
  Link,
  useParams,
} from "react-router-dom";
import ProductDetail from "./productDetail";
import ProductList from "./itemList";
import LoginPage from "./loginPage";
import ProtectedRoute from "./protectedRoute";
import CreateAccPage from "./createAccPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/createAccount",
    element: <CreateAccPage />,
  },
  {
    path: "/product",
    element: (
      <ProtectedRoute>
        <ProductList />
      </ProtectedRoute>
    ),
  },
  {
    path: "/product/:id",
    element: (
      <ProtectedRoute>
        <ProductDetail />
      </ProtectedRoute>
    ),
  },
]);

function AxioCard() {
  return <RouterProvider router={router} />;
}

export default AxioCard;
