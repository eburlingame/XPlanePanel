import React, { Component } from 'react';
import $ from 'jquery';
import '../skyhawk/jquery.flightindicators';
import settings from "./SkyhawkSettings";

class TurnCoordinator extends Component {

  	constructor(props) {
		super(props);
		this.state = {jqueryObj: null};
	}

	componentDidMount() {
		let ele = $.flightIndicator(
							"#turn_coordinator", 
							"turn_coordinator", 
							settings);

		this.setState({ jqueryObj: 	ele });
	}

	render() {
		if (this.state.jqueryObj != null) {
			this.state.jqueryObj.setTurn(this.props.turn);
			this.state.jqueryObj.setSlip(this.props.slip);
		}
		return <div id="turn_coordinator" className="instrument" />
	}
}

export default TurnCoordinator;