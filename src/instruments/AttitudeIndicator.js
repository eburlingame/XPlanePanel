import React, { Component } from 'react';
import $ from 'jquery';
import '../skyhawk/jquery.flightindicators';
import settings from "./SkyhawkSettings";

class AttitudeIndicator extends Component {

  	constructor(props) {
		super(props);
		this.state = {jqueryObj: null};
	}

	componentDidMount() {
		let ele = $.flightIndicator(
							"#attitude", 
							"attitude", 
							settings);

		this.setState({ jqueryObj: 	ele });
	}

	render() {
		if (this.state.jqueryObj != null) {
			this.state.jqueryObj.setPitch(this.props.pitch);
			this.state.jqueryObj.setRoll(this.props.roll);
			this.state.jqueryObj.setOffFlag(this.props.offFlag);

		}
		return <div id="attitude" className="instrument" />
	}
}

export default AttitudeIndicator;