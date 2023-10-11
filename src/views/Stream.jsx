import { useEffect, useRef, useState } from 'react';
import VideoPlayer from '../components/VideoPlayer';
import NewWindow from 'react-new-window';
import Chat from '../components/chat';
import movies from '../data/movies.json';
import { confetti } from 'tsparticles-confetti';

function Stream() {
  const [windowOpen, setWindowOpen] = useState(false);
  const [showDonationBox, setShowDonationBox] = useState(false);
  const [showDonationContent, setShowDonationContent] = useState(false);
  const [videoSource, setVideoSource] = useState(null);
  const [videoLoop, setVideoLoop] = useState(true);
  const [nextMovie, setNextMovie] = useState(null);
  const [showNextMovie, setShowNextMovie] = useState(true);
  const [donation, setDonation] = useState({});
  const [currentDonation, setCurrentDonation] = useState({});
  const donations = useRef([]);
  let confettiDone = false;
  let moviePlaying = false;

  // Render falling confetti effect on the screen using tsparticles
  const renderConfetti = async () => {
    const duration = 0.5 * 1000,
      animationEnd = Date.now() + duration,
      defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      // since particles fall down, start a bit higher than random
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.5), y: Math.random() - 0.5 },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.5, 0.9), y: Math.random() - 0.5 },
        })
      );
    }, 50);
  };

  // Open chat in a new window
  const handleWindowButton = () => {
    setWindowOpen(!windowOpen);
  };

  // Check if a movie should be playing
  // If so set the video source to the movie
  const checkMoviePlaying = () => {

    // Get current date and time
    const currentDate = new Date().toLocaleDateString('fi-FI');
    const currentTime = new Date().toLocaleTimeString('fi-FI');
    let matchingTime = false;

    // Loop through all movies in the json file
    Object.entries(movies).forEach((entry) => {
      const movie = entry[1];
      const premiereDate = movie.premiereDate;
      const premiereTime = movie.premiereTime;
      const expireTime = movie.expireTime;
      const movieTicket = movie.ticket;

      // Check if current date and time matches the movie
      if (currentDate === premiereDate && currentTime >= premiereTime && currentTime <= expireTime) {
        matchingTime = true;

        // If a movie is not already playing, set the video source to the movie
        if (!moviePlaying) {
          moviePlaying = true;
          setShowNextMovie(false);
          setVideoLoop(false);

          const ticket = localStorage.getItem(movieTicket); // Check if user has a ticket for the movie

          // If user has a ticket, play the movie
          // Otherwise show a message that the user does not have a ticket
          if (ticket) {
            setVideoSource({
              src: './movies/countdown.mp4',
              type: 'video/mp4',
            });
            setTimeout(() => {
              setVideoSource({
                src: movie.source,
                type: 'video/mp4',
              });
            }, 13000);
          } else {
            setVideoLoop(true);
            setVideoSource({
              src: './noTicket.mp4',
              type: 'video/mp4',
            });
          }
        }
      }
    });

    // If no movie is playing, set the video source to null
    // This will make the video player show the default video
    if (!matchingTime && moviePlaying) {
      moviePlaying = false;
      setShowNextMovie(true);
      setVideoLoop(true);
      setVideoSource(null);
    }
  };

  // Update the next movie info
  const updateNextMovieIfo = () => {

    // Get current date and time
    const currentDate = new Date().toLocaleDateString('fi-FI');
    const currentTime = new Date().toLocaleTimeString('fi-FI');
    const movieList = [];

    // Loop through all movies in the json file
    Object.entries(movies).forEach((entry) => {
      movieList.push(entry[1]);
    });

    for (let i = 0; i < movieList.length; i++) {
      const movie = movieList[i];
      const premiereDate = movie.premiereDate;
      const premiereTime = movie.premiereTime;
      const expireTime = movie.expireTime;

      // If current date and time matches the movie, set the next movie info
      if (currentDate == premiereDate && currentTime <= premiereTime) {
        setNextMovie(movie);
      } 
      // If current date matches the movie and the movie has ended, show the next movie info
      else if (currentDate == premiereDate && currentTime >= expireTime) {
        setNextMovie(movieList[i + 1]);
      } 
      // If it's the last movie, don't show anything
      else if (currentDate == premiereDate && i == movieList.length - 1) {
        setNextMovie(null);
      }
    }
  };

  // Change the video player style depending on if the chat is open or not
  // When the chat is open, the video player will be fullscreen
  useEffect(() => {
    const videoJs = document.querySelector('video');
    const vjsControlBar = document.querySelector('.vjs-control-bar');
    if (windowOpen) {
      videoJs.style.borderRadius = '0px';
      videoJs.style.backgroundColor = '#191e39';
      vjsControlBar.style.borderRadius = '0px';
    } else {
      videoJs.style.borderRadius = '0.375rem';
      videoJs.style.backgroundColor = '#37436d';
      vjsControlBar.style.borderRadius = '0 0 0.375rem 0.375rem';
    }
  }, [windowOpen]);

  // Render donation box containing the latest donation
  const renderDonation = () => {
    const donation = donations.current[0];  // Get the latest donation from the donations array
    if (!donation) return;  // If there are no donations, return

    // Open the donation box and set the current donation
    setCurrentDonation(donation);
    setShowDonationBox(true);

    // Wait for the donation box to open and then show the donation content
    setTimeout(() => {
      setShowDonationContent(true);
      // If the donation goal has been reached, render the confetti effect
      if (donation.donateProgress >= donation.donateGoal) {
        // Show the confetti effect only once
        if (!confettiDone) {
          confettiDone = true;
          renderConfetti();
        }
      }
    }, 300);

    // Close the donation box after 5 seconds
    setTimeout(() => {
      setShowDonationContent(false);
      setShowDonationBox(false);
    }, 5000);

    // Remove the donation from the donations array after 6 seconds and render the next donation
    setTimeout(() => {
      donations.current.shift();
      renderDonation();
    }, 6000);
  };

  // Receive donation data from the chat component and add it to the donations array
  useEffect(() => {
    if (donation.username) {
      donations.current.push(donation);
      if (donations.current.length == 1) {
        renderDonation();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [donation]);

  // Check if a movie should be playing and update the next movie info every second
  useEffect(() => {
    checkMoviePlaying();
    updateNextMovieIfo();
    setInterval(() => {
      checkMoviePlaying();
      updateNextMovieIfo();
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={windowOpen ? 'flex justify-center h-full overflow-hidden' : 'flex flex-col lg:flex-row items-center h-full'}>
      {/* Video and donations */}
      <div id="video" className={windowOpen ? 'h-full w-full' : 'h-full w-full flex-1 p-4 pb-2 lg:pb-4 lg:pr-2 relative'}>
        <div className={showDonationBox ? 'donate-box' : 'donate-box h-0 p-0'} style={{ transition: 'height 0.3s ease-in-out' }}>
          <div className="w-full h-full rounded-md bg-oc-space-blue">
            {showDonationContent && (
              <div className="donate-box-content">
                <p className="text-white">{currentDonation?.username + ' donated ' + currentDonation?.donateAmount + '€!'}</p>
                <p className="text-white break-all">{'Message: ' + (currentDonation?.donateMessage.length > 200 ? currentDonation?.donateMessage.slice(0,200) : currentDonation?.donateMessage)}</p>
                <div className="w-full h-7 px-4 rounded-md">
                  <div className="w-full h-full flex items-center relative bg-oc-pastel-blue rounded-md">
                    <div
                      className="h-full bg-oc-hover-pink rounded-md"
                      style={{ width: (currentDonation?.donateProgress / currentDonation?.donateGoal) * 100 + '%' }}
                    ></div>
                    <p className="absolute w-full text-center text-white">
                      {'Progress: ' + currentDonation?.donateProgress + ' / ' + currentDonation?.donateGoal + " €"}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {nextMovie && showNextMovie && (
          <div className="w-fit h-fit absolute top-[2rem] transform translate-x-1/2 right-1/2 z-10 py-4 px-10 bg-oc-space-blue rounded-md flex flex-col gap-2 items-center">
            <div className="text-white text-[0.6rem] sm:text-[1.5vw] xl:text-[1.2rem] text-center">Next Movie: {nextMovie.title}</div>
            <div className="text-white text-[0.6rem] sm:text-[1.5vw] xl:text-[1.2rem] text-center">
              {'Time: ' + nextMovie.premiereDate.substring(0, 5) + ' at ' + nextMovie.premiereTime.substring(0, 5)}
            </div>
          </div>
        )}
        <div className={windowOpen ? 'h-full' : 'rounded-md h-full overflow-hidden'}>
          <VideoPlayer source={videoSource} loop={videoLoop}></VideoPlayer>
        </div>
      </div>
      {/* Stream chat */}
      <div id="chat" className={windowOpen ? '' : 'w-full h-[65%] lg:flex-none lg:w-[25rem] lg:h-full p-4 pt-2 lg:pt-4 lg:pl-2'}>
        {windowOpen ? (
          <NewWindow>
            <Chat handleWindow={handleWindowButton} windowed={windowOpen} setDonationData={setDonation}></Chat>
          </NewWindow>
        ) : (
          <Chat handleWindow={handleWindowButton} windowed={windowOpen} setDonationData={setDonation}></Chat>
        )}
      </div>
    </div>
  );
}

export default Stream;
