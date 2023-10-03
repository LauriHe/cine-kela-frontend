import { useEffect, useState } from 'react';
import VideoPlayer from '../components/VideoPlayer';
import Chat from '../components/chat';
import NewWindow from 'react-new-window';

function Stream() {
  const [windowOpen, setWindowOpen] = useState(false);

  const handleWindowButton = () => {
    setWindowOpen(!windowOpen);
  };

  const handleChatResize = (chat, video) => {
    let chatHeight = chat.offsetHeight;
    let videoHeight = video.offsetHeight;

    if (chatHeight < videoHeight) {
      chat.style.height = videoHeight + 'px';
    }

    if (window.innerHeight > videoHeight) {
      chat.style.height = '100%';
    }
  };

  const handleVideoResize = (video) => {
    let videoHeight = video.offsetHeight;

    if (videoHeight === window.innerHeight) {
      video.style.width = videoHeight * 1.7777777778 + 'px';
    }
  };

  useEffect(() => {
    const video = document.getElementById('video');
    const chat = document.getElementById('chat');

    if (!windowOpen) {
      handleChatResize(chat, video);
      window.addEventListener('resize', () => {
        handleChatResize(chat, video);
      });
    }
  }, [windowOpen]);

  useEffect(() => {
    const video = document.getElementById('video');
    if (windowOpen) {
      handleVideoResize(video);
      window.addEventListener('resize', () => {
        handleVideoResize(video);
      });
    } else {
      video.style.width = '100%';
    }
  }, [windowOpen]);

  return (
    <div className={windowOpen ? 'flex justify-center h-[100vh] overflow-hidden' : 'flex flex-col lg:flex-row items-center h-[100vh]'}>
      <div id="video" className={windowOpen ? 'h-full' : 'w-full flex-grow-0 flex-shrink basis-auto p-2'}>
        <div className={windowOpen ? '' : 'rounded-md overflow-hidden'}>
          <VideoPlayer></VideoPlayer>
        </div>
      </div>
      <div id="chat" className={windowOpen ? '' : 'w-full lg:w-[25rem] lg:h-full flex-grow flex-shrink basis-auto p-2'}>
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
