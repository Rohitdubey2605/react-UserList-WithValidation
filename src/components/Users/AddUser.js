import { Fragment, useState } from "react";
// import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isValidData, setIsValidData] = useState(true);
  const [error, setError] = useState();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (+enteredAge.trim().length > 0 && enteredUserName.trim().length > 0) {
      const newUser = {
        userId: Math.random().toString(),
        userName: enteredUserName,
        userAge: enteredAge,
      };
      props.onAddUser(newUser);
      setEnteredUserName("");
      setEnteredAge("");
    } else {
      setIsValidData(false);
      setError({
        title: "Invalid Data",
        message: "Please enter a valid record",
      });
      return;
    }
  };

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = ()=>
  {
    setIsValidData(true);
  }

  return (
    <Fragment>
      {!isValidData && (
        <ErrorModal cancel={errorHandler} title={error.title} message={error.message} />
      )}
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
    </Fragment>
  );
};

export default AddUser;
