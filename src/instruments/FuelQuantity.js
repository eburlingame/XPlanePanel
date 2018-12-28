import React, { Component } from 'react';
import {linmapConstrain, rotate_around, rotate} from '../Helpers';

class FuelQuantity extends Component {

  	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="fuel-quantity" className="instrument eng-instrument">

				<img className="top" 
					 src="img/eng-instruments/fuel-quantity/fuel-quantity-top.svg" />

				<img className="middle" 
					 src="img/eng-instruments/eng-left-needle.svg" 
					 style={rotate_around(linmapConstrain(0, 26, this.props.fuel_qty_left, -1, .82) * -67, "deg", 25, 50)}/>

				<img className="middle" 
					 src="img/eng-instruments/eng-right-needle.svg" 
					 style={rotate_around(linmapConstrain(0, 26, this.props.fuel_qty_right, -1, .89) * 67, "deg", 75, 50)}/>

       			 <img className="base"
 					  src="img/eng-instruments/fuel-quantity/fuel-quantity-base.svg" />

			</div>
		);
	}
}

export default FuelQuantity;