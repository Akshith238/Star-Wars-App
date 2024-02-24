import React from 'react';
import ReactPlayer from 'react-player';

const VideoPLayer = () => {
  return (
    <div className="background-video-container">
      <ReactPlayer
        url="/videos/planets.mp4"
        playing
        loop
        muted
        width="100%"
        height="100%"
        className="background-video"
      />
    </div>
  );
};

export default VideoPLayer;