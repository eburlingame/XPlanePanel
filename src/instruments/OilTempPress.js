import React, { Component } from 'react';
import {linmap, linmapConstrain, rotate_around, rotate} from '../Helpers';

var i = 0; 
class OilTempPress extends Component {

  	constructor(props) {
		super(props);
	}

	render() {
		i += 1;
		return (
			<div id="temp-press" className="instrument eng-instrument">

				<img className="top" 
					 src="img/eng-instruments/temp-press/temp-press-top.svg" />

				<img className="middle" 
					 src="img/eng-instruments/eng-left-needle.svg" 
					 style={rotate_around(linmapConstrain(75, 274, this.props.oilTemp, -1, 1.2) * -67, "deg", 25, 50)}/>

				<img className="middle" 
					 src="img/eng-instruments/eng-right-needle.svg" 
					 style={rotate_around(linmapConstrain(0, 115, this.props.oilPress, -1, .89) * 67, "deg", 75, 50)}/>

       			 <img className="base"
 					  src="img/eng-instruments/temp-press/temp-press-base.svg" />

			</div>
		);
	}
}

export default OilTempPress;