import React, { Component } from 'react';
import '../../App.css';

const TimeButton = ({time, onClick}) => (
	<div className="timeButton" onClick={() => onClick("timeButton", time)}>
		<h1> {time} </h1>
    </div>
);

export default TimeButton;