import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate('/');
  };

  const navigateStream = () => {
    navigate('/stream');
  };

  const navigateCalendar = () => {
    navigate('/calendar');
  };

  const navigateArchive = () => {
    navigate('/archive');
  };

  const navigateTickets = () => {
    navigate('/tickets');
  };

  const navigateInfo = () => {
    navigate('/info');
  };

  return (
    <div className="w-full h-full bg-oc-pastel-blue flex justify-between">
      <div id="logo" className="h-full flex justify-center items-center gap-2 p-2 cursor-pointer">
        <img src="./logo.png" className="h-16"></img>
        <div className="w-fit text-[1.8rem] font-bold text-white">Ciné Kela</div>
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
