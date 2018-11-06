import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import dateFns from "date-fns";
import { hotjar } from 'react-hotjar';
import Lottie from 'react-lottie';
import animationData from './img/animation/confetti.json'

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
import SubHeader from './components/common/SubHeader';
import CardContainer from './components/CardContainer';
import Card from './components/common/Card';
import FixedFooter from './components/FixedFooter';
import DatePicker from './components/DatePicker';
import TimeContainer from './components/TimeContainer';
import Calendar from './components/Calendar';
import CheckoutContainer from './components/CheckoutContainer';
import CheckoutContainerVersion2 from './components/CheckoutContainerVersion2';

// hotjar.initialize(1071700, 6);

  const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };


class App extends Component {
  constructor() {
    super();
     this.state = {
      styleCard: [
      {style:"Herr Klippning", cardSubheader:"370kr/30min", img:herrKlippning, value:"Herr Klippning" },
      {style:"Dam Klippning", cardSubheader:"420kr/30min", img:damKlippning, value:"Dam Klippning"  },
      {style:"Permentera", cardSubheader:"260kr/30min", img:permentering, value:"Permentera"},
      {style:"Rakning", cardSubheader:"140kr/30min", img:shaving, value:"Rakning" },
      {style:"Styling", cardSubheader:"199kr/30min", img:styling, value:"Styling" },
      {style:"Färga håret", cardSubheader:"899kr/30min", img:colouring, value:"Färgning" }
      ],
      potraitCard: [
      {name:"Johanna Dahl", img:johannaDahl, value:"Johanna Dahl"},
      {name:"Peter Fiskare", img:peterFiskare, value:"Peter Fiskare"},
      {name:"Kajsa Jonsson", img:kajsaJonsson, value:"Kajsa Jonsson"},
      {name:"Hanna Petterson", img:hannaPetterson, value:"Hanna Petterson" },
      {name:"Johan Karlsson", img:johanKarlsson, value:"Johan Karlsson" },
      {name:"Margaretha Kaj", img:margaretaKaj, value:"Margaretha Kaj"}
      ],
      selectedDate: new Date(),
      displayedDate: dateFns.format(new Date(),
  'dddd, MMMM Do'),
      progressBar: 0,
      savedStyle: "Damklippning",
      savedBarber: "Undefined",
      whatState: 0,
      time:" 12.00 - 12.20" ,
      pickedBarber:false,
      pickedStyle:false,
      pickedDate:false,
      pickedMail:false,
      booked:"booked"
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
      if(this.state.pickedStyle === false) {
        console.log("whatStyle === CARD", cardHeader)
        this.setState({
        savedStyle: cardHeader,
        progressBar: (this.state.progressBar + 33.733),
        whatState: (this.state.whatState + 1),
        pickedStyle:true
      })
    }else {
      this.setState({
        savedStyle: cardHeader
      })
    }
    // const myDomNode = ReactDOM.findDOMNode(this.refs.chooseBarber)
    // myDomNode.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  } else if(whatStyle === "timeButton") {
      if(this.state.pickedDate === false) {
        this.setState({
          progressBar: (this.state.progressBar + 33.633),
          time: cardHeader,
          whatState: (this.state.whatState + 1),
          pickedDate:true
        })
      }else {
        this.setState({
          time: cardHeader
        })
      }
    const myDomNode = ReactDOM.findDOMNode(this.refs.choosePayment)
    myDomNode.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  } 
  else if(whatStyle === "checkoutContainer") {
    console.log("CHECKOUT")
    if(this.state.whatState >= 4){
      console.log(this.state.whatState, "STATE => 4")
      this.setState({
      whatState: 4,
      pickedMail:true
    })
    }else {
      this.setState({
      progressBar: (this.state.progressBar + 33.533),
      whatState: (this.state.whatState + 1),
      pickedMail:true
    })
    }
  } else if(this.state.pickedMail === true) {
    this.setState({
      progressBar: (this.state.progressBar - 33.533),
      whatState: (this.state.whatState - 1),
      pickedMail:false
    })
  }
  else if(whatStyle === "onCalenderClick") {
    const myDomNode = ReactDOM.findDOMNode(this.refs.chooseClock)
    myDomNode.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }
  else {
    if(this.state.pickedBarber === false) {
    console.log("WhatBarber", cardHeader)
    this.setState({
      savedBarber: cardHeader,
      progressBar: (this.state.progressBar + 33),
      whatState: (this.state.whatState + 1),
      pickedBarber:true
    })
  }else {
    this.setState({
      savedBarber: cardHeader
    })
  }
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
  onBookedButtonClick(booked){
      this.setState({booked:booked})
      console.log("onBokkedCLick",this.state.booked)
    }

  renderBookedScreen(booked){
    if(booked === true) {
      setTimeout(() => {
        this.setState({ isPaused: true });
      }, 3800);
      return (
        <div className="booked"> 
          <div className="animationContainer">
          <Lottie options={defaultOptions}
              height={1200}
              width={800}
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}/> </div>
              <h1> Grattis du har nu bokat en tid hos Bea & Ida </h1>
        </div>)
    } else {
      return null
    }
  }

  render() {
    console.log(this.state.selectedDate)
    var completeTime = (this.state.displayedDate + this.state.time)
    console.log(this.state.displayedDate, this.state.time)
    return (
      <div className="App">
        {this.renderBookedScreen(this.state.booked)}
        <FixedFooter progressBar={this.state.progressBar} onScrollArrowClick={this.onScrollArrowClick} state={this.state.whatState} barber={this.state.savedBarber} style={this.state.savedStyle} date={this.state.displayedDate} time={this.state.time}/>
        <div className="sectionContainer chooseStyle"> 
          <Header header={"1. Vilken typ av klippning vill du ha?"} /> 
          <SubHeader header={"Välj en eller flera behandlingar du vill ha."} />
          <CardContainer data={this.state.styleCard} cardHeader={"Damklippning"} cardSubheader={"360kr/30min"} img={damklippning} whatStyle="card" onClick={this.onCardClick} />
        </div>
        
        <div className="sectionContainer chooseBarber" ref={ "chooseBarber" }> 
          <Header header={"2.Vem vill du ska klippa dig?"} color="white"/> 
          <CardContainer data={this.state.potraitCard} img={johannaDahl} whatStyle="card potraitCard" onClick={this.onCardClick} /> 
        </div>

        <div className="sectionContainer chooseDate" ref={ "chooseTime" }> 
          <Header header={"3.När vill du klippa dig?"} color="white"/> 
          <Calendar selectedDate={this.state.selectedDate} onDateClick={this.onDateClick} scrollDown={this.onCardClick} />
          <Header header={this.state.displayedDate} color="white" align="headerCenter"/>
          <TimeContainer selectedDate={dateFns.format(this.state.selectedDate,'DDDD')} ref={ "chooseClock" } onClick={this.onCardClick}/>        
        </div>

        <div className="sectionContainer choosePayment" ref={ "choosePayment" }> 
          <Header header={"4.Slutför bokningen"} /> 
          <CheckoutContainerVersion2 onClick={this.onCardClick} style={this.state.styleCard} barbers={this.state.potraitCard} date={completeTime} savedBarber={this.state.savedBarber} savedStyle={this.state.savedStyle} onButtonClick={this.onBookedButtonClick.bind(this)} />       
        </div>
      </div>
    );
  }
}

export default App;
