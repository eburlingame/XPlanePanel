import React, { Component } from 'react';
import {linmap, rotate_around, rotate} from '../Helpers';

var i = 0; 
class VacAmp extends Component {

  	constructor(props) {
		super(props);
	}

	render() {
		i += 1;
		return (
			<div id="vac-amp" className="instrument eng-instrument">

				<img className="top" 
					 src="img/eng-instruments/vac-amp/vac-amp-top.svg" />

				<img className="middle" 
					 src="img/eng-instruments/eng-left-needle.svg" 
					 style={rotate_around(Math.sin(i/20) * 67, "deg", 25, 50)}/>

				<img className="middle" 
					 src="img/eng-instruments/eng-right-needle.svg" 
					 style={rotate_around(Math.sin(i/20) * 67, "deg", 75, 50)}/>

       			 <img className="base"
 					  src="img/eng-instruments/vac-amp/vac-amp-base.svg" />

			</div>
		);
	}
}

export default VacAmp;