import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, useParams, useNavigate } from "react-router-dom";

// Halaman Home
function HomePage() {
  const [userId, setUserId] = useState(""); // State untuk menyimpan input userId
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (userId) {
      navigate(`/profile/${userId}`); // Navigasi ke halaman user berdasarkan input userId
    } else {
      alert("Please enter a valid User ID");
    }
  };

  return (
    <div>
      <h1>Home Page</h1>
      <input
        type="text"
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleNavigate}>Go to User Page</button>
    </div>
  );
}

// Halaman About
function AboutPage() {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}

// Halaman User (Dinamis)
function UserPage() {
  const { userId } = useParams();

  return (
    <div>
      <h1>User Page</h1>
      <p>Ini adalah halaman profil untuk pengguna dengan ID: {userId}</p>
    </div>
  );
}

// Halaman NotFound
function NotFoundPage() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
    </div>
  );
}

// Router Config
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/user/:userId",
    element: <UserPage />,
  },
]);

// Root Render
function Explore() {
  return <RouterProvider router={router} />;
}

export default Explore;
