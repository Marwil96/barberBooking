import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import dateFns from "date-fns";
import { hotjar } from 'react-hotjar';

import johannaDahl from './img/barbers/johannaDahl.jpg';
import peterFiskare from './img/barbers/peterFiskare.jpg';
import kajsaJonsson from './img/barbers/kajsaJonsson.jpg';
import hannaPetterson from './img/barbers/hannaPetterson.jpeg';
import johanKarlsson from './img/barbers/johanKarlsson.jpg';
import margaretaKaj from './img/barbers/margaretaKaj.jpg';




import damklippning from './img/damklippning.svg';

import damKlippning from './img/curl.svg';
import shaving from './img/razor.svg';
import colouring from './img/paint-bucket.svg';
import herrKlippning from './img/hairstyle.svg';
import hairWash from './img/hairwashing.svg';
import styling from './img/mirror.svg';
import permentering from './img/women-treatment.svg'

import Header from './components/common/Header';
import CardContainer from './components/CardContainer';
import Card from './components/common/Card';
import FixedFooter from './components/FixedFooter';
import DatePicker from './components/DatePicker';
import TimeContainer from './components/TimeContainer';
import Calendar from './components/Calendar';
import CheckoutContainer from './components/CheckoutContainer';

// hotjar.initialize(1071700, 6);

class App extends Component {
  constructor() {
    super();
     this.state = {
      styleCard: [
      {style:"Herr Klippning", cardSubheader:"370kr/30min", img:herrKlippning },
      {style:"Dam Klippning", cardSubheader:"420kr/30min", img:damKlippning },
      {style:"Permentera", cardSubheader:"260kr/30min", img:permentering },
      {style:"Rakning", cardSubheader:"140kr/30min", img:shaving },
      {style:"Styling", cardSubheader:"199kr/30min", img:styling },
      {style:"Färga håret", cardSubheader:"899kr/30min", img:colouring }
      ],
      potraitCard: [
      {name:"Johanna Dahl", img:johannaDahl},
      {name:"Peter Fiskare", img:peterFiskare},
      {name:"Kajsa Jonsson", img:kajsaJonsson},
      {name:"Hanna Petterson", img:hannaPetterson },
      {name:"Johan Karlsson", img:johanKarlsson },
      {name:"Margaretha Kaj", img:margaretaKaj}
      ],
      selectedDate: new Date(),
      displayedDate: dateFns.format(new Date(),
  'dddd, MMMM Do'),
      progressBar: 0,
      savedStyle: "Damklippning",
      savedBarber: "Undefined",
      whatState: 0,
      time:null
  };
    this.onCardClick = this.onCardClick.bind(this);
  }

    onDateClick = day => {
      console.log("onDateClick", dateFns.format(this.state.selectedDate,
  'dddd, MMMM Do'))
     this.setState({
      selectedDate: day,
      displayedDate: dateFns.format(day,
  'dddd, MMMM Do')
    });
  };

  onCardClick(whatStyle, cardHeader){
    if(whatStyle === "card") {
      console.log("whatStyle === CARD", cardHeader)
      this.setState({
      savedStyle: cardHeader,
      progressBar: (this.state.progressBar + 25),
      whatState: (this.state.whatState + 1)
    })
    const myDomNode = ReactDOM.findDOMNode(this.refs.chooseBarber)
    myDomNode.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  } else if(whatStyle === "timeButton") {
    this.setState({
      progressBar: (this.state.progressBar + 25),
      time: cardHeader,
      whatState: (this.state.whatState + 1)
    })
    const myDomNode = ReactDOM.findDOMNode(this.refs.choosePayment)
    myDomNode.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  } 
  else if(whatStyle === "checkoutContainer") {
    console.log("CHECKOUT")
    if(this.state.whatState >= 4){
      console.log(this.state.whatState, "STATE => 4")
      this.setState({
      whatState: 4
    })
    }else {
      this.setState({
      progressBar: (this.state.progressBar + 25),
      whatState: (this.state.whatState + 1)
    })
    }
  } else if(whatStyle === "removeCheckoutContainer") {
    this.setState({
      progressBar: (this.state.progressBar - 25),
      whatState: (this.state.whatState - 1)
    })
  }
  else {
    console.log("WhatBarber", cardHeader)
    this.setState({
      savedBarber: cardHeader,
      progressBar: (this.state.progressBar + 25),
      whatState: (this.state.whatState + 1)
    })
    const myDomNode = ReactDOM.findDOMNode(this.refs.chooseTime)
    myDomNode.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }
  }

  onScrollArrowClick(direction) {
    console.log("onScrollArrowClick", window.innerHeight, window.pageYOffset, (window.pageYOffset - 200));
    var ScrollHeight = window.pageYOffset;
    if(direction === "upp") {
    window.scroll({top: ScrollHeight - 700, behavior: "smooth", block: "end", inline: "nearest"})
    }  else {
      window.scroll({top: ScrollHeight + 700, behavior: "smooth", block: "end", inline: "nearest"})
    }
  }

  render() {
    console.log(this.state.selectedDate)
    return (
      <div className="App">
        <FixedFooter progressBar={this.state.progressBar} onScrollArrowClick={this.onScrollArrowClick} state={this.state.whatState} barber={this.state.savedBarber} style={this.state.savedStyle} date={this.state.displayedDate} time={this.state.time}/>
        <div className="sectionContainer chooseStyle"> 
          <Header header={"1. Vilken typ av klippning vill du ha?"} /> 
          <CardContainer data={this.state.styleCard} cardHeader={"Damklippning"} cardSubheader={"360kr/30min"} img={damklippning} whatStyle="card" onClick={this.onCardClick} />
        </div>
        
        <div className="sectionContainer chooseBarber" ref={ "chooseBarber" }> 
          <Header header={"2.Vem vill du ska klippa dig?"} color="white"/> 
          <CardContainer data={this.state.potraitCard} img={johannaDahl} whatStyle="card potraitCard" onClick={this.onCardClick} /> 
        </div>

        <div className="sectionContainer chooseDate" ref={ "chooseTime" }> 
          <Header header={"3.När vill du klippa dig?"} color="white"/> 
          <Calendar selectedDate={this.state.selectedDate} onDateClick={this.onDateClick} scrollDown={this.onCalanderClick} />
          <Header header={this.state.displayedDate} color="white" align="headerCenter"/>
          <TimeContainer selectedDate={dateFns.format(this.state.selectedDate,'DDDD')} ref={ "chooseClock" } onClick={this.onCardClick}/>        
        </div>

        <div className="sectionContainer choosePayment" ref={ "choosePayment" }> 
          <Header header={"4.Betala på plats eller på direkten."} /> 
          <CheckoutContainer onClick={this.onCardClick} />       
        </div>
      </div>
    );
  }
}

export default App;
