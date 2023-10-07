import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";

function Layout() {
  return (
    <div className="flex flex-col h-[100vh]">
      <nav className="h-20 flex-shrink-0">
        <NavBar></NavBar>
      </nav>
      <main className="bg-oc-space-blue">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
