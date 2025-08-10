import React from 'react';
import VideoContainer from './details/VideoContainer.jsx';
import MainSection from './MainSection.jsx';
import '../styles/components/landing.css';
const Landing = () => {
  return (
    <div className="landing-container">
      <VideoContainer/>
     <MainSection/>
    </div>
  );
}
export default Landing;