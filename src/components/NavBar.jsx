import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [burger, setBurger] = useState(false);

  const toggleBurger = () => {
    setBurger(!burger);
    const body = document.querySelector("body");
    if (burger) {
      body.style.overflow = "visible";
    } else {
      body.style.overflow = "hidden";
    }
  };

  const navigate = useNavigate();

  const navigateHome = () => {
    if (burger) {
      toggleBurger();
    }
    navigate("/");
  };

  const navigateStream = () => {
    if (burger) {
      toggleBurger();
    }
    navigate("/stream");
  };

  const navigateSchedule = () => {
    if (burger) {
      toggleBurger();
    }
    navigate("/schedule");
  };

  const navigateArchive = () => {
    if (burger) {
      toggleBurger();
    }
    navigate("/archive");
  };

  const navigateTickets = () => {
    if (burger) {
      toggleBurger();
    }
    navigate("/tickets");
  };

  const navigateInfo = () => {
    if (burger) {
      toggleBurger();
    }
    navigate("/info");
  };

  return (
    <div className="w-full h-full bg-oc-pastel-blue flex justify-between">
      <div
        id="logo"
        className="h-full flex justify-center items-center gap-2 p-2 cursor-pointer"
        onClick={navigateHome}
      >
        <img src="./logo.png" className="h-16"></img>
        <div className="w-fit text-[2rem] font-bold text-white font-IM-Fell-English-SC">
          Ciné Kela
        </div>
      </div>

      <div className="flex items-center">
        <div className="hidden h-full md:flex items-center gap-10 pr-4 text-white">
          <button className="h-fit navBarBtn" onClick={navigateHome}>
            Home
          </button>
          <button className="h-fit navBarBtn" onClick={navigateStream}>
            Stream
          </button>
          <button className="h-fit navBarBtn" onClick={navigateSchedule}>
            Schedule
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
        <button className="burger" onClick={toggleBurger}></button>
      </div>

      {burger && (
        <div className="flex flex-col bg-oc-space-blue/[.95] h-screen w-screen absolute z-[100] py-8">
          <button className="burgerClose" onClick={toggleBurger}></button>
          <button className="h-fit burBarBtn" onClick={navigateHome}>
            Home
          </button>
          <button className="h-fit burBarBtn" onClick={navigateStream}>
            Stream
          </button>
          <button className="h-fit burBarBtn" onClick={navigateSchedule}>
            Schedule
          </button>
          <button className="h-fit burBarBtn" onClick={navigateArchive}>
            Archive
          </button>
          <button className="h-fit burBarBtn" onClick={navigateTickets}>
            Tickets
          </button>
          <button className="h-fit burBarBtn" onClick={navigateInfo}>
            Info
          </button>
        </div>
      )}
    </div>
  );
}

export default NavBar;
