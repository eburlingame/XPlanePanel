import React, { Component } from 'react';

import AirspeedIndicator from './instruments/AirspeedIndicator';
import AttitudeIndicator from './instruments/AttitudeIndicator';
import Altimeter from './instruments/Altimeter';
import TurnCoordinator from './instruments/TurnCoordinator';
import VerticalSpeedIndicator from './instruments/VerticalSpeedIndicator';
import HeadingIndicator from './instruments/HeadingIndicator';

import DualCourseDeviationIndicator from './instruments/DualCourseDeviationIndicator';
import SingleCourseDeviationIndicator from './instruments/SingleCourseDeviationIndicator';
import AutomaticDirectionFinder from './instruments/AutomaticDirectionFinder';

import Radio from './instruments/Radio';

import Tachometer from './instruments/Tachometer';
import Throttle from './instruments/Throttle';
import Mixture from './instruments/Mixture';


import PanelBackground from './instruments/PanelBackground';
import WarningLights from './instruments/WarningLights';
import AudioPanel from './instruments/AudioPanel';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PanelBackground />
        <WarningLights />
        <AudioPanel />

        <AirspeedIndicator airspeed={100} />
        <AttitudeIndicator roll={20} pitch={10} offFlag={false}/>
        <Altimeter airspeed={100} />
        <TurnCoordinator turn={10} slip={.5} />
        <HeadingIndicator heading={330} headingBug={320} />
        <VerticalSpeedIndicator verticalSpeed={10} />

        <DualCourseDeviationIndicator 
          toFromAmt={0}
          warnAmt={0}
          vertNeedleDeflection={0}
          horizNeedleDeflection={0}
          obsSetting={0} />

        <SingleCourseDeviationIndicator 
          toFromAmt={0}
          vertNeedleDeflection={0}
          obsSetting={0} />

        <AutomaticDirectionFinder 
          stationBearing={50}
          ringRotation={20} />

        <Radio
          id={1}
          commActiveFreq={122.75}
          commStandbyFreq={122.75}
          navActiveFreq={122.75}
          navStandbyFreq={122.75} />

        <Radio
          id={2}
          commActiveFreq={122.75}
          commStandbyFreq={122.75}
          navActiveFreq={122.75}
          navStandbyFreq={122.75} />

        <Tachometer rpm={1550} />
        <Throttle setting={1} />
        <Mixture setting={1} />

      </div>
    );
  }
}

export default App;
