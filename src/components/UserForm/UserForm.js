import { useState } from "react";
import Button from "../Button/Button";
import styles from "./UserForm.module.css";
import buttonStyles from "../Button/Button.module.css";
const UserForm = (props) => {
  const [username, setUsername] = useState("")
  const [years, setYears] = useState("")
  const onSubmitHandler = event => {
    event.preventDefault()
    const item = {
      username,
      title: years
    }
    props.onNewItem(item)
    setUsername("")
    setYears("")
  };

  const userNameHandler = event => {
    setUsername(event.target.value)
  }
  const yearsHandler = event =>{
    setYears(event.target.value)
  }
  return (
    <div className={styles.user}>
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
          <Button
            class={buttonStyles["add-user"]}
            title="Add User"
          />
        </div>
      </form>
    </div>
  );
};

export default UserForm;
