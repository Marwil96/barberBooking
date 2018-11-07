import React, { Component } from 'react';
import '../App.css';

import Card from './common/Card';

class CardContainer extends Component {
	renderCards(data) {
		if(this.props.whatStyle === "card") {
		console.log(data)
		return (<Card cardHeader={data.style} cardSubheader={data.cardSubheader * this.props.priceDiffrence + "kr"} img={data.img} priceDiffrence={this.props.priceDiffrence} whatStyle={this.props.whatStyle} onClick={this.props.onClick} />)
		} else if(this.props.whatStyle === "card potraitCard") {
			return <Card cardHeader={data.name} img={data.img} whatStyle={this.props.whatStyle} onClick={this.props.onClick} />
		} 
	}	

	render() {
		console.log(this.props.data)
		return (
			<div className="cardContainer">
				{this.props.data.map(data => (
					this.renderCards(data)
					))}
			</div>
		)
	}
}	

export default CardContainer;