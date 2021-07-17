import UserItem from '../UserItem/UserItem'
import styles from './UserList.module.css'
import Card from '../Card/Card'
const UserList = (props) =>{
    return (
        <Card className={styles.users}>
        <ul>
            {props.items.map(userItem => 
                <UserItem key={Math.random()} user={userItem}/>
            )}
        </ul>
        </Card>
    )
}

export default UserList;