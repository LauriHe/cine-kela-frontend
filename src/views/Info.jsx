function Info() {
  return (
    <>
      <div className="bg-oc-space-blue text-white">
        <body className="w-10/12 m-auto">
          <section className="bg-oc-pastel-blue flex flex-col items-center py-8 my-8">
            <h1 className="text-3xl mb-4">Contact us</h1>
            <form className="w-full max-w-lg">
              {/* First Row */}
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    First Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Jane"
                  ></input>
                </div>

                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                  >
                    Last Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Doe"
                  ></input>
                </div>
              </div>
              {/* row1.5 */}
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    E-mail
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="ex@example.com"
                  ></input>
                </div>

                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                  >
                    Phone number
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="+358 12345678"
                  ></input>
                </div>
              </div>
              {/* second row */}
              <div className="mb-4">
                <h2 className="block tracking-wide text-white text-xl mb-2">
                  Are you
                </h2>
                <input type="radio" id="private" name="person"></input>
                <label
                  htmlFor="private"
                  className="tracking-wide text-white mb-2 mr-8"
                >
                  Private
                </label>
                <input type="radio" id="company" name="person"></input>
                <label
                  htmlFor="company"
                  className="tracking-wide text-white mb-2"
                >
                  Business
                </label>
              </div>
              {/* third row */}
              <div>
                <h2 className="block tracking-wide text-white text-xl mb-2">
                  Summary of your inquiry
                </h2>
                <div className="textareacontainer">
                  <textarea className="appearance-none block w-full bg-gray-200 text-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></textarea>
                </div>
              </div>
              <input
                type="submit"
                value="Submit"
                className="bg-oc-desert-yellow rounded p-2 text-black hover:bg-oc-test"
              ></input>
            </form>
          </section>
        </body>
      </div>
    </>
  );
}

export default Info;
