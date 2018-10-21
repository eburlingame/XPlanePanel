import React, { Component } from 'react';
import {linmap, linmapConstrain, rotate} from '../Helpers';

class SingleCourseDeviationIndicator extends Component {

  	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="single-axis-vor" className="instrument"
				 onWheel={(e) => console.log("wheeled")}
				 onClick={(e) => console.log("clicked")}
				 onContextMenu={(e) => console.log("right clicked")} >

				<img id="arrow" 
					 src="img/single-axis-vor/single-axis-vor-arrow.svg" />

				<img id="nav-mask" 
					 src="img/single-axis-vor/single-axis-vor-nav-mask.svg" />

				<img id="nav-flag" 
					 src="img/single-axis-vor/single-axis-vor-nav-flag.svg"
					 style={{top: linmapConstrain(-1, 1, this.props.toFromAmt, -2.4, 2.4)}} />

				<img id="needle" 
					 src="img/single-axis-vor/single-axis-vor-vert-needle.svg"
					 style={rotate(linmapConstrain(4, -4, this.props.horizNeedleDeflection, -24.5, 24.5), "deg")} />

				<img id="ring" 
					 src="img/single-axis-vor/single-axis-vor-ring.svg"
					 style={rotate(this.props.obsSetting, "deg")} />

				<img id="base" 
					 src="img/single-axis-vor/single-axis-vor-base.svg" />

			</div>
		);
	}
}

export default SingleCourseDeviationIndicator;