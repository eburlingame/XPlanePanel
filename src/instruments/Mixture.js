import React, { Component } from 'react';
import {linmapConstrain} from '../Helpers';

class Mixture extends Component {

  	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="mixture" className="instrument">

				<img id="handle" 
					 src="img/mixture/mixture-handle.svg" 
					 style={{top: linmapConstrain(0, 1, this.props.setting, 0, -50)}}/>

       			 <img id="base" 
					  src="img/mixture/mixture-base.svg" />

			</div>
		);
	}
}

export default Mixture;