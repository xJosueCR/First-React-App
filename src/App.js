import { Fragment, useState } from "react";
import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";
import "./App.css";

const userItems = [];
function App() {
  const [items, setItems] = useState(userItems)

  const onNewItemHandler = (item) => {
    setItems((prevItems) => {
      return [...prevItems, item]
    })
  };
  return (
    <Fragment>
      <UserForm onNewItem={onNewItemHandler}/>
      <UserList className="list" items={items} />
    </Fragment>
  );
}

export default App;
