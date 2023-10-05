function Schedule() {
  return (
    <div className=" flex h-screen bg-oc-space-blue justify-center items-center">
      <div className="flex xs:flex-col sm:flex-col lg:flex-row xs:w-screen sm:w-screen xs:h-screen sm:h-screen lg:h-4/6 lg:w-5/6 bg-oc-space-blue rounded-md">
        <div className=" card flex flex-col flex-1 bg-oc-pastel-blue grow shrink xs:hover:grow-[10] sm:hover:grow-[20] lg:hover:grow-[10] lg:h-full rounded-l-md items-center">
          <h1 className=" text-3xl font-semibold text-oc-space-blue">Monday</h1>
          <div className=" flex flex-col justify-center h-full items-center">
            <video src="./public/fuji.mp4" className=" lg:h-5/6 p-4"></video>
            <p className=" text-lg font-medium text-white p-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
              necessitatibus tenetur nam, placeat magnam est, nulla quaerat at,
              recusandae esse aspernatur unde itaque quas alias omnis sit
              laudantium neque? Eum?
            </p>
          </div>
        </div>
        <div className=" card flex flex-col flex-1 bg-oc-desert-yellow grow shrink  hover:grow-[10] h-full items-center">
          <h1 className=" text-3xl font-semibold text-oc-space-blue">
            Tuesday
          </h1>
          <div className=" flex flex-col justify-center h-full items-center">
            <video src="./public/fuji.mp4" className=" lg:h-5/6 p-4"></video>
            <p className=" text-lg font-medium text-white p-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
              necessitatibus tenetur nam, placeat magnam est, nulla quaerat at,
              recusandae esse aspernatur unde itaque quas alias omnis sit
              laudantium neque? Eum?
            </p>
          </div>
        </div>
        <div className=" card flex flex-col flex-1 bg-oc-pastel-blue grow shrink  hover:grow-[10] h-full items-center">
          <h1 className=" px-4 text-3xl font-semibold text-oc-space-blue">
            Wednesday
          </h1>
          <div className=" flex flex-col justify-center h-full items-center">
            <video src="./public/fuji.mp4" className=" lg:h-5/6 p-4"></video>
            <p className=" text-lg font-medium text-white p-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
              necessitatibus tenetur nam, placeat magnam est, nulla quaerat at,
              recusandae esse aspernatur unde itaque quas alias omnis sit
              laudantium neque? Eum?
            </p>
          </div>
        </div>
        <div className=" card flex flex-col flex-1 bg-oc-desert-yellow grow shrink  hover:grow-[10] h-full items-center">
          <h1 className=" text-3xl font-semibold text-oc-space-blue">
            Thursday
          </h1>
          <div className=" flex flex-col justify-center h-full items-center">
            <video src="./public/fuji.mp4" className=" lg:h-5/6 p-4"></video>
            <p className=" text-lg font-medium text-white p-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
              necessitatibus tenetur nam, placeat magnam est, nulla quaerat at,
              recusandae esse aspernatur unde itaque quas alias omnis sit
              laudantium neque? Eum?
            </p>
          </div>
        </div>
        <div className=" card flex flex-col flex-1 bg-oc-pastel-blue grow shrink  hover:grow-[10] h-full items-center rounded-r-md">
          <h1 className=" text-3xl font-semibold text-oc-space-blue">Friday</h1>
          <div className=" flex flex-col justify-center h-full items-center">
            <video src="./public/fuji.mp4" className=" lg:h-5/6 p-4"></video>
            <p className=" text-lg font-medium text-white p-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
              necessitatibus tenetur nam, placeat magnam est, nulla quaerat at,
              recusandae esse aspernatur unde itaque quas alias omnis sit
              laudantium neque? Eum?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
