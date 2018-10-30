import React, { Component } from 'react';
import '../App.css';

import TimeButton from './common/TimeButton';

class TimeContainer extends Component {
	state = {
    	freeTimes: {
    	297: ["11.20 - 11.40", "11.40 - 12.00", "12.00 - 12.20"],
    	298: ["11.20 - 11.40", "11.40 - 12.00"],
    	299: ["11.20 - 11.40", "11.40 - 12.00"],
    	300: ["11.20 - 11.40", "11.40 - 12.00"],
    	}
    	

	};

	renderTimeButtons(whatDay) {
		console.log("renderTimeButtons", this.state.freeTimes[whatDay])
		if(this.state.freeTimes[whatDay] === undefined) {
			return <h1 className="noFreeTimes"> No free times </h1>
		} else {
		// for (let i = 0; i < this.state.freeTimes[whatDay].length; i++) {
		// 	console.log("renderTimeButtons INSIDE LOOP", this.state.freeTimes[whatDay])
		// 	return (<TimeButton />)
		// 	}
		return this.state.freeTimes[whatDay].map(day => (
			  <TimeButton onClick={this.props.onClick} time={day} />
			))
		}
	}
	render() {
		console.log(this.props.selectedDate, this.state.freeTimes)
		return (
		<div className="timeContainer">
		{this.state.freeTimes[1]}
		{this.renderTimeButtons(this.props.selectedDate)}
		</div>
		)
		}
	}	

export default TimeContainer;