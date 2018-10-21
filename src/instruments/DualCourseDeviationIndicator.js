import React, { Component } from 'react';
import {linmap, linmapConstrain, rotate} from '../Helpers';

class DualCourseDeviationIndicator extends Component {

  	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="two-axis-vor" className="instrument"
				 onWheel={(e) => console.log("wheeled")}
				 onClick={(e) => console.log("clicked")}
				 onContextMenu={(e) => console.log("right clicked")} >

				<img id="arrow" 
					 src="img/two-axis-vor/two-axis-vor-arrow.svg" />

				<img id="masks" 
					 src="img/two-axis-vor/two-axis-vor-masks.svg" />

				<img id="nav-flag" 
					 src="img/two-axis-vor/two-axis-vor-nav-flag.svg"
					 style={{top: linmapConstrain(-1, 1, this.props.toFromAmt, -2.4, 2.4)}} />

				<img id="gs-flag" 
					 src="img/two-axis-vor/two-axis-vor-gs-flag.svg"
					 style={{top: linmapConstrain(1, 0, this.props.warnAmt, 0, 2.4)}} />

				<img id="vert-needle" 
					 src="img/two-axis-vor/two-axis-vor-vert-needle.svg"
					 style={rotate(linmapConstrain(10, -10, this.props.vertNeedleDeflection, -34, 34), "deg")} />

				<img id="horiz-needle" 
					 src="img/two-axis-vor/two-axis-vor-horiz-needle.svg"
					 style={rotate(linmapConstrain(4, -4, this.props.horizNeedleDeflection, -24.5, 24.5), "deg")} />

				<img id="ring" 
					 src="img/two-axis-vor/two-axis-vor-ring.svg"
					 style={rotate(this.props.obsSetting, "deg")} />

				<img id="base" 
					 src="img/two-axis-vor/two-axis-vor-base.svg" />

			</div>
		);
	}
}

export default DualCourseDeviationIndicator;