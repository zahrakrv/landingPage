import React from 'react';
import '../styles/components/landing.css';
import MainSection from './MainSection.jsx';
import VideoContainer from './details/VideoContainer.jsx';
const Landing = () => {
  return (
    <div className="landing-container">
      <VideoContainer/>
     <MainSection/>
    </div>
  );
}
export default Landing;