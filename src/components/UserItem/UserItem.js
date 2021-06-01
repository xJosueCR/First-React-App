import styles from './UserItem.module.css'
const UserItem = (props) => {
    return (
        <li className={styles['user-item']}>
            {props.title > 1 ? props.title + ' years old' : props.title + ' year old'}
        </li>
    )
}
export default UserItem;