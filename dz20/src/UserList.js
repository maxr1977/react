import { useSelector } from 'react-redux'

const UserList = () => {
  const users = useSelector((state) => state.users.users)

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
