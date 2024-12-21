import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <header>
        <NavLink to="/users" className={({ isActive }) => (isActive ? 'link_active' : '')}>
          Пользователи
        </NavLink>
        <NavLink to="/allAlbums" className={({ isActive }) => (isActive ? 'link_active' : '')}>
          Альбомы
        </NavLink>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>BSU:2024</footer>
    </div>
  );
}
