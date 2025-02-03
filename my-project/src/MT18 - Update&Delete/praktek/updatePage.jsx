import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const UpdateUsers = () => {
  const [userId, setUserId] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();

    if (!userId) {
      setMessage("Please enter a user ID.");
      setIsSuccess(false);
      return;
    }

    axios
      .put(`https://api.escuelajs.co/api/v1/users/${userId}`, formData)
      .then((response) => {
        setMessage(`User updated: ${response.data.name}`);
        setIsSuccess(true);
        // Reset form setelah update sukses
        setUserId("");
        setFormData({ name: "", email: "", password: "" });
      })
      .catch((error) => {
        setMessage(`Error: ${error.message}`);
        setIsSuccess(false);
      });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-700">Update User</h1>
        <Link
          to="/"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Back to Login
        </Link>
      </div>
      <form onSubmit={handleUpdateUser} className="flex flex-col gap-4">
        <div>
          <label className="block text-gray-600 font-medium">User ID</label>
          <input
            type="text"
            name="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="Enter User ID"
            className="w-full border p-2 rounded mt-1"
            required
          />
        </div>

        <div>
          <label className="block text-gray-600 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter New Name"
            className="w-full border p-2 rounded mt-1"
            required
          />
        </div>

        <div>
          <label className="block text-gray-600 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter New Email"
            className="w-full border p-2 rounded mt-1"
            required
          />
        </div>

        <div>
          <label className="block text-gray-600 font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter New Password"
            className="w-full border p-2 rounded mt-1"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
        >
          Update User
        </button>
        {message && (
          <p className={`${isSuccess ? "text-green-600" : "text-red-500"}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default UpdateUsers;
