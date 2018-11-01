import React, { Component } from 'react';
import '../../App.css';

import damKlippning from '../../img/damklippning.svg';
import shaving from '../../img/razor.svg';
import permentering from '../../img/wigs.svg';
import herrKlippning from '../../img/scissors.svg';
import hairWash from '../../img/hairwashing.svg';
import womentreatment from '../../img/women-treatment.svg'

const Card = ({img, cardHeader, cardSubheader, whatStyle, onClick}) => (
	<div className={whatStyle} onClick={() => onClick(whatStyle, cardHeader)}> 
        	<img src={img} />
        	<h2>{cardHeader}</h2>
        	<h3>{cardSubheader}</h3>
        </div>
);

export default Card;