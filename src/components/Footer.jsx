import { useNavigate } from "react-router-dom";

function Footer() {
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
    <div>
      <footer className="footerStyle text-center py-8 text-black">
        <h1 className="text-xl">Ciné Kela @ 2023</h1>

        <div className="flex flex-row justify-around flex-grow items-start">
          {/* collaboration */}
          <section className="footerSec">
            <h1 className="text-xl">In collaboration</h1>
            <div className="py-4">
              <img src="frogify2.svg" className="h-auto w-1/5 m-auto"></img>
              <h3>Frogify</h3>
            </div>
          </section>
          {/* Sites */}
          <section className="footerSec flex flex-col">
            <h1 className="text-xl">Sites</h1>
            <div className="flex flex-col py-4">
              <btn className="footerLink" onClick={navigateHome}>
                Home
              </btn>
              <btn className="footerLink" onClick={navigateStream}>
                Stream
              </btn>
              <btn className="footerLink" onClick={navigateCalendar}>
                Calendar
              </btn>
              <btn className="footerLink" onClick={navigateArchive}>
                Archive
              </btn>
              <btn className="footerLink" onClick={navigateTickets}>
                Tickets
              </btn>
              <btn className="footerLink" onClick={navigateInfo}>
                Info
              </btn>
            </div>
          </section>
          {/* Links */}
          <section className="footerSec">
            <h1 className="text-xl">Contact Us</h1>
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
