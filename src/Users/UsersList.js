import Card from "../UI/Card";
import styles from './UsersList.module.css'

const UsersList = (props) => {
  return (
    <Card className = {styles.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.userId}>
              {user.userName} ({user.userAge} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
