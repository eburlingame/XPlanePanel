import React, { Component } from 'react';
import {linmap, linmapConstrain, rotate} from '../Helpers';

const NAV_FROM = 2;
const NAV_TO = 1;

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

				{this.props.navFlag == NAV_FROM &&
					<img id="nav-flag" 
						 src="img/single-axis-vor/single-axis-vor-nav-flag-from.svg" />
			      }

  				{this.props.navFlag == 0 &&
					<img id="nav-flag" 
						 src="img/single-axis-vor/single-axis-vor-nav-flag-off.svg" />
			      }

				{this.props.navFlag == NAV_TO &&
					<img id="nav-flag" 
						 src="img/single-axis-vor/single-axis-vor-nav-flag-to.svg" />
			      }

				<img id="needle" 
					 src="img/single-axis-vor/single-axis-vor-vert-needle.svg"
					 style={rotate(linmapConstrain(2.5, -2.5, this.props.vertNeedleDeflection, -24.5, 24.5), "deg")} />

				<img id="ring" 
					 src="img/single-axis-vor/single-axis-vor-ring.svg"
					 style={rotate(-this.props.obsSetting, "deg")} />

				<img id="base" 
					 src="img/single-axis-vor/single-axis-vor-base.svg" />

			</div>
		);
	}
}

export default SingleCourseDeviationIndicator;