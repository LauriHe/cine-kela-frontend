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
      <footer className="footerStyle text-center py-8 text-white">
        <h1 className="text-xl">Ciné Kela @ 2023</h1>

        <div className="flex flex-row justify-around flex-grow items-start">
          {/* collaboration */}
          <section className="footerSec">
            <h1 className="text-lg">In collaboration</h1>
            <div className="py-4">
              <img src="frogify2.svg" className="h-auto w-1/5 m-auto"></img>
              <h3>Frogify</h3>
            </div>
          </section>
          {/* Sites */}
          <section className="footerSec">
            <h1 className="text-lg">Sites</h1>
            <ul onClick={navigateStream}>Home</ul>
          </section>
          {/* Links */}
          <section className="footerSec">
            <h1 className="text-lg">Links</h1>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
