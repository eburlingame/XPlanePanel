import React, { Component } from 'react';
import {linmap, rotate} from '../Helpers';

class Tachometer extends Component {

  	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="tachometer" className="instrument">

				<img id="needle" 
					 src="img/tachometer/tachometer-needle.svg" 
					 style={rotate(linmap(0, 3500, this.props.rpm, -120, 125), "deg")}/>

       			 <img id="base" 
					  src="img/tachometer/tachometer-base.svg" />

			</div>
		);
	}
}

export default Tachometer;