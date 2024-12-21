import React from 'react';
import "./App.css";
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Layout from './Layout';
import Users from './Users';
import User from './User';
import Albums from './Albums';
import AlbumPhotos from './AlbumPhotos';
import NotFound from './NotFound';
import { fetchUserNames, fetchUserInfo, fetchAllAlbums, fetchPhotosOnAlbum } from './api';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Navigate to="/users" replace />
      },
      {
        path: 'users',
        element: <Users />,
        loader: fetchUserNames
      },
      {
        path: 'userInfo/:userId',
        element: <User />,
        loader: async ({ params }) => {
          const user = await fetchUserInfo(params.userId);
          if (!user) throw new Response('', { status: 404 });
          return user;
        },
        errorElement: <NotFound />
      },
      {
        path: 'allAlbums',
        element: <Albums />,
        loader: fetchAllAlbums
      },
      {
        path: 'albumPhotos/:albumId',
        element: <AlbumPhotos />,
        loader: async ({ params }) => {
          const photos = await fetchPhotosOnAlbum(params.albumId);
          if (!photos.length) throw new Response('', { status: 404 });
          return photos;
        },
        errorElement: <NotFound />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
