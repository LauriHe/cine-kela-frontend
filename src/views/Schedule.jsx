import { Fragment, useState } from "react";
import TicketForm from "../components/TicketForm";
import movies from "../data/movies.json";

function Schedule() {
  const [showModal, setShowModal] = useState(false);

  function playVid() {
    let vid1 = document.getElementById("vid1");
    vid1.play();
  }
  function stopVid() {
    let vid1 = document.getElementById("vid1");
    vid1.pause();
  }

  function playVid2() {
    let vid2 = document.getElementById("vid2");
    vid2.play();
  }
  function stopVid2() {
    let vid2 = document.getElementById("vid2");
    vid2.pause();
  }
  function playVid3() {
    let vid3 = document.getElementById("vid3");
    vid3.play();
  }
  function stopVid3() {
    let vid3 = document.getElementById("vid3");
    vid3.pause();
  }
  function playVid4() {
    let vid4 = document.getElementById("vid4");
    vid4.play();
  }
  function stopVid4() {
    let vid4 = document.getElementById("vid4");
    vid4.pause();
  }
  function playVid5() {
    let vid5 = document.getElementById("vid5");
    vid5.play();
  }
  function stopVid5() {
    let vid5 = document.getElementById("vid5");
    vid5.pause();
  }

  return (
    <Fragment>
      <div>
        <div className=" flex flex-col xl:h-screen bg-oc-space-blue items-center">
          <div className=" flex flex-col h-1/6 justify-center xs:my-4 sm:my-4">
            <h1 className=" text-oc-cold-white font-bold text-5xl flex justify-center text-center font-IM-Fell-English-SC">
              Ciné Kela
            </h1>
            <h1 className=" text-oc-cold-white font-bold text-3xl text-center">
              11.10.2023 - {movies[5].premiereDate}
            </h1>
          </div>
          <div className="flex flex-col xl:flex-row w-full h-full lg:h-4/6 md:w-[750px] xl:w-5/6 bg-oc-space-blue rounded-md gap-4 xl:gap-0 py-4">
            <div className=" card flex flex-col flex-1 grow shrink hover:grow-[10] h-full items-center rounded-md lg:px-2 md:px-2 bg-oc-space-blue">
              <h1 className=" day text-3xl font-semibold font-IM-Fell-English-SC bg-oc-pastel-blue text-oc-cold-white w-full rounded-t-md text-center py-2 px-4">
                Wednesday
              </h1>
              <div className=" flex flex-col justify-center h-full items-center w-full bg-oc-cold-white rounded-b-md hover:rounded-md cardImg">
                <video
                  src="/placeholder.mp4"
                  className=" rounded-t-md"
                  muted
                  loop
                ></video>
                <div className=" w-full flex flex-col">
                  <h2 className=" text-oc-cold-white text-xl  font-semibold py-2 bg-oc-pastel-blue w-full text-center">
                    Stream
                  </h2>
                  <h2 className=" text-oc-cold-white font-semibold py-2 bg-oc-pastel-blue w-full text-center">
                    To be announced
                  </h2>
                </div>
                <h3 className=" w-full bg-oc-hover-pink font-semibold pl-4">
                  Drama
                </h3>
                <p className=" text-lg font-medium text-oc-space-blue p-4 bg-oc-cold-white h-full w-full rounded-b-md">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Labore necessitatibus tenetur nam, placeat magnam est, nulla
                  quaerat at, recusandae esse aspernatur unde itaque quas alias
                  omnis sit laudantium neque? Eum?
                </p>
              </div>
            </div>
            <div
              className=" card flex flex-col flex-1 shrink hover:grow-[10] rounded-md items-center lg:px-2 md:px-2 bg-oc-space-blue "
              onMouseEnter={playVid}
              onMouseLeave={stopVid}
            >
              <h1 className=" day text-3xl font-semibold font-IM-Fell-English-SC bg-oc-pastel-blue text-oc-cold-white w-full rounded-t-md text-center py-2 px-4">
                Thursday
              </h1>
              <div className=" flex flex-col justify-center h-full items-center w-full bg-oc-cold-white rounded-b-md hover:rounded-md cardImg2">
                <video
                  id="vid1"
                  src="./movies/Democompo_trailer.mp4"
                  muted
                  loop
                  className=" rounded-t-md"
                ></video>
                <div className=" w-full flex flex-col">
                  <h2 className=" text-oc-cold-white text-xl  font-semibold py-2 bg-oc-pastel-blue w-full text-center">
                    Democompo
                  </h2>
                  <h2 className=" text-oc-cold-white font-semibold py-2 bg-oc-pastel-blue w-full text-center">
                    {movies[1].premiereTime.substring(0, 5)} -{" "}
                    {movies[1].expireTime.substring(0, 5)}
                  </h2>
                </div>
                <h3 className=" w-full bg-oc-hover-pink font-semibold pl-4">
                  3D, CGI, Horror
                </h3>
                <p className=" text-lg font-medium text-oc-space-blue p-4 bg-oc-cold-white h-full w-full ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Labore necessitatibus tenetur nam, placeat magnam est, nulla
                  quaerat at, recusandae esse aspernatur unde itaque quas alias
                  omnis sit laudantium neque? Eum?
                </p>
                <div className=" buttonDiv bg-oc-cold-white w-full flex justify-center items-center rounded-b-md pb-4">
                  <button
                    className=" text-lg font-semibold text-oc-space-blue hover:text-oc-cold-white bg-oc-rosy-pink hover:bg-oc-hover-pink rounded-md p-2 flex justify-center"
                    onClick={() => setShowModal(true)}
                  >
                    Buy Ticket
                  </button>
                </div>
              </div>
            </div>
            <div
              className=" card flex flex-col flex-1 grow shrink  hover:grow-[10] h-full items-center rounded lg:px-2 md:px-2 bg-oc-space-blue"
              onMouseEnter={playVid2}
              onMouseLeave={stopVid2}
            >
              <h1 className=" day text-3xl font-semibold font-IM-Fell-English-SC bg-oc-pastel-blue text-oc-cold-white w-full rounded-t-md text-center py-2 px-4">
                Friday
              </h1>
              <div className=" flex flex-col justify-center h-full items-center w-full bg-oc-cold-white rounded-b-md cardImg3">
                <video
                  id="vid2"
                  src="./movies/Mikko_EVTEKtoAlaska_trailer.mp4"
                  loop
                  muted
                  className=" rounded-t-md"
                ></video>
                <div className=" w-full flex flex-col">
                  <h2 className=" text-oc-cold-white text-xl font-semibold py-2 bg-oc-pastel-blue w-full text-center">
                    Evtek to Alaska
                  </h2>
                  <h2 className=" text-oc-cold-white font-semibold py-2 bg-oc-pastel-blue w-full text-center">
                    {movies[2].premiereTime.substring(0, 5)} -{" "}
                    {movies[2].expireTime.substring(0, 5)}
                  </h2>
                </div>
                <h3 className=" w-full bg-oc-hover-pink font-semibold pl-4">
                  Relaxing, Adventure
                </h3>
                <p className=" text-lg font-medium text-oc-space-blue p-4 bg-oc-cold-white h-full w-full ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Labore necessitatibus tenetur nam, placeat magnam est, nulla
                  quaerat at, recusandae esse aspernatur unde itaque quas alias
                  omnis sit laudantium neque? Eum?
                </p>
                <div className=" buttonDiv bg-oc-cold-white w-full flex justify-center items-center rounded-b-md pb-4">
                  <button
                    className=" text-lg font-semibold text-oc-space-blue hover:text-oc-cold-white bg-oc-rosy-pink hover:bg-oc-hover-pink  rounded-md p-2 flex justify-center"
                    onClick={() => setShowModal(true)}
                  >
                    Buy Ticket
                  </button>
                </div>
              </div>
            </div>
            <div
              className=" card flex flex-col flex-1 grow shrink hover:grow-[10] h-full items-center rounded-md lg:px-2 md:px-2 bg-oc-space-blue"
              onMouseEnter={playVid3}
              onMouseLeave={stopVid3}
            >
              <h1 className=" day text-3xl font-semibold font-IM-Fell-English-SC bg-oc-pastel-blue text-oc-cold-white w-full rounded-t-md text-center py-2 px-4">
                Saturday
              </h1>
              <div className=" flex flex-col justify-center h-full items-center w-full bg-oc-cold-white rounded-b-md hover:rounded-md cardImg4">
                <video
                  id="vid3"
                  src="./movies/Morning_after_trailer.mp4"
                  loop
                  muted
                  className=" rounded-t-md"
                ></video>
                <div className=" w-full flex flex-col">
                  <h2 className=" text-oc-cold-white text-xl font-semibold py-2 bg-oc-pastel-blue w-full text-center">
                    Morning After
                  </h2>
                  <h2 className=" text-oc-cold-white font-semibold py-2 bg-oc-pastel-blue w-full text-center">
                    {movies[3].premiereTime.substring(0, 5)} -{" "}
                    {movies[3].expireTime.substring(0, 5)}
                  </h2>
                </div>
                <h3 className=" w-full bg-oc-hover-pink font-semibold pl-4">
                  Scifi, Horror, Comedy
                </h3>
                <p className=" text-lg font-medium text-oc-space-blue p-4 bg-oc-cold-white h-full w-full ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Labore necessitatibus tenetur nam, placeat magnam est, nulla
                  quaerat at, recusandae esse aspernatur unde itaque quas alias
                  omnis sit laudantium neque? Eum?
                </p>
                <div className=" buttonDiv bg-oc-cold-white w-full flex justify-center items-center rounded-b-md pb-4">
                  <button
                    className=" text-lg font-semibold text-oc-space-blue hover:text-oc-cold-white bg-oc-rosy-pink hover:bg-oc-hover-pink  rounded-md p-2 flex justify-center"
                    onClick={() => setShowModal(true)}
                  >
                    Buy Ticket
                  </button>
                </div>
              </div>
            </div>
            <div
              className=" card flex flex-col flex-1 grow shrink  hover:grow-[10] h-full items-center rounded-md lg:px-2 md:px-2 bg-oc-space-blue"
              onMouseEnter={playVid4}
              onMouseLeave={stopVid4}
            >
              <h1 className=" day text-3xl font-semibold font-IM-Fell-English-SC bg-oc-pastel-blue text-oc-cold-white w-full rounded-t-md text-center py-2 px-4">
                Sunday
              </h1>
              <div className=" flex flex-col g justify-center h-full items-center w-full bg-oc-cold-white rounded-b-md hover:rounded-md cardImg5">
                <video
                  id="vid4"
                  src="./movies/Museo_olohuoneena_trailer.mp4"
                  loop
                  muted
                  className=" rounded-t-md"
                ></video>
                <div className=" w-full flex flex-col">
                  <h2 className=" text-oc-cold-white text-xl  font-semibold py-2 bg-oc-pastel-blue w-full text-center px-2">
                    Museo Olohuoneena
                  </h2>
                  <h2 className=" text-oc-cold-white font-semibold py-2 bg-oc-pastel-blue w-full text-center">
                    {movies[4].premiereTime.substring(0, 5)} -{" "}
                    {movies[4].expireTime.substring(0, 5)}
                  </h2>
                </div>
                <h3 className=" w-full bg-oc-hover-pink font-semibold pl-4">
                  Documentary
                </h3>
                <p className=" text-lg font-medium text-oc-space-blue p-4 bg-oc-cold-white h-full w-full">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Labore necessitatibus tenetur nam, placeat magnam est, nulla
                  quaerat at, recusandae esse aspernatur unde itaque quas alias
                  omnis sit laudantium neque? Eum?
                </p>
                <div className=" buttonDiv bg-oc-cold-white w-full flex justify-center items-center rounded-b-md pb-4">
                  <button
                    className=" text-lg font-semibold text-oc-space-blue hover:text-oc-cold-white bg-oc-rosy-pink hover:bg-oc-hover-pink  rounded-md p-2 flex justify-center"
                    onClick={() => setShowModal(true)}
                  >
                    Buy Ticket
                  </button>
                </div>
              </div>
            </div>
            <div
              className=" card flex flex-col flex-1 grow shrink  hover:grow-[10] h-full items-center rounded-md lg:px-2 md:px-2 bg-oc-space-blue"
              onMouseEnter={playVid5}
              onMouseLeave={stopVid5}
            >
              <h1 className=" day text-3xl font-semibold font-IM-Fell-English-SC bg-oc-pastel-blue text-oc-cold-white w-full rounded-t-md text-center py-2 px-4">
                Monday
              </h1>
              <div className=" flex flex-col justify-center h-full items-center w-full bg-oc-cold-white rounded-b-md hover:rounded-md cardImg6">
                <video
                  id="vid5"
                  src="./movies/Opiskelijaelämää_2009_trailer.mp4"
                  loop
                  muted
                  className=" rounded-t-md"
                ></video>
                <div className=" w-full flex flex-col">
                  <h2 className=" text-oc-cold-white text-xl font-semibold py-2 bg-oc-pastel-blue w-full text-center px-2">
                    Opiskelijaelamaa 2009
                  </h2>
                  <h2 className=" text-oc-cold-white font-semibold py-2 bg-oc-pastel-blue w-full text-center">
                    {movies[5].premiereTime.substring(0, 5)} -{" "}
                    {movies[5].expireTime.substring(0, 5)}
                  </h2>
                </div>
                <h3 className=" w-full bg-oc-hover-pink font-semibold pl-4">
                  Horror
                </h3>
                <p className=" text-lg font-medium text-oc-space-blue p-4 bg-oc-cold-white h-full w-full">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Labore necessitatibus tenetur nam, placeat magnam est, nulla
                  quaerat at, recusandae esse aspernatur unde itaque quas alias
                  omnis sit laudantium neque? Eum?
                </p>
                <div className=" buttonDiv bg-oc-cold-white w-full flex justify-center items-center rounded-b-md pb-4">
                  <button
                    className=" text-lg font-semibold text-oc-space-blue hover:text-oc-cold-white bg-oc-rosy-pink hover:bg-oc-hover-pink  rounded-md p-2 flex justify-center"
                    onClick={() => setShowModal(true)}
                  >
                    Buy Ticket
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <TicketForm setShowModal={setShowModal} blurBackground={true} />
      )}
    </Fragment>
  );
}

export default Schedule;
