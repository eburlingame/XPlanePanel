import React, { Component } from 'react';
import {linmap, linmapConstrain, rotate} from '../Helpers';

const NAV_FROM = 2;
const NAV_TO = 1;

class DualCourseDeviationIndicator extends Component {

  	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="two-axis-vor" className="instrument">

				<img id="arrow" 
					 src="img/two-axis-vor/two-axis-vor-arrow.svg" />

				{this.props.navFlag == NAV_FROM &&
					<img id="nav-flag" 
						 src="img/two-axis-vor/two-axis-vor-nav-flag-from.svg" />
			      }

  				{this.props.navFlag == 0 &&
					<img id="nav-flag" 
						 src="img/two-axis-vor/two-axis-vor-nav-flag-off.svg" />
			      }

				{this.props.navFlag == NAV_TO &&
					<img id="nav-flag" 
						 src="img/two-axis-vor/two-axis-vor-nav-flag-to.svg" />
			      }

				{this.props.gsFlag == 0 &&
    				<img id="gs-flag" 
						 src="img/two-axis-vor/two-axis-vor-gs-flag-on.svg" />
			      }

  				{this.props.gsFlag == 1 &&
    				<img id="gs-flag" 
						 src="img/two-axis-vor/two-axis-vor-gs-flag-off.svg" />
			      }

				<img id="vert-needle" 
					 src="img/two-axis-vor/two-axis-vor-vert-needle.svg"
					 style={rotate(linmapConstrain(2.5, -2.5, this.props.vertNeedleDeflection, -34, 34), "deg")} />

				<img id="horiz-needle" 
					 src="img/two-axis-vor/two-axis-vor-horiz-needle.svg"
					 style={rotate(linmapConstrain(-.9, .9, this.props.horizNeedleDeflection, -24, 24), "deg")} />

				<img id="ring" 
					 src="img/two-axis-vor/two-axis-vor-ring.svg"
					 style={rotate(-this.props.obsSetting, "deg")} />

				<img id="base" 
					 src="img/two-axis-vor/two-axis-vor-base.svg" />

			</div>
		);
	}
}

export default DualCourseDeviationIndicator;