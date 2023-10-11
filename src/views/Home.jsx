import { useEffect } from "react";
import { InstagramEmbed } from "react-social-media-embed";

function Home() {

  // Load Twitter widget
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <div className="bg-oc-space-blue">
        <div className="banner"></div>
        <div className="w-10/12 m-auto">
          {/* main slogan / article */}
          <article className="mb-8 flex flex-col gap-4">
            <h1 className="text-center py-8 px-8 text-4xl lg:text-5xl text-white leading-normal lg:leading-relaxed font-IM-Fell-English-SC">
              {`Ciné Kela - where animation comes to life!`}
            </h1>
            <p className="text-white">
              {`Welcome to Ciné Kela, the premier Finnish film festival celebrating the vibrant world of animated indie films! Nestled in the heart of Finland's rich cinematic landscape, we are dedicated to showcasing the creativity and innovation of independent animators from around the globe.`}
            </p>
            <p className="text-white">
              {`At Ciné Kela, we believe that animation is a powerful medium that knows no boundaries. Our festival serves as a dynamic platform where storytellers, animators, and artists come together to share their unique visions, pushing the boundaries of animation as an art form. Whether you're a lifelong animation enthusiast or just discovering the magic of indie animated films, we invite you to join us on a cinematic journey like no other.`}
            </p>
            <p className="text-white">
              {`With a diverse selection of handpicked films, workshops, panel discussions, and opportunities to connect with fellow film lovers, Ciné Kela is a place where animation thrives, sparks creativity, and fosters a sense of community. We invite you to explore the enchanting worlds, thought-provoking narratives, and breathtaking visuals that await you at our festival.`}
            </p>
            <p className="text-white">
              {`Join us in celebrating the art of animation, where imagination knows no limits and storytelling takes flight. Welcome to Ciné Kela - where animation comes to life!`}
            </p>
          </article>
          {/* cards / news */}
          {/* div for cards */}
          <div className="flex flex-col ">
            {/* card */}
            <div className="flex flex-col lg:flex-row newsCard mb-8 rounded-md">
              <img
                src="/catTest.png"
                className="flex-grow w-full lg:w-1/2"
              ></img>
              {/* div for p and btn, do not change */}
              <div className="flex flex-col items-center justify-center flex-grow w-full lg:w-1/2">
                <h1 className="text-2xl my-4 text-center">
                  Celebrating the Art of Animation
                </h1>
                <p className="p-8">
                  {`In the enchanting world of cinema, animation holds a special place. It's a realm where creativity knows no bounds, where stories come to life through the magic of imagery, and where imagination takes flight. Ciné Kela, the Finnish film festival dedicated to animated indie films, stands as a testament to this captivating art form...`}
                </p>
                <button className="newsbtn">Read More</button>
              </div>
            </div>
            {/* right card */}
            <div className="flex flex-col-reverse lg:flex-row newsCard mb-8 rounded-md">
              {/* div for p and btn, do not change */}
              <div className="flex flex-col items-center justify-center flex-grow w-full lg:w-1/2 p-8">
                <h1 className="text-2xl my-4 text-center">
                  Ciné Kela: Where Animation Becomes a Canvas for Creativity
                </h1>
                <p className="p-8">
                  {`In the realm of cinematic artistry, animation stands as a unique canvas, allowing storytellers to paint their narratives with vivid imagination and boundless creativity. Ciné Kela, the Finnish film festival dedicated to animated indie films, is the place where these vibrant tales come to life, captivating audiences and celebrating the art of animation...`}
                </p>
                <button className="newsbtn">Read More</button>
              </div>
              <img src="/catTest.png" className=" w-full lg:w-1/2"></img>
            </div>
          </div>
          {/* social media */}
          <div className="flex flex-col lg:flex-row justify-between mb-8">
            {/* twitter */}
            <div className="mr-0 lg:mr-8 mb-8 rounded w-full lg:w-1/2 noScrollbar">
              <a
                className="twitter-timeline"
                data-lang="en"
                data-width="100%"
                data-height="700px"
                data-theme="light"
                href="https://twitter.com/metropolia?ref_src=twsrc%5Etfw"
              >
                Tweets by Metropolia
              </a>
            </div>
            {/* instagram */}
            <div className="w-full lg:w-1/2 h-[700px] overflow-scroll rounded-md noScrollbar">
              <InstagramEmbed
                url="https://www.instagram.com/p/CxsnuojNVzI/"
                maxWidth={320}
                hideCaption={false}
                containerTagName="div"
                protocol=""
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
