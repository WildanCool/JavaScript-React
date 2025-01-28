import axios from "axios";
import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userProfile, setUserProfile] = useState(null);
  const [error, setError] = useState("");

  const handleLogin = () => {
    
  };

  return (
    <div>
      <h2>LoginPage</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />

      <button onClick={handleLogin}>LOGIN</button>

      {error && <p>{error}</p>}
      {userProfile && (
        <div>
          <h3>User Profile</h3>
          <ul>
            <li>ID: {userProfile.id}</li>
            <li>Name: {userProfile.name}</li>
            <li>Email: {userProfile.email}</li>
            <li>Role: {userProfile.role}</li>
            <li>
              <img src={userProfile.avatar} alt="avatar" width="100" />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Login;
