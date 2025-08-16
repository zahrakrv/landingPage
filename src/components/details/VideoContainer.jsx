import '../../styles/components/videoContainer.css';
import HeroVideo from '../../assets/video/hero.mp4';
import PlayIcon from '../../assets/image/play-button.png';
import React, { useState, useRef, useEffect } from 'react';

const VideoContainer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayButtonClick = () => {
    setIsPlaying(true);
  };

  useEffect(() => {
    if (isPlaying && videoRef.current) {
      videoRef.current.play();
    }
  }, [isPlaying]);

  return (
    <section className="hero-section">
      {!isPlaying ? (
        <div className="video-placeholder" onClick={handlePlayButtonClick}>
          <div className="video-wrapper">
            <div className="vector-wrapper">
              <img src={PlayIcon} alt="Play Video" className="play-icon" />
            </div>
          </div>
        </div>
      ) : (
        <video ref={videoRef} loop muted autoPlay playsInline className="hero-video" onClick={()=>setIsPlaying(false)}>
          <source src={HeroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </section>
  );
};

export default VideoContainer;
