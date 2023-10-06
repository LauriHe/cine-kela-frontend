import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };
  const navigateStream = () => {
    navigate("/Stream");
  };

  const navigateCalendar = () => {
    navigate("/Calendar");
  };

  const navigateArchive = () => {
    navigate("/Archive");
  };

  const navigateTickets = () => {
    navigate("/Tickets");
  };

  const navigateInfo = () => {
    navigate("/Info");
  };

  return (
    <div className="w-full h-full bg-oc-pastel-blue flex justify-between">
      <div id="logo" className="h-full flex justify-center p-2 cursor-pointer">
        <img src="./capLamme.png" className="h-16"></img>
        <div className="w-fit -rotate-90 text-[.7rem] font-bold text-white">
          Cinéma Kéla
        </div>
      </div>
      <div className="hidden h-full md:flex items-center gap-10 pr-4 text-white">
        <button className="h-fit navBarBtn" onClick={navigateHome}>
          Home
        </button>
        <button className="h-fit navBarBtn" onClick={navigateStream}>
          Stream
        </button>
        <button className="h-fit navBarBtn" onClick={navigateCalendar}>
          Calendar
        </button>

        <button className="h-fit navBarBtn" onClick={navigateArchive}>
          Archive
        </button>
        <button className="h-fit navBarBtn" onClick={navigateTickets}>
          Tickets
        </button>
        <button className="h-fit navBarBtn" onClick={navigateInfo}>
          Info
        </button>
      </div>
    </div>
  );
}

export default NavBar;
