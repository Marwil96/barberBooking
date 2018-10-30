
import React, { Component } from 'react';
import dateFns from "date-fns";
import "../App.css";

class Calendar extends Component {
	state = {
    	currentMonth: new Date(),
    	selectedDate: this.props.selectedDate,
    	availableDates: [28,29,30],
    	almostAvailableDates: [24,25,26]

	};

	  renderHeader() {
	  	const dateFormat = "MMMM YYYY";
		  return (
		    <div className="header row flex-middle">
		      <div className="col col-start">
		        <div className="icon" onClick={this.prevMonth}>
		          chevron_left
		        </div>
		      </div>
		      <div className="col col-center">
		        <span>
		          {dateFns.format(this.state.currentMonth, dateFormat)}
		        </span>
		      </div>
		      <div className="col col-end" onClick={this.nextMonth}>
		        <div className="icon">chevron_right</div>
		      </div>
		    </div>
		  );
	  }

  renderDays() {
  const dateFormat = "ddd";
  const days = [];
  let startDate = dateFns.startOfWeek(this.state.currentMonth);
  for (let i = 0; i < 7; i++) {
    days.push(
      <div className="col col-center" key={i}>
        {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
      </div>
    );
  }
  return <div className="days row">{days}</div>;
}

  renderCells() {
  	const { currentMonth, selectedDate } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = "D"; 
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        if(Number(formattedDate) === this.state.availableDates[i]) {
        	var style = "number numberGreen";
        	var bgColor ="col cell bgGreen ";
        } else if(Number(formattedDate) === this.state.almostAvailableDates[1]) {
        	console.log("almostAvailableDates")
        	var style= "number numberYellow";
        	var bgColor ="col cell bgYellow ";
        }	else {
        	var style= "number ";
        	var bgColor ="col cell ";
        }
        days.push(
          <div
            className={bgColor + `col cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, this.props.selectedDate) ? "selected" : ""
            }`}
            key={day}
            onClick={() => this.props.onDateClick(dateFns.parse(cloneDay))}
          >
            <span className={style}>{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  // onDateClick = day => {
  // 	 this.setState({
  //     selectedDate: day
  //   });
  // };

  nextMonth = () => {
  this.setState({
    currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
  });
	};

	prevMonth = () => {
	  this.setState({
	    currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
	  });
	};

  render() {
    return (
     <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
        <div> 
        	<div className="instructions"> <div className="colorInstruction" style={{background:"#00DFAD"}}> </div><h3 className="textInstruction"> Många lediga tider </h3> </div>
        	<div className="instructions"> <div className="colorInstruction" style={{background:"#F3B02E"}}> </div><h3 className="textInstruction"> Många Upptagna tider </h3> </div>
        	<div className="instructions"> <div className="colorInstruction" style={{background:"#E74C3C"}}> </div><h3 className="textInstruction"> Fullbokat </h3> </div>
        </div>
     </div>
    );
  }
}

export default Calendar;