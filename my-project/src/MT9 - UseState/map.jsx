import { useState } from "react";

const UpdateStateWithMap = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Perdana", active: false },
    { id: 2, name: "Muhammad", active: false },
    { id: 3, name: "Wildan", active: false },
  ]);

  const toggleActive = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  return (
    <div>
      <h1>Daftar Pengguna: </h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="mb-2">
            <span>
              {user.name} -
              {user.active ? "Aktif" : "Tidak Aktif"}
            </span>

            <button
              onClick={() => toggleActive(user.id)}
              className="ml-4 px-2 py-2 bg-blue-500 text-white rounded"
            >
              Toggle
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpdateStateWithMap;