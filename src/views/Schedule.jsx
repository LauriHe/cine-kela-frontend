function Schedule() {
  return (
    <div>
      <div className=" flex flex-col h-screen bg-oc-space-blue items-center">
        <div className=" flex flex-col h-1/6 justify-center xs:my-4 sm:my-4">
          <h1 className=" text-oc-cold-white font-bold text-5xl flex text-center">
            Cinéma Kéla
          </h1>
          <h1 className=" text-oc-cold-white font-bold text-3xl text-center">
            10.15 - 10.19
          </h1>
        </div>
        <div className="flex xs:flex-col sm:flex-col lg:flex-row xs:w-screen sm:w-screen xs:h-screen sm:h-screen lg:h-4/6 lg:w-5/6 bg-oc-space-blue rounded-md">
          <div className=" card flex flex-col flex-1 grow shrink xs:hover:grow-[10] sm:hover:grow-[20] lg:hover:grow-[10] lg:h-full rounded-md items-center lg:px-2 md:px-2 xs:py-2 sm:py-2 bg-oc-space-blue">
            <h1 className=" day text-3xl font-semibold bg-oc-pastel-blue text-oc-cold-white w-full rounded-t-md text-center py-2">
              Monday
            </h1>
            <div className=" flex flex-col justify-center h-full items-center w-full bg-oc-cold-white rounded-b-md hover:rounded-md">
              <video src="./public/fuji.mp4" className=" "></video>
              <div className=" w-full flex flex-col">
                <h2 className=" text-oc-cold-white text-xl  font-semibold py-2 bg-oc-pastel-blue w-full text-center">
                  Jennifer's Body
                </h2>
                <h2 className=" text-oc-cold-white font-semibold py-2 bg-oc-pastel-blue w-full text-center">
                  Starting at 12:30 - 15:30
                </h2>
              </div>
              <h3 className=" w-full bg-oc-hover-pink font-semibold pl-4">
                Horror, Comedy
              </h3>
              <p className=" text-lg font-medium text-oc-space-blue p-4 bg-oc-desert-yellow h-full w-full rounded-b-md">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
                necessitatibus tenetur nam, placeat magnam est, nulla quaerat
                at, recusandae esse aspernatur unde itaque quas alias omnis sit
                laudantium neque? Eum?
              </p>
            </div>
          </div>
          <div className=" card flex flex-col flex-1 grow shrink  hover:grow-[10] h-full items-center rounded lg:px-2 md:px-2 bg-oc-space-blue xs:py-2 sm:py-2">
            <h1 className=" day text-3xl font-semibold bg-oc-pastel-blue text-oc-cold-white w-full rounded-t-md text-center py-2">
              Tuesday
            </h1>
            <div className=" flex flex-col justify-center h-full items-center w-full bg-oc-cold-white rounded-b-md">
              <video src="./public/fuji.mp4" className=" "></video>
              <div className=" w-full flex flex-col">
                <h2 className=" text-oc-cold-white text-xl font-semibold py-2 bg-oc-pastel-blue w-full text-center">
                  Ginger Snaps
                </h2>
                <h2 className=" text-oc-cold-white font-semibold py-2 bg-oc-pastel-blue w-full text-center">
                  Starting at 12:30 - 15:30
                </h2>
              </div>
              <h3 className=" w-full bg-oc-hover-pink font-semibold pl-4">
                Drama, Fantasy, Horror, Thriller
              </h3>
              <p className=" text-lg font-medium text-oc-space-blue p-4 bg-oc-desert-yellow h-full w-full rounded-b-md">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
                necessitatibus tenetur nam, placeat magnam est, nulla quaerat
                at, recusandae esse aspernatur unde itaque quas alias omnis sit
                laudantium neque? Eum?
              </p>
            </div>
          </div>
          <div className=" card flex flex-col flex-1 grow shrink  hover:grow-[10] h-full items-center rounded-md lg:px-2 md:px-2 bg-oc-space-blue xs:py-2 sm:py-2">
            <h1 className=" day px-4 text-3xl font-semibold bg-oc-pastel-blue text-oc-cold-white w-full rounded-t-md text-center py-2">
              Wednesday
            </h1>
            <div className=" flex flex-col justify-center h-full items-center w-full bg-oc-cold-white rounded-b-md hover:rounded-md">
              <video src="./public/fuji.mp4" className=" "></video>
              <div className=" w-full flex flex-col">
                <h2 className=" text-oc-cold-white text-xl  font-semibold py-2 bg-oc-pastel-blue w-full text-center">
                  Phantom of the Paradise
                </h2>
                <h2 className=" text-oc-cold-white font-semibold py-2 bg-oc-pastel-blue w-full text-center">
                  Starting at 12:30 - 15:30
                </h2>
              </div>
              <h3 className=" w-full bg-oc-hover-pink font-semibold pl-4">
                Drama, Music, Horror, Comedy
              </h3>
              <p className=" text-lg font-medium text-oc-space-blue p-4 bg-oc-desert-yellow h-full w-full rounded-b-md">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
                necessitatibus tenetur nam, placeat magnam est, nulla quaerat
                at, recusandae esse aspernatur unde itaque quas alias omnis sit
                laudantium neque? Eum?
              </p>
            </div>
          </div>
          <div className=" card flex flex-col flex-1 grow shrink  hover:grow-[10] h-full items-center rounded-md lg:px-2 md:px-2 bg-oc-space-blue xs:py-2 sm:py-2">
            <h1 className=" day text-3xl font-semibold bg-oc-pastel-blue text-oc-cold-white w-full rounded-t-md text-center py-2">
              Thursday
            </h1>
            <div className=" flex flex-col justify-center h-full items-center w-full bg-oc-cold-white rounded-b-md hover:rounded-md">
              <video src="./public/fuji.mp4" className=" "></video>
              <div className=" w-full flex flex-col">
                <h2 className=" text-oc-cold-white text-xl  font-semibold py-2 bg-oc-pastel-blue w-full text-center">
                  Moonlight
                </h2>
                <h2 className=" text-oc-cold-white font-semibold py-2 bg-oc-pastel-blue w-full text-center">
                  Starting at 12:30 - 15:30
                </h2>
              </div>
              <h3 className=" w-full bg-oc-hover-pink font-semibold pl-4">
                Drama
              </h3>
              <p className=" text-lg font-medium text-oc-space-blue p-4 bg-oc-desert-yellow h-full w-full rounded-b-md">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
                necessitatibus tenetur nam, placeat magnam est, nulla quaerat
                at, recusandae esse aspernatur unde itaque quas alias omnis sit
                laudantium neque? Eum?
              </p>
            </div>
          </div>
          <div className=" card flex flex-col flex-1 grow shrink  hover:grow-[10] h-full items-center rounded-md lg:px-2 md:px-2 bg-oc-space-blue xs:py-2 sm:py-2">
            <h1 className=" day text-3xl font-semibold text-oc-cold-white w-full rounded-md text-center mb-2 bg-oc-pastel-blue py-2">
              Friday
            </h1>
            <div className=" flex flex-col justify-center h-full items-center w-full bg-oc-cold-white rounded-md hover:rounded-md">
              <video src="./public/fuji.mp4" className=" "></video>
              <div className=" w-full flex flex-col">
                <h2 className=" text-oc-cold-white text-xl  font-semibold py-2 bg-oc-pastel-blue w-full text-center">
                  The Shape of Water
                </h2>
              </div>
              <h3 className=" w-full bg-oc-hover-pink font-semibold pl-4">
                Drama, Fantasy, Romance
              </h3>
              <h2 className=" text-oc-space-blue font-semibold py-2 bg-oc-test w-full text-center">
                Starts at 12:30
              </h2>
              <p className=" text-lg font-medium text-oc-space-blue p-4 bg-oc-desert-yellow h-full w-full rounded-b-md">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
                necessitatibus tenetur nam, placeat magnam est, nulla quaerat
                at, recusandae esse aspernatur unde itaque quas alias omnis sit
                laudantium neque? Eum?
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className=" text-center font-semibold bg-oc-hover-pink py-8 w-full">
        Cinema Kela
      </footer>
    </div>
  );
}

export default Schedule;
