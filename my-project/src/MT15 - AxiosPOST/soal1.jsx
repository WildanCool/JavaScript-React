import axios from "axios";
import { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://fakestoreapi.com/auth/login", {
        username,
        password,
      })
      .then((response) => {
        setResponseData(response.data);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setResponseData(null);
      });
  };

  return (
    <div>
      <h1>Submit User Information</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {responseData && (
        <div>
          <p>Anda Berhasil Login {JSON.stringify(responseData)}</p>
        </div>
      )}

      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
