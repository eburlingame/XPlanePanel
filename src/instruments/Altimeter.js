import React, { Component } from 'react';
import $ from 'jquery';
import '../skyhawk/jquery.flightindicators';
import settings from "./SkyhawkSettings";

class Altimeter extends Component {

  	constructor(props) {
		super(props);
		this.state = {jqueryObj: null};
	}

	componentDidMount() {
		let ele = $.flightIndicator(
							"#altimeter", 
							"altimeter", 
							settings);

		this.setState({ jqueryObj: 	ele });
	}

	render() {
		if (this.state.jqueryObj != null) {
			this.state.jqueryObj.setAltitude(this.props.altitude);
			this.state.jqueryObj.setPressure(this.props.baro, false);
		}
		return <div id="altimeter" className="instrument" />
	}
}

export default Altimeter;