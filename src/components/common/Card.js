import React, { Component } from 'react';
import '../../App.css';

import Checker from './Checker.js'

import damKlippning from '../../img/damklippning.svg';
import shaving from '../../img/razor.svg';
import permentering from '../../img/wigs.svg';
import herrKlippning from '../../img/scissors.svg';
import hairWash from '../../img/hairwashing.svg';
import womentreatment from '../../img/women-treatment.svg'


class Card extends Component {
	state = {
	animation:true
}
	render() {
		return(
		<div className={this.props.whatStyle} onClick={() => { this.props.onClick(this.props.whatStyle, this.props.cardHeader); this.setState({animation:!this.state.animation})}}> 
        	<img src={this.props.img} />
        	<h2>{this.props.cardHeader}</h2>
        	<h3>{this.props.cardSubheader}</h3>
        	<Checker animation={this.state.animation} />
        </div>
			)
	}
}
export default Card;