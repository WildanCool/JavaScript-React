import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FoodList from "./readPage";
import AddFood from "./tambahPage";
import HomeScreen from "./home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/create",
    element: <AddFood />,
  },
  {
    path: "/read",
    element: <FoodList />,
  },
]);

function Praktek2Data() {
  return <RouterProvider router={router} />;
}

export default Praktek2Data;
