import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FoodList from "./readPage";
import AddFood from "./tambahPage";
import HomeScreen from "./home";
import EditPage from "./updatePage";

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
  {
    path: "/updatePage/:index", // This is where we pass the index to EditPage
    element: <EditPage />,
  },
]);

function Praktek2Data() {
  return <RouterProvider router={router} />;
}

export default Praktek2Data;
