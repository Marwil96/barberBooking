import React, { Component } from 'react';
import '../../App.css';


const ProgressBar = ({progressBar}) => (
	<div className="progressBar"> 
    	<div className="innerProgressBar" style={{width:progressBar+"%"}}> </div>
    </div>
);

export default ProgressBar;