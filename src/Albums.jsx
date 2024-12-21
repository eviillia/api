import { Link, useLoaderData } from 'react-router-dom';

export default function Albums() {
  const albums = useLoaderData();

  return (
    <div>
      <h2>Список всех альбомов</h2>
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
