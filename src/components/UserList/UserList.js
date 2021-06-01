import UserItem from '../UserItem/UserItem'
import styles from './UserList.module.css'
const UserList = (props) =>{
    return (
        <ul className={styles['user-list']}>
            {props.items.map(userItem => 
                <UserItem key={Math.random()} title={userItem.title}/>
            )}
        </ul>
    )
}

export default UserList;