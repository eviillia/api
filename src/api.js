export const fetchUserNames = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error('Не удалось получить список пользователей');
    const users = await response.json();
    return users.map(user => ({ id: user.id, name: user.name }));
};

export const fetchUserInfo = async (userId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) return null;
    const user = await response.json();
    return {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        website: user.website
    };
};

export const fetchUserAlbums = async (userId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
    if (!response.ok) throw new Error('Не удалось получить альбомы пользователя');
    const albums = await response.json();
    return albums.map(album => ({ id: album.id, title: album.title }));
};

export const fetchAllAlbums = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    if (!response.ok) throw new Error('Не удалось получить список альбомов');
    const albums = await response.json();
    return albums.map(album => ({ title: album.title, id: album.id }));
};

export const fetchPhotosOnAlbum = async (albumId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
    if (!response.ok) return [];
    const photos = await response.json();
    return photos.map(photo => ({
        id: photo.id,
        url: photo.url,
        thumbnailUrl: photo.thumbnailUrl
    }));
};

