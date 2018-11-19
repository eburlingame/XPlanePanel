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
import XPlaneClient from './XPlaneClient'; 

import Tachometer from './instruments/Tachometer';
import PanelBackground from './instruments/PanelBackground';
import WarningLights from './instruments/WarningLights';
import AudioPanel from './instruments/AudioPanel';

const REF_FLOAT = "float";
const WS_URL = "ws://localhost:9002/";
const XPLANE_FIELDS = [
	{
		"field": "ias", 
		"dataref": "sim/flightmodel/position/indicated_airspeed",
		"type": REF_FLOAT, 
		"refresh": 10
	},
	{
		"field": "bank", 
		"dataref": "sim/cockpit/gyros/phi_vac_ind_deg",
		"type": REF_FLOAT, 
		"refresh": 10
	},
	{
		"field": "pitch", 
		"dataref": "sim/cockpit/gyros/the_vac_ind_deg",
		"type": REF_FLOAT, 
		"refresh": 10
	},
	{
		"field": "hdg", 
		"dataref": "sim/cockpit/gyros/psi_vac_ind_degm",
		"type": REF_FLOAT, 
		"refresh": 10
	},
	{
		"field": "slip", 
		"dataref": "sim/cockpit2/gauges/indicators/slip_deg",
		"type": REF_FLOAT, 
		"refresh": 10
	},
	{
		"field": "vertspd", 
		"dataref": "sim/cockpit2/gauges/indicators/vvi_fpm_pilot",
		"type": REF_FLOAT, 
		"refresh": 10
	},
	{
		"field": "alt", 
		"dataref": "sim/cockpit2/gauges/indicators/altitude_ft_pilot",
		"type": REF_FLOAT, 
		"refresh": 10
	},
	{
		"field": "roll_rate", 
		"dataref": "sim/cockpit2/gauges/indicators/turn_rate_roll_deg_pilot",
		"type": REF_FLOAT, 
		"refresh": 10
	},
	{
		"field": "rpm", 
		"dataref": "sim/cockpit2/engine/indicators/engine_speed_rpm",
		"type": REF_FLOAT, 
		"refresh": 10

	}
];

class XPlaneData {
	constructor(fields, updatedCallback) {
		this.fields = fields;
		this.values = {};
		this.update = this.update.bind(this);
		this.client = new XPlaneClient(WS_URL, this.update);
		this.updatedCallback = updatedCallback;
	}

	update(data) {
		this.values = data;
		this.updatedCallback(data);
	}

	start() {
		this.subscribe();
	}

	subscribe() {
		this.fields.forEach(field => {
			let name = field["field"];
			this.values[name] = 0;
			this.client.subscribe(
				field["dataref"],
				name,
				field['refresh'],
				field['type']);
		});
	}

	unsubscribe() {
		this.fields.forEach(field => {
			this.client.unsubscribe(field["field"]);
		});
	}
}

class Panel extends Component {
  	constructor(props) {
		super(props);
		this.componentDidMount = this.componentDidMount.bind(this);
		this.updated = this.updated.bind(this);
		this.xplane = new XPlaneData(XPLANE_FIELDS, this.updated);
		this.state = {};
		XPLANE_FIELDS.forEach(field => {
			this.state[field['field']] = 0;
		});
	}

	componentDidMount() {
		this.xplane.start();
	}

	updated(data) {
		this.setState(data);
	}

	render() {
		return (
			<div>
		        <AirspeedIndicator airspeed={this.state['ias']} />
		        <AttitudeIndicator roll={ -this.state['bank'] } 
		        				   pitch={ this.state['pitch'] } 
		        				   offFlag={false}/>

		        <Altimeter altitude={ this.state['alt'] } />

		        <TurnCoordinator turn={ this.state['roll_rate'] } 
		        			     slip={ this.state['slip'] } />

		        <HeadingIndicator heading={ this.state['hdg'] } 
		        	      		  headingBug={320} />

		        <VerticalSpeedIndicator verticalSpeed={ this.state['vertspd'] / 100 } />

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

		        <Tachometer rpm={ this.state['rpm'] } />
			</div>
		);
	}
}

export default Panel;