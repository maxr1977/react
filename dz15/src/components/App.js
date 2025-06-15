import React, { useState, useCallback, useMemo } from "react";
import "../styles/App.css";
import UserList from "./UserList";

const App = () => {
  const userList = useMemo(() => [
  { id: 1, name: "Anna" },
  { id: 2, name: "Boris" },
  { id: 3, name: "Carla" },
  { id: 4, name: "Dmytro" }
], []);
  
  const [filter, setFilter] = useState("");

  const filterUsers = useCallback(
    (filterText) =>
      userList.filter(user =>
        user.name.toLowerCase().includes(filterText.toLowerCase())
      ),
    [userList]
  );

  const filteredUsers = useMemo(
    () => filterUsers(filter),
    [filter, filterUsers]
  );

  return (
    <div>
      <h2>Пользователи</h2>
      <input
        type="text"
        placeholder="Фильтр по имени"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      <UserList users={filteredUsers} />
    </div>
  );
};

export default App;
