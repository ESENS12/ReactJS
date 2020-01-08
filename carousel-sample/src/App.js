import React from 'react';
import logo from './logo.svg';
import './App.css';

import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/dist/styles.css';

const slider = (
  <AwesomeSlider className="Carousel-Item" fillParent={false} cssModule={AwsSliderStyles} >
    <div className="Carousel-Item" data-src="https://img.youtube.com/vi/sNPnbI1arSE/hqdefault.jpg" />
    <div className="Carousel-Item" data-src="https://img.youtube.com/vi/D9ioyEvdggk/hqdefault.jpg" />
    <div className="Carousel-Item" data-src="https://img.youtube.com/vi/VOgFZfRVaww/hqdefault.jpg" />
  </AwesomeSlider>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {slider}
      </header>
    </div>
  );
}

export default App;
