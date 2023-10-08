const TicketForm = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const closeForm = (e) => {
    if (e.target.id === "background") onClose();
  };
  return (
    <div
      className="  text-oc-cold-white fixed inset-0 bg-oc-space-blue bg-opacity-20 backdrop-blur-sm flex justify-center items-center "
      id="background"
      onClick={closeForm}
    >
      <div className=" xs:w-5/6 sm:w-5/6 md:w-3/5 lg:w-3/5 flex flex-col">
        <button
          className=" text-oc-hover-pink text-xl place-self-end"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className=" border-2 bg-oc-rosy-pink p-1 rounded-md">
          <div>
            <div className=" flex flex-block items-center justify-center bg-oc-rosy-pink p-4">
              <form className="w-full max-w-3xl h-3/5">
                <div className=" w-1/2 pb-2 h-1/6">
                  <label className=" block uppercase text-oc-cold-white text-xs font-bold mb-2 w-1/2">
                    Select your ticket!
                  </label>
                  <select className="block w-full bg-oc-cold-white p-3 rounded-md text-oc-space-blue">
                    <option>Monday Ticket</option>
                    <option>Tuesday Ticket</option>
                    <option>Wednesday Ticket</option>
                    <option>Thursday Ticket</option>
                    <option>Friday Ticket</option>
                    <option>Week Pass</option>
                  </select>
                </div>
                <h2 className=" text-oc-cold-white font-bold text-3xl text-center h-1/6 p-10">
                  Fill Out Your Information
                </h2>
                <div className=" flex justify-end">
                  <div className=" w-full">
                    <div className=" flex w-full justify-between">
                      <label
                        className=" uppercase text-oc-cold-white text-xs font-bold mb-2 w-1/2"
                        for="grid-first-name"
                      >
                        First Name
                      </label>
                      <label
                        className=" block uppercase text-oc-cold-white text-xs font-bold mb-2 w-1/2"
                        for="grid-first-name"
                      >
                        Last Name
                      </label>
                    </div>
                    <div className=" flex w-full justify-between pb-2">
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
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full px-3">
                    <label
                      class="block uppercase tracking-wide text-oc-cold-white text-xs font-bold mb-2"
                      for="grid-password"
                    >
                      Credit Card Number
                    </label>
                    <input
                      class="appearance-none block w-full bg-oc-cold-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-password"
                      placeholder="XXXX-XXXX-XXXX-XXXX"
                    />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-oc-cold-white text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      City
                    </label>
                    <input
                      class="appearance-none block w-full bg-oc-cold-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city"
                      type="text"
                      placeholder="Albuquerque"
                    />
                  </div>
                  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-oc-cold-white text-xs font-bold mb-2"
                      for="grid-state"
                    >
                      State
                    </label>
                    <div class="relative">
                      <select
                        class="block w-full bg-oc-cold-white border p-2 rounded-md"
                        id="grid-state"
                      >
                        <option>New Mexico</option>
                        <option>Missouri</option>
                        <option>Texas</option>
                      </select>
                    </div>
                  </div>
                  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-oc-cold-white text-xs font-bold mb-2"
                      for="grid-zip"
                    >
                      Zip
                    </label>
                    <input
                      class="appearance-none block w-full bg-oc-cold-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-zip"
                      type="text"
                      placeholder="90210"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketForm;
