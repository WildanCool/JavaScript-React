import axios from "axios";
import { useState } from "react";

const SimpleUserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        name,
        email,
      })
      .then((response) => {
        setResponseData(response.data);
      })
      .catch((error) => {
        setError(error.massage);
      });
  };

  return ( 
    <div>
      <h1>Submit User Information</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name :</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email :</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {responseData && (
        <div>
          <h3>Respone from Server:</h3>
          <p>{JSON.stringify(responseData, null, 2)}</p>
        </div>
      )}

      {error && (
        <div>
          <h3>Error : </h3>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default SimpleUserForm;