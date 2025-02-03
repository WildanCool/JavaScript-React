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
import UsersPage from "./userPage";
import UpdateUsers from "./updatePage";
import DeleteUserPage from "./deleteUserPage";

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
    path: "/usersPage",
    element: <UsersPage />,
  },
  {
    path: "/updatePage",
    element: <UpdateUsers />,
  },
  {
    path: "/deleteUserPage",
    element: <DeleteUserPage />,
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
