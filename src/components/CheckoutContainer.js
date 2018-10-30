import React, { Component } from 'react';
import '../App.css';

import TimeButton from './common/TimeButton';

class CheckoutContainer extends Component {
	
	state = {
			checkoutMethod:null,
			term: ""
		}
		 onInputChange(term) {
		 	console.log(term.length);
        	this.setState({term});
        	if(term.length > 1) {
        		console.log("I AM BIG")
        		this.props.onClick("checkoutContainer",term)
        	}

    }

	renderPayment(method) {
			console.log(method)
			if(method === "pay") {
				return (
					<div className="formContainer">
						<form> 
							<h3>Credit Card Number</h3>
							<input className="checkOutInput" placeholder="name@domain.com" type="email"/>
						</form>
						<form> 
							<h3>Expiration Date</h3>
							<input className="checkOutInput" placeholder="050-32303" type="tel"/>
						</form>
						<form> 
							<h3>Expiration Date</h3>
							<input className="checkOutInput" placeholder="050-32303" type="tel"/>
						</form>
					</div>
					)
			}
			else if(method === "book") {
				return (
					<div className="formContainer">
						<form> 
							<h3>Name *</h3>
							<input className="checkOutInput" placeholder="name" type="text" required  onChange={event => this.onInputChange(event.target.value)}/>
						</form>

						<form> 
							<h3>Email</h3>
							<input className="checkOutInput" placeholder="name@domain.com" type="email"/>
						</form>
						<form> 
							<h3>Phone Number</h3>
							<input className="checkOutInput" placeholder="050-32303" type="tel"/>
						</form>
					</div>
					)
			} else {
				return null
			}
		}
	render() {
		return (
			<div className="checkoutContainer">
				<div className="checkoutButtonContainer"> 
					<div className="checkoutButton" onClick= {() => this.setState({checkoutMethod:"book"})} > Betala på plats </div>
					<div className="checkoutButton" onClick= {() => this.setState({checkoutMethod:"pay"})} > Betala direkt </div>
				</div>

				{this.renderPayment(this.state.checkoutMethod)}
			</div>
		)
		}
	}	

export default CheckoutContainer;