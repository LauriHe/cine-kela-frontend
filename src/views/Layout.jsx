import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <nav className="h-20"></nav>
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
