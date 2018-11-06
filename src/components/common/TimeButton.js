import React, { Component } from 'react';
import '../../App.css';
import Checker from './Checker.js'


class TimeButton extends Component { 
	state = {
	animation:true
}
	render() {
		return (
			<div className="timeButton" onClick={() => {this.props.onClick("timeButton", this.props.time); this.setState({animation:!this.state.animation})}}>
				<h1> {this.props.time} </h1>
				<Checker animation={this.state.animation} whatAnimation="checkerTimeButton" />
		    </div>
			)
	}
}

export default TimeButton;