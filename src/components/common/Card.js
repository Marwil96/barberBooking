import React, { Component } from 'react';
import '../../App.css';

import damklippning from '../../img/damklippning.svg';

const Card = ({img, cardHeader, cardSubheader, whatStyle, onClick}) => (
	<div className={whatStyle} onClick={() => onClick(whatStyle, cardHeader)}> 
        	<img src={img} />
        	<h2>{cardHeader}</h2>
        	<h3>{cardSubheader}</h3>
        </div>
);

export default Card;