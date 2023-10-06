function Home() {
  return (
    <>
      <div className="bg-oc-space-blue">
        <div className="banner"></div>
        <body className="w-10/12 m-auto">
          {/* main slogan / article */}
          <article className="mb-8">
            <h1 className="text-center py-8 px-8 text-4xl lg:text-5xl text-white leading-normal lg:leading-relaxed ">
              Olen vilpittömän pahoillani, en aavistanut että sillan alla asui
              filosoofi
            </h1>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              voluptate corrupti laboriosam repudiandae et. Asperiores odit
              fugit voluptatem, tenetur numquam quo voluptatum. Unde quia beatae
              laborum eius autem corporis exercitationem.
            </p>
          </article>
          {/* cards / news */}
          {/* div for cards */}
          <div className="flex flex-col ">
            {/* card */}
            <div className="flex flex-col lg:flex-row newsCard mb-8 rounded">
              <img
                src="/catTest.png"
                className="flex-grow w-full lg:w-1/2 pr-0 lg:pr-8"
              ></img>
              {/* div for p and btn, do not change */}
              <div className="flex flex-col items-center justify-center flex-grow">
                <h1 className="text-2xl my-4">Header</h1>
                <p className="p-8">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Maiores obcaecati laborum harum soluta id voluptate alias vero
                  molestiae atque error. Pariatur ipsam excepturi in laboriosam
                  rerum quibusdam corporis voluptates quo.
                </p>
                <btn className="newsbtn">Read More</btn>
              </div>
            </div>
            {/* right card */}
            <div className="flex flex-col-reverse lg:flex-row newsCard mb-8 rounded">
              {/* div for p and btn, do not change */}
              <div className="flex flex-col items-center justify-center flex-grow">
                <h1 className="text-2xl my-4">Header</h1>
                <p className="p-8">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Maiores obcaecati laborum harum soluta id voluptate alias vero
                  molestiae atque error. Pariatur ipsam excepturi in laboriosam
                  rerum quibusdam corporis voluptates quo.
                </p>
                <btn className="newsbtn">Read More</btn>
              </div>
              <img
                src="/catTest.png"
                className="flex-grow w-full lg:w-1/2 pl-0 lg:pl-8"
              ></img>
            </div>
          </div>
        </body>
      </div>
    </>
  );
}

export default Home;
