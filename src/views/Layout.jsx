import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Layout() {
  const location = useLocation();
  return (
    <div className="flex flex-col h-[100vh]">
      <nav className="h-20 flex-shrink-0">
        <NavBar></NavBar>
      </nav>
      <main
        className={
          location.pathname === "/stream"
            ? "bg-oc-space-blue"
            : "bg-oc-space-blue h-fit"
        }
      >
        <Outlet />
      </main>
      {location.pathname !== "/stream" && (
        <footer className="flex-shrink-0">
          <Footer></Footer>
        </footer>
      )}
    </div>
  );
}

export default Layout;
