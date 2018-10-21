import React, { Component } from 'react';
import $ from 'jquery';
import '../skyhawk/jquery.flightindicators';
import settings from "./SkyhawkSettings";

class VerticalSpeedIndicator extends Component {

  	constructor(props) {
		super(props);
		this.state = {jqueryObj: null};
	}

	componentDidMount() {
		let ele = $.flightIndicator(
							"#variometer", 
							"variometer", 
							settings);

		this.setState({ jqueryObj: 	ele });
	}

	render() {
		if (this.state.jqueryObj != null) {
			this.state.jqueryObj.setVario(this.props.verticalSpeed);
		}
		return <div id="variometer" className="instrument" />
	}
}

export default VerticalSpeedIndicator;