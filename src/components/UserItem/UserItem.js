import styles from './UserItem.module.css'
const UserItem = (props) => {
    return (
        <li >
          {props.user.username}  {props.user.title > 1 ? props.user.title + ' years old' : props.user.title + ' year old'}
        </li>
    )
}
export default UserItem;