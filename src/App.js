import React, { Fragment, useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

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
    <Fragment>
      <AddUser onAddUser={setNewUserList} />
      <UsersList users={newUser}></UsersList>
    </Fragment>
  );
}

export default App;
