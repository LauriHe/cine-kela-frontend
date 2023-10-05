import { useEffect, useState } from 'react';
import VideoPlayer from '../components/VideoPlayer';
import NewWindow from 'react-new-window';
import Chat from '../components/chat';

function Stream() {
  const [windowOpen, setWindowOpen] = useState(false);
  const [donation, setDonation] = useState({});
  const [showDonationBox, setShowDonationBox] = useState(false);
  const [showDonationContent, setShowDonationContent] = useState(false);

  const handleWindowButton = () => {
    setWindowOpen(!windowOpen);
  };

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

  useEffect(() => {
    if (donation.username) {
      setShowDonationBox(true);
      setTimeout(() => {
        setShowDonationContent(true);
      }, 300);
      setTimeout(() => {
        setShowDonationContent(false);
        setShowDonationBox(false);
      }, 5000);
    }
  }, [donation]);

  return (
    <div className={windowOpen ? 'flex justify-center h-full overflow-hidden' : 'flex flex-col lg:flex-row items-center h-full'}>
      <div id="video" className={windowOpen ? 'h-full w-full' : 'h-full w-full flex-1 p-4 pb-2 lg:pb-4 lg:pr-2 relative'}>
        <div className={showDonationBox ? 'donate-box' : 'donate-box h-0'} style={{ transition: 'height 0.3s ease-in-out' }}>
          <div className={showDonationContent ? 'donate-box-content' : 'hidden'}>
            <p className="text-white">{donation.username + ' donated ' + donation.donateAmount + '€!'}</p>
            <p className="text-white">{'Message: ' + donation.donateMessage}</p>
            <div className="w-full h-7 px-4 rounded-md">
              <div className="w-full h-full flex items-center relative bg-oc-pastel-blue rounded-md">
                <div
                  className="h-full bg-oc-space-blue rounded-md"
                  style={{ width: (donation.donateProgress / donation.donateGoal) * 100 + '%' }}
                ></div>
                <p className="absolute transform -translate-x-1/2 left-1/2 text-white">
                  {'Progress: ' + donation.donateProgress + ' / ' + donation.donateGoal}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={windowOpen ? 'h-full' : 'rounded-md h-full overflow-hidden'}>
          <VideoPlayer></VideoPlayer>
        </div>
      </div>
      <div id="chat" className={windowOpen ? '' : 'w-full h-[65%] lg:flex-none lg:w-[20rem] lg:h-full p-4 pt-2 lg:pt-4 lg:pl-2'}>
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
