import TicketForm from '../components/TicketForm';

function Tickets() {
  return (
    <div className=" h-full">
      <div className="  text-oc-cold-white flex flex-col items-center h-full w-full">
        <h1 className=" font-IM-Fell-English-SC text-oc-cold-white font-bold text-5xl h-1/5 flex justify-center items-center p-10">
          Get Your Tickets Now
        </h1>
        <TicketForm blurBackground={false} />
      </div>
    </div>
  );
}

export default Tickets;
