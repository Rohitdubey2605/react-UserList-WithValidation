import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (+enteredAge.trim().length > 0 && enteredUserName.trim().length > 0) {

      const newUser = 
        {
          userId : Math.random().toString(),
          userName : enteredUserName,
          userAge : enteredAge
        };
      console.log(enteredUserName, enteredAge);
      props.onAddUser(newUser);
      setEnteredUserName("");
      setEnteredAge("");
    }
    else{
        return;
    }
  };

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={styles.input}>
      <form className={styles.formControl} onSubmit={onSubmitHandler}>
        <label htmlFor="username">User Name</label>
        <input
          id="username"
          value={enteredUserName}
          type="text"
          onChange={userNameChangeHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          value={enteredAge}
          type="number"
          min="0"
          onChange={ageChangeHandler}
        />
      </form>
      <Button children="Add User" type="submit" onClick={onSubmitHandler} />
    </Card>
  );
};

export default AddUser;
