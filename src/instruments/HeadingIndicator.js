import React, { Component } from 'react';
import {linmap, rotate} from '../Helpers';

class HeadingIndicator extends Component {

  	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="heading-indicator" className="instrument">

				<img id="bug" 
					 src="img/heading-indicator/heading-indicator-bug.svg"
					 style={rotate(this.props.headingBug - this.props.heading, "deg")} />

				<img id="bug-knob" 
					 src="img/heading-indicator/heading-indicator-bug-knob.svg"
					 onWheel={(e) => console.log("wheeled")}
					 onClick={(e) => console.log("clicked")}
					 onContextMenu={(e) => console.log("right clicked")} />

				<img id="calib-knob"
					 src="img/heading-indicator/heading-indicator-calib-knob.svg"
					 style={rotate(-this.props.heading, "deg")} />

				<img id="ring" 
					 src="img/heading-indicator/heading-indicator-ring.svg"
					 style={rotate(-this.props.heading, "deg")} />

       			 <img id="base" 
					  src="img/heading-indicator/heading-indicator-base.svg" />

			</div>
		);
	}
}

export default HeadingIndicator;