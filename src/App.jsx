import { useState } from "react";
import "./App.css";
import { UserList } from "./components/userlist";
import { AddUser } from "./components/add-user";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "John", surname: "Doe", age: 25, email: "john@example.com", password: "12345678" },
    { id: 2, name: "Jane", surname: "Smith", age: 30, email: "jane@example.com", password: "123455678" },
    { id: 3, name: "John", surname: "Smith", age: 42, email: "john@example.com", password: "12345678"},
  ]);

  // const addUser = (user) => {
  //   const newUser = { id: Date.now(),...user };
  //   setUsers([...users, newUser]);

  // }
  const addUser = (newUserData) => {
    const newId = Date.now();
    const newUser = { ...newUserData, id: newId, age: Number(newUserData.age) };
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };
  return (
    <>
      <UserList 
        users={users}
      />
      <AddUser 
        onAddUser={addUser}
      />
    </>
  );
}

export default App;
