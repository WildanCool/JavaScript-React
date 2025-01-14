import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

function CobaRouter() {
  return <h2>Halaman Utama</h2>;
}

function SecondPlace() {
  return <h2>Halaman Kedua</h2>;
}

function ErrorPage() {
  return (
    <>
      <h2 className="text-4xl">Oops!</h2>
      <p>Halaman Tidak Ditemukan</p>
      <Link to="/" className="bg-blue-400 rounded-xl">
        Pergi Ke Home
      </Link>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <CobaRouter />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/second",
    element: <SecondPlace />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
