import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="flex flex-col h-[100vh]">
      <nav className="h-20 flex-shrink-0"></nav>
      <main className="">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
