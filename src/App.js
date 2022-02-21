import React, { useState } from "react";
import AddUser from "./Users/AddUser";
import UsersList from "./Users/UsersList";

const initialUserList = [
  {
    userId: 1,
    userName: "Rohit",
    userAge: 24,
  },
];

function App() {
  const [newUser, setNewUser] = useState(initialUserList);

  const setNewUserList = (newUserInfo) => {
    setNewUser((prevUserList) => {
      return [newUserInfo, ...prevUserList];
    });
  };

  return (
    <div>
      <AddUser onAddUser={setNewUserList} />
      <UsersList users={newUser}></UsersList>
    </div>
  );
}

export default App;
