import React, { Component } from 'react';
import $ from 'jquery';
import '../skyhawk/jquery.flightindicators';
import settings from "./SkyhawkSettings";

class AirspeedIndicator extends Component {

  	constructor(props) {
		super(props);
		this.state = {jqueryObj: null};
	}

	componentDidMount() {
		let ele = $.flightIndicator(
							"#airspeed", 
							"airspeed", 
							settings);

		this.setState({ jqueryObj: 	ele });
	}

	render() {
		if (this.state.jqueryObj != null) {
			this.state.jqueryObj.setAirSpeed(this.props.airspeed);
		}
		return <div id="airspeed" className="instrument" />
	}
}

export default AirspeedIndicator;