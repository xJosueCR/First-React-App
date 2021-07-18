import { useState, useRef } from "react";
import Button from "../Button/Button";
import styles from "./UserForm.module.css";
import Card from "../Card/Card";
import ErrorModal from "../ErrorModal/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
const UserForm = (props) => {

  const nameInputRef = useRef()
  const ageInputRef = useRef()

  // const [username, setUsername] = useState("");
  // const [years, setYears] = useState("");
  const [error, setError] = useState();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value
    const enteredAge = ageInputRef.current.value

    const item = {
      username: enteredName,
      title: enteredAge,
    };
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onNewItem(item);
    // setUsername("");
    // setYears("");
    
    // manipulate de DOM without react
    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
  };

  // const userNameHandler = (event) => {
  //   setUsername(event.target.value);
  // };
  // const yearsHandler = (event) => {
  //   setYears(event.target.value);
  // };
 const errorHandler = () =>{
   setError(null)
 }
  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message= {error.message} onConfirm={errorHandler}></ErrorModal>}
      <Card className={styles.input}>
        <form onSubmit={onSubmitHandler}>
          <div className={styles.formControl}>
            <label>
              <b>Username</b>
            </label>
            <input type="text" ref={nameInputRef}/>
          </div>
          <div className={styles.formControl}>
            <label>
              <b>Age(Years)</b>
            </label>
            <input type="number" ref={ageInputRef} />
          </div>
          <div>
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
    </Wrapper>
  );
};

export default UserForm;
