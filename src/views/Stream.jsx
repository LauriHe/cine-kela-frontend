import { useEffect, useState } from 'react';
import VideoPlayer from '../components/VideoPlayer';
import Chat from '../components/Chat';
import NewWindow from 'react-new-window';

function Stream() {
  const [windowOpen, setWindowOpen] = useState(false);

  const handleWindowButton = () => {
    setWindowOpen(!windowOpen);
  };

  useEffect(() => {
    const videoJs = document.querySelector('video');
    const vjsControlBar = document.querySelector('.vjs-control-bar');
    if (windowOpen) {
      videoJs.style.borderRadius = '0px';
      vjsControlBar.style.borderRadius = '0px';
    } else {
      videoJs.style.borderRadius = '0.375rem';
      vjsControlBar.style.borderRadius = '0 0 0.375rem 0.375rem';
    }
  }, [windowOpen]);

  return (
    <div className={windowOpen ? 'flex justify-center h-full overflow-hidden' : 'flex flex-col lg:flex-row items-center h-full'}>
      <div id="video" className={windowOpen ? 'h-full w-full' : 'h-full w-full flex-1 p-2'}>
        <div className={windowOpen ? 'h-full' : 'rounded-md h-full'}>
          <VideoPlayer></VideoPlayer>
        </div>
      </div>
      <div id="chat" className={windowOpen ? '' : 'w-full h-[65%] lg:flex-none lg:w-[20rem] lg:h-full p-2'}>
        {windowOpen ? (
          <NewWindow>
            <Chat handleWindow={handleWindowButton} windowed={windowOpen}></Chat>
          </NewWindow>
        ) : (
          <Chat handleWindow={handleWindowButton} windowed={windowOpen}></Chat>
        )}
      </div>
    </div>
  );
}

export default Stream;
