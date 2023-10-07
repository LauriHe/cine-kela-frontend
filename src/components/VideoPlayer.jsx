import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import '../vjs-theme.css';

function VideoPlayer() {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    const options = {
      autoplay: true,
      muted: true,
      controls: true,
      responsive: false,
      fluid: false,
      loop: true,
      liveui: true,
      sources: [
        {
          src: 'http://195.148.104.124:1935/jakelu/striiiimi/hieno-striimi/playlist.m3u8',
          type: 'application/x-mpegURL',
        },
        {
          src: './placeholder.mp4',
          type: 'video/mp4',
        },
      ],
    };

    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      const videoElement = document.createElement('video-js');

      videoElement.classList.add('vjs-big-play-centered');
      videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(videoElement, options, () => {
        player.on('waiting', () => {
          //videojs.log('player is waiting');
        });

        player.on('dispose', () => {
          //videojs.log('player will dispose');
        });
      }));

      player.addClass('vjs-theme-city');

      // You could update an existing player in the `else` block here
      // on prop change, for example:
    } else {
      const player = playerRef.current;

      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [videoRef]);

  // Dispose the Video.js player when the functional component unmounts
  useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player className="h-full">
      <div ref={videoRef} className="h-full" />
    </div>
  );
}

VideoPlayer.propTypes = {
  options: PropTypes.object,
};

export default VideoPlayer;
