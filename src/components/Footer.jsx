import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
  };

  const navigateStream = () => {
    navigate('/stream');
  };

  const navigateSchedule = () => {
    navigate('/schedule');
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
    <div>
      <footer className="footerStyle text-center py-8 text-black">
        <h1 className="text-xl font-bold">Ciné Kela @ 2023</h1>

        <div className="flex flex-col lg:flex-row justify-center lg:justify-around flex-grow items-center lg:items-start">
          {/* collaboration */}
          <section className="footerSec">
            <h1 className="text-xl font-bold">In collaboration</h1>
            <div className="py-4">
              <img src="frogify2.svg" className="h-auto w-1/5 m-auto"></img>
              <h3>Frogify</h3>
            </div>
          </section>
          {/* Sites */}
          <section className="footerSec flex flex-col">
            <h1 className="text-xl font-bold">Sites</h1>
            <div className="flex flex-col py-4">
              <button className="footerLink" onClick={navigateHome}>
                Home
              </button>
              <button className="footerLink" onClick={navigateStream}>
                Stream
              </button>
              <button className="footerLink" onClick={navigateSchedule}>
                Schedule
              </button>
              <button className="footerLink" onClick={navigateArchive}>
                Archive
              </button>
              <button className="footerLink" onClick={navigateTickets}>
                Tickets
              </button>
              <button className="footerLink" onClick={navigateInfo}>
                Info
              </button>
            </div>
          </section>
          {/* Links */}
          <section className="footerSec">
            <h1 className="text-xl font-bold">Contact Us</h1>
            <ul className="py-4">
              <li>cinekela@metropolia.fi</li>
            </ul>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
