import React, { Component } from 'react';
import {linmapConstrain, rotate_around, rotate} from '../Helpers';

var i = 0; 
class EGTFuelFlow extends Component {

  	constructor(props) {
		super(props);
	}

	render() {
		i += 1;
		return (
			<div id="egt-fuel-flow" className="instrument eng-instrument">

				<img className="top" 
					 src="img/eng-instruments/egt-fuel-flow/egt-fuel-flow-top.svg" />

				<img className="middle" 
					 src="img/eng-instruments/eng-left-needle.svg" 
					 style={rotate_around(linmapConstrain(700, 1500, this.props.egt, -1, .89) * -67, "deg", 25, 50)}/>

				<img className="middle" 
					 src="img/eng-instruments/eng-right-needle.svg" 
					 style={rotate_around(linmapConstrain(0, 19, this.props.fuel_flow, -1.1, 1) * 67, "deg", 75, 50)}/>

       			 <img className="base"
 					  src="img/eng-instruments/egt-fuel-flow/egt-fuel-flow-base.svg" />

			</div>
		);
	}
}

export default EGTFuelFlow;