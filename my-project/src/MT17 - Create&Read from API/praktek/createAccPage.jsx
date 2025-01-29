import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const CreateAccPage = () => {
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    role: "customer",
    avatar: "https://i.imgur.com/LDOO4Qs.jpg",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateUser = (e) => {
    e.preventDefault(); // Prevents page refresh

    const newUser = {
      ...formData,
      creationAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    axios
      .post("https://api.escuelajs.co/api/v1/users", newUser)
      .then((response) => {
        setMessage(`User Created: ${response.data.name}`);
      })
      .catch((error) => {
        setMessage(`Error: ${error.message}`);
      });

    setFormData({
      email: "",
      password: "",
      name: "",
      role: "customer",
      avatar: "https://i.imgur.com/LDOO4Qs.jpg",
    });
  };

  return (
    <div>
      <h2>Create User</h2>
      <Link to="/">Back To Login</Link>

      <form onSubmit={handleCreateUser}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <button type="submit">Create User</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default CreateAccPage;
