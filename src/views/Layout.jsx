import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Layout() {
  return (
    <div className="flex flex-col h-[100vh]">
      <nav className="h-20 flex-shrink-0">
        <NavBar></NavBar>
      </nav>
      <main className="bg-oc-space-blue h-fit">
        <Outlet />
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default Layout;
