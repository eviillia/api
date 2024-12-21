import { useLoaderData } from 'react-router-dom';

export default function AlbumPhotos() {
  const photos = useLoaderData();

  return (
    <div>
      <h2>Фотографии альбома</h2>
      <div className="album-photos">
        {photos.map(photo => (
          <img key={photo.id} src={photo.url} alt={photo.title} />
        ))}
      </div>
    </div>
  );
}
