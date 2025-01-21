import {
  createBrowserRouter,
  Link,
  RouterProvider,
  useParams,
} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function DetailUser() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  console.log(user);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>ID USER: {id}</h1>
      <h2 className="text-2xl font-bold">{user.title}</h2>
      <p>{user.body}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <p>Welcome! Click on a user to see details.</p>,
  },
  {
    path: "/:id",
    element: <DetailUser />,
  },
]);

function CobaUseParams() {
  return <RouterProvider router={router} />;
}

export default CobaUseParams;
