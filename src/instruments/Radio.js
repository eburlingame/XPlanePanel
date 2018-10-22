import React, { Component } from 'react';
import {linmap, linmapConstrain, rotate} from '../Helpers';

class Radio extends Component {
  	constructor(props) {
		super(props);
		this.knobScrolled = this.knobScrolled.bind(this);
	}

	knobScrolled(e, knob, amount) {
		e.preventDefault();
	}

	render() {
		return (
			<div id={"radio" + this.props.id} 
				 className="radio"
				 onWheel={(e) => console.log("wheeled")}
				 onClick={(e) => console.log("clicked")}
				 onContextMenu={(e) => console.log("right clicked")}>

				<img id="comm-button" src="img/radio/radio-comm-button.svg"
				           onClick={(e) => console.log("clicked!")} /> 

			    <img id="comm-volume-knob" src="img/radio/radio-volume-knob.svg"
			           onWheel={(e) => "wheeled!"} />
			    <img id="nav-volume-knob" src="img/radio/radio-volume-knob.svg"
			           onWheel={(e) => "wheeled!"} />

			    <div id="comm-active-frequency" className="frequency">
			         {this.props.commActiveFreq.toFixed(3)}
				</div>

			    <div id="comm-stby-frequency" className="frequency">
			         {this.props.commStandbyFreq.toFixed(3)}
				</div>

			    <div id="nav-active-frequency" className="frequency"> 
			         {this.props.navActiveFreq.toFixed(3)}
		    	</div>
			    <div id="nav-stby-frequency" className="frequency"> 
			         {this.props.navStandbyFreq.toFixed(3)}
		    	</div>

			    <img id="comm-inner-knob" src="img/radio/radio-inner-knob.svg"
			           onWheel={(e) => this.knobScrolled(e, 0, 0)}
			           onClick={(e) => "clicked!"}
			           onWheel={(e) => this.knobScrolled(e, 0, 0)} />

			    <img id="comm-outer-knob" src="img/radio/radio-outer-knob.svg"
			           onWheel={(e) => this.knobScrolled(e, 0, 0)}
			           onClick={(e) => "clicked!"}
			           onWheel={(e) => this.knobScrolled(e, 0, 0)} />

			    <img id="nav-inner-knob" src="img/radio/radio-inner-knob.svg"
			           onWheel={(e) => this.knobScrolled(e, 0, 0)}
			           onClick={(e) => "clicked!"}
			           onWheel={(e) => this.knobScrolled(e, 0, 0)} />
			    <img id="nav-outer-knob" src="img/radio/radio-outer-knob.svg"
			           onWheel={(e) => this.knobScrolled()}
			           onClick={(e) => "clicked!"}
			           onWheel={(e) => this.knobScrolled()} />

			    <img id="nav-button" src="img/radio/radio-nav-button.svg"
			           onClick={(e) => console.log("clicked!")} />

			    <img id="base" src="img/radio/radio-base.svg" />
			</div>
		);
	}
}

export default Radio;