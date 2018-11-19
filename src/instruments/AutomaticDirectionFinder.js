import React, { Component } from 'react';
import {linmap, linmapConstrain, rotate} from '../Helpers';

class AutomaticDirectionFinder extends Component {

  	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="adf" className="instrument"
				 onWheel={(e) => console.log("wheeled")}
				 onClick={(e) => console.log("clicked")}
				 onContextMenu={(e) => console.log("right clicked")} >

				<img id="arrow" 
					 src="img/adf/adf-arrow.svg" 
					 style={rotate(this.props.stationBearing, "deg")} />

				<img id="ring" 
					 src="img/adf/adf-ring.svg"
					 style={rotate(-this.props.ringRotation, "deg")} />

				<img id="base" 
					 src="img/adf/adf-base.svg" />

			</div>
		);
	}
}

export default AutomaticDirectionFinder;