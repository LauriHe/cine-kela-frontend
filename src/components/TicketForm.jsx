import { useState } from 'react';
import PropTypes from 'prop-types';

const TicketForm = ({ setShowModal, blurBackground }) => {
  const [selectedTicket, setSelectedTicket] = useState('none');
  const [ticketError, setTicketError] = useState(false);

  const handleTicketChange = (event) => {
    console.log(event.target.value);
    const existingTicket = localStorage.getItem(event.target.value);
    if (existingTicket) {
      setSelectedTicket('none');
      setTicketError(true);
    } else {
      setSelectedTicket(event.target.value);
      setTicketError(false);
    }
  };

  const closeForm = (e) => {
    if (e.target.id === 'background') {
      setShowModal(false);
    }
  };
  const formSubmit = () => {
    console.log(selectedTicket);
    localStorage.setItem(selectedTicket, 'true');
  };

  return (
    <div
      className={
        blurBackground
          ? 'text-oc-cold-white fixed inset-0 bg-oc-space-blue bg-opacity-20 backdrop-blur-sm flex justify-center items-center z-50 '
          : 'w-full flex justify-center items-center'
      }
      id="background"
      onClick={closeForm}
    >
      <div className=" w-5/6 lg:w-[830px] flex flex-col bg-oc-pastel-blue rounded-md justify-center mb-10">
        {blurBackground && <h1 className=" font-IM-Fell-English-SC font-bold text-4xl text-center p-4 ">Tickets</h1>}
        <div className=" p-1 rounded-md">
          <div className=" flex flex-block items-center justify-center p-4 w-full">
            <form className="w-full max-w-3xl">
              <div className="  pb-2 flex flex-col items-center gap-2">
                {ticketError && <label htmlFor="ticket-select">You already have this ticket!</label>}
                <select
                  className={
                    ticketError
                      ? ' w-1/2 bg-oc-cold-white p-3 rounded-md text-oc-space-blue flex justify-center text-center focus:outline-none focus:ring-2 focus:ring-red-500'
                      : ' w-1/2 bg-oc-cold-white p-3 rounded-md text-oc-space-blue flex justify-center text-center'
                  }
                  id="ticket-select"
                  value={selectedTicket}
                  onChange={handleTicketChange}
                >
                  <option value={'none'}>Choose your ticket!</option>
                  <option value={'ticket1'}>Tuesday Ticket</option>
                  <option value={'ticket2'}>Wednesday Ticket</option>
                  <option value={'ticket3'}>Thursday Ticket</option>
                  <option value={'ticket4'}>Friday Ticket</option>
                  <option value={'ticket5'}>Week Pass</option>
                </select>
              </div>
              <h2 className=" text-oc-cold-white font-IM-Fell-English-SC font-bold text-3xl text-center h-1/6 p-10">Fill Out Your Information</h2>
              <div className=" flex justify-end">
                <div className=" w-full">
                  <div className=" flex w-full justify-between">
                    <label className=" uppercase text-oc-cold-white text-xs font-bold mb-2 w-1/2" htmlFor="grid-first-name">
                      First Name
                    </label>
                    <label className=" block uppercase text-oc-cold-white text-xs font-bold mb-2 w-1/2" htmlFor="grid-first-name">
                      Last Name
                    </label>
                  </div>
                  <div className=" flex w-full justify-between mb-3">
                    <input
                      className=" w-1/2 bg-oc-cold-white text-oc-space-blue rounded-md p-2 mr-2"
                      id="grid-first-name"
                      type="text"
                      placeholder="Sammy"
                    />

                    <input
                      className=" w-1/2 bg-oc-cold-white text-oc-space-blue rounded-md p-2"
                      id="grid-first-name"
                      type="text"
                      placeholder="Makko"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-oc-cold-white text-xs font-bold mb-2">Credit Card Number</label>
                  <input className=" block w-full bg-oc-cold-white p-2 rounded-md" placeholder="XXXX-XXXX-XXXX-XXXX" />
                </div>
              </div>
              <div className=" flex w-full justify-between">
                <label className=" uppercase text-oc-cold-white text-xs font-bold mb-2 w-1/2" htmlFor="grid-first-name">
                  E-mail
                </label>
                <label className=" block uppercase text-oc-cold-white text-xs font-bold mb-2 w-1/2" htmlFor="grid-first-name">
                  Phone Number
                </label>
              </div>
              <div className=" flex w-full justify-between mb-3">
                <input
                  className=" w-1/2 bg-oc-cold-white text-oc-space-blue rounded-md p-2 mr-2"
                  id="grid-first-name"
                  type="text"
                  placeholder="ex@example.com"
                />

                <input
                  className=" w-1/2 bg-oc-cold-white text-oc-space-blue rounded-md p-2"
                  id="grid-first-name"
                  type="text"
                  placeholder="+358 12345678"
                />
              </div>
              <button
                className=" text-lg font-semibold text-oc-space-blue bg-oc-desert-yellow hover:bg-oc-hover-pink rounded-md p-2 my-4 w-full"
                onClick={formSubmit}
              >
                Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

TicketForm.propTypes = {
  setShowModal: PropTypes.func,
  blurBackground: PropTypes.bool,
};

export default TicketForm;
