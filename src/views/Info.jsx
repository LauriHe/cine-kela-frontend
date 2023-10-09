import { useState } from "react";

function Info() {
  const [info1, setInfo1] = useState(false);
  const [info2, setInfo2] = useState(false);
  const [info3, setInfo3] = useState(false);
  const [form, setForm] = useState(false);

  const toggleInfo1 = () => {
    setInfo1(!info1);
  };

  const toggleInfo2 = () => {
    setInfo2(!info2);
  };

  const toggleInfo3 = () => {
    setInfo3(!info3);
  };

  const sendForm = (event) => {
    event.preventDefault();
    setForm(!form);
    const body = document.querySelector("body");
    if (form) {
      body.style.overflow = "visible";
    } else {
      body.style.overflow = "hidden";
    }
  };

  const closeForm = (event) => {
    sendForm;
    window.location.reload();
  };

  return (
    <>
      <div className="bg-oc-space-blue text-white">
        <body className="w-full lg:w-10/12 m-auto">
          <section className="bg-oc-pastel-blue flex flex-col items-center py-8 my-8 roundedn-none lg:rounded-md">
            <h1 className="text-3xl py-4">FAQ'S</h1>
            {/* Div for q's */}
            <div className="px-8 w-11/12">
              {/* Question 1 */}
              <div className="relative">
                <div
                  className={
                    info1
                      ? "flex hover:text-oc-rosy-pink liisa"
                      : "flex hover:text-oc-rosy-pink pekka"
                  }
                  onClick={toggleInfo1}
                >
                  <h1 className="text-xl font-bold py-4">Question 1</h1>
                  <button
                    className={
                      info1 ? "infoPlus bg-[url(./minus.svg)]" : "infoPlus"
                    }
                  ></button>
                </div>

                {info1 && (
                  <p className="text-base">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laborum, quam eaque quidem totam molestiae, odio eum qui
                    sunt culpa laudantium provident dolorem? Modi quos maxime id
                    veniam aut iste beatae.
                  </p>
                )}
              </div>
              <hr className="my-8"></hr>
              <div className="relative">
                <div
                  className={
                    info2
                      ? "flex hover:text-oc-rosy-pink liisa"
                      : "flex hover:text-oc-rosy-pink pekka"
                  }
                  onClick={toggleInfo2}
                >
                  <h1 className="text-xl font-bold py-4">Question 2</h1>
                  <button
                    className={
                      info2 ? "infoPlus bg-[url(./minus.svg)]" : "infoPlus"
                    }
                  ></button>
                </div>

                {info2 && (
                  <p className="text-base">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laborum, quam eaque quidem totam molestiae, odio eum qui
                    sunt culpa laudantium provident dolorem? Modi quos maxime id
                    veniam aut iste beatae.
                  </p>
                )}
              </div>
              <hr className="my-8"></hr>
              <div className="relative">
                <div
                  className={
                    info3
                      ? "flex hover:text-oc-rosy-pink liisa"
                      : "flex hover:text-oc-rosy-pink pekka"
                  }
                  onClick={toggleInfo3}
                >
                  <h1 className="text-xl font-bold py-4">Question 3</h1>
                  <button
                    className={
                      info3 ? "infoPlus bg-[url(./minus.svg)]" : "infoPlus"
                    }
                  ></button>
                </div>

                {info3 && (
                  <p className="text-base">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laborum, quam eaque quidem totam molestiae, odio eum qui
                    sunt culpa laudantium provident dolorem? Modi quos maxime id
                    veniam aut iste beatae.
                  </p>
                )}
              </div>
              <hr className="my-8"></hr>
              <p>
                Couldn't find what you were looking for? Contact us through the
                form at the bottom of the page.
              </p>
            </div>
          </section>
          <section className="bg-oc-pastel-blue flex flex-col items-center py-8 my-8 roundedn-none lg:rounded-md">
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
                    className="shadow-lg appearance-none block w-full bg-gray-200 text-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
                    className="shadow-lg appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                    className="shadow-lg appearance-none block w-full bg-gray-200 text-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
                    className="shadow-lg appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                <div className="textareacontainer shadow-lg">
                  <textarea className="appearance-none block w-full bg-gray-200 text-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></textarea>
                </div>
              </div>
              <div className="flex justify-center mt-2">
                <input
                  type="submit"
                  value="Submit"
                  onClick={sendForm}
                  className="bg-oc-desert-yellow rounded p-2 text-black hover:bg-oc-test "
                ></input>
              </div>
            </form>
          </section>
          {form && (
            <div className=" bg-oc-space-blue/[.95] fixed h-screen w-screen top-0 left-0 z-[100] py-8">
              <div className="flex flex-col bg-oc-cold-white text-black text-center rounded-md p-8 w-4/12 m-auto">
                <p>Thank you for contacting us.</p>
                <p>We will get back to you soon.</p>
                <button onClick={closeForm} className="newsbtn">
                  Close
                </button>
              </div>
            </div>
          )}
        </body>
      </div>
    </>
  );
}

export default Info;
