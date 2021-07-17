import { useState } from "react";
import Button from "../Button/Button";
import styles from "./UserForm.module.css";
import Card from "../Card/Card";
import ErrorModal from "../ErrorModal/ErrorModal";
const UserForm = (props) => {
  const [username, setUsername] = useState("");
  const [years, setYears] = useState("");
  const [error, setError] = useState();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const item = {
      username,
      title: years,
    };
    if (username.trim().length === 0 || years.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+years < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onNewItem(item);
    setUsername("");
    setYears("");
  };

  const userNameHandler = (event) => {
    setUsername(event.target.value);
  };
  const yearsHandler = (event) => {
    setYears(event.target.value);
  };
 const errorHandler = () =>{
   setError(null)
 }
  return (
    <div>
      {error && <ErrorModal title={error.title} message= {error.message} onConfirm={errorHandler}></ErrorModal>}
      <Card className={styles.input}>
        <form onSubmit={onSubmitHandler}>
          <div className={styles.formControl}>
            <label>
              <b>Username</b>
            </label>
            <input type="text" value={username} onChange={userNameHandler} />
          </div>
          <div className={styles.formControl}>
            <label>
              <b>Age(Years)</b>
            </label>
            <input type="number" value={years} onChange={yearsHandler} />
          </div>
          <div>
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default UserForm;
