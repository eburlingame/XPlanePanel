import React, { Component } from 'react';

import AirspeedIndicator from './instruments/AirspeedIndicator';
import PanelBackground from './instruments/PanelBackground';
import WarningLights from './instruments/WarningLights';


import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PanelBackground />
        <WarningLights />

        <AirspeedIndicator airspeed={100} />
      </div>
    );
  }
}

export default App;
