import { Link, useLoaderData } from 'react-router-dom';

export default function Users() {
  const users = useLoaderData();
  
  return (
    <div>
      <h2>Список пользователей</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/userInfo/${user.id}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
