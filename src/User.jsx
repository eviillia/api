import { useLoaderData, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchUserAlbums } from './api';

export default function User() {
  const user = useLoaderData();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchUserAlbums(user.id).then(setAlbums);
  }, [user.id]);

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <h3>Альбомы пользователя:</h3>
      <ul>
        {albums.map(album => (
          <li key={album.id}>
            <Link to={`/albumPhotos/${album.id}`}>{album.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
