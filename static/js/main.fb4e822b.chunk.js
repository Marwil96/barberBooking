(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{184:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(12),o=a.n(s),l=(a(77),a(5)),c=a(7),i=a(6),m=a(4),d=a(8),h=a(17),u=(a(79),a(3),a(2)),p=a.n(u),k=a(69),v=a.n(k),f=a(32),b=a.n(f),E=function(e){var t=e.header,a=e.color,n=e.align;return r.a.createElement("h1",{className:"header "+n,style:{color:a}}," ",t," ")},g=function(e){var t=e.img,a=e.cardHeader,n=e.cardSubheader,s=e.whatStyle,o=e.onClick;return r.a.createElement("div",{className:s,onClick:function(){return o(s,a)}},r.a.createElement("img",{src:t}),r.a.createElement("h2",null,a),r.a.createElement("h3",null,n))},C=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"renderCards",value:function(e){return"card"===this.props.whatStyle?(console.log(e),r.a.createElement(g,{cardHeader:e.style,cardSubheader:e.cardSubheader,img:this.props.img,whatStyle:this.props.whatStyle,onClick:this.props.onClick})):"card potraitCard"===this.props.whatStyle?r.a.createElement(g,{cardHeader:e.name,img:this.props.img,whatStyle:this.props.whatStyle,onClick:this.props.onClick}):void 0}},{key:"render",value:function(){var e=this;return console.log(this.props.data),r.a.createElement("div",{className:"cardContainer"},this.props.data.map(function(t){return e.renderCards(t)}))}}]),t}(n.Component),y=a(70),w=a.n(y),S=function(e){var t=e.direction,a=e.onScrollArrowClick;return r.a.createElement("div",{className:"scrollArrow",onClick:function(){return a(t)}},r.a.createElement("img",{className:"scrollArrow"+t,src:w.a}))},N=function(e){var t=e.progressBar;return r.a.createElement("div",{className:"progressBar"},r.a.createElement("div",{className:"innerProgressBar",style:{width:t+"%"}}," "))},O=a(71),D=a.n(O),j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={draggedOut:!1,booked:!1,barber:a.props.barber,style:a.props.style,date:"21e Oktober",time:"18.00-18.20"},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"bookedScreen",value:function(e){return console.log("bookedScreen"),!0===e?r.a.createElement("div",{className:"booked"}," ",r.a.createElement("h1",null," Du har nu bokat ",this.props.barber," klockan ",this.props.time,", ",this.props.date," ")," ",r.a.createElement("div",{className:"backToWebsiteButton"},r.a.createElement("h1",null," G\xe5 Tillbaka till hemsidan. "))," "):void 0}},{key:"dragOutOverview",value:function(e){var t=this;return console.log("OverView",this.state.barber,this.state.style),!0===e?r.a.createElement("div",{className:"overviewContainer"},r.a.createElement("img",{src:D.a,onClick:function(){return t.setState({draggedOut:!1})}}),r.a.createElement("h1",null," \xd6verblick "),r.a.createElement("p",null,r.a.createElement("span",null,this.props.barber)," kommer utf\xf6ra ",r.a.createElement("span",null,this.props.style)," p\xe5 ditt h\xe5r den ",r.a.createElement("span",null,this.props.date,", ",this.props.time),".",r.a.createElement("br",null),"St\xe4mmer det?"),r.a.createElement("div",{className:"overviewButton",onClick:function(){return t.setState({booked:!0})}},r.a.createElement("h1",null," Skicka iv\xe4g bokningen "))):null}},{key:"whatFooter",value:function(e){var t=this;return 4===e?r.a.createElement("div",{className:"fixedFooter fixedButton",onClick:function(){return t.setState({draggedOut:!0})}},r.a.createElement("h1",null," \xd6verblicka bokningen ")):r.a.createElement("div",{className:"fixedFooter"},r.a.createElement(N,{progressBar:this.props.progressBar}),r.a.createElement("div",{className:"arrowContainer"},r.a.createElement(S,{onScrollArrowClick:this.props.onScrollArrowClick,direction:"upp"}),r.a.createElement(S,{onScrollArrowClick:this.props.onScrollArrowClick,direction:"down"})))}},{key:"render",value:function(){return r.a.createElement("div",{className:"fixedFooterContainer"},this.whatFooter(this.props.state),this.dragOutOverview(this.state.draggedOut),this.bookedScreen(this.state.booked))}}]),t}(n.Component),B=function(e){var t=e.time,a=e.onClick;return r.a.createElement("div",{className:"timeButton",onClick:function(){return a("timeButton",t)}},r.a.createElement("h1",null," ",t," "))},M=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={freeTimes:{297:["11.20 - 11.40","11.40 - 12.00","12.00 - 12.20"],298:["11.20 - 11.40","11.40 - 12.00"],299:["11.20 - 11.40","11.40 - 12.00"],300:["11.20 - 11.40","11.40 - 12.00"]}},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"renderTimeButtons",value:function(e){var t=this;return console.log("renderTimeButtons",this.state.freeTimes[e]),void 0===this.state.freeTimes[e]?r.a.createElement("h1",{className:"noFreeTimes"}," No free times "):this.state.freeTimes[e].map(function(e){return r.a.createElement(B,{onClick:t.props.onClick,time:e})})}},{key:"render",value:function(){return console.log(this.props.selectedDate,this.state.freeTimes),r.a.createElement("div",{className:"timeContainer"},this.state.freeTimes[1],this.renderTimeButtons(this.props.selectedDate))}}]),t}(n.Component),A=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={currentMonth:new Date,selectedDate:a.props.selectedDate,availableDates:[28,29,30],almostAvailableDates:[24,25,26]},a.nextMonth=function(){a.setState({currentMonth:p.a.addMonths(a.state.currentMonth,1)})},a.prevMonth=function(){a.setState({currentMonth:p.a.subMonths(a.state.currentMonth,1)})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"renderHeader",value:function(){return r.a.createElement("div",{className:"header row flex-middle"},r.a.createElement("div",{className:"col col-start"},r.a.createElement("div",{className:"icon",onClick:this.prevMonth},"chevron_left")),r.a.createElement("div",{className:"col col-center"},r.a.createElement("span",null,p.a.format(this.state.currentMonth,"MMMM YYYY"))),r.a.createElement("div",{className:"col col-end",onClick:this.nextMonth},r.a.createElement("div",{className:"icon"},"chevron_right")))}},{key:"renderDays",value:function(){for(var e=[],t=p.a.startOfWeek(this.state.currentMonth),a=0;a<7;a++)e.push(r.a.createElement("div",{className:"col col-center",key:a},p.a.format(p.a.addDays(t,a),"ddd")));return r.a.createElement("div",{className:"days row"},e)}},{key:"renderCells",value:function(){for(var e=this,t=this.state,a=t.currentMonth,n=(t.selectedDate,p.a.startOfMonth(a)),s=p.a.endOfMonth(n),o=p.a.startOfWeek(n),l=p.a.endOfWeek(s),c=[],i=[],m=o,d="";m<=l;){for(var h=function(t){d=p.a.format(m,"D");var a=m;Number(d)===e.state.availableDates[t]?(k="number numberGreen",v="col cell bgGreen "):Number(d)===e.state.almostAvailableDates[1]?(console.log("almostAvailableDates"),k="number numberYellow",v="col cell bgYellow "):(k="number ",v="col cell "),i.push(r.a.createElement("div",{className:v+"col cell ".concat(p.a.isSameMonth(m,n)?p.a.isSameDay(m,e.props.selectedDate)?"selected":"":"disabled"),key:m,onClick:function(){return e.props.onDateClick(p.a.parse(a))}},r.a.createElement("span",{className:k},d),r.a.createElement("span",{className:"bg"},d))),m=p.a.addDays(m,1)},u=0;u<7;u++){var k,v;h(u)}c.push(r.a.createElement("div",{className:"row",key:m},i)),i=[]}return r.a.createElement("div",{className:"body"},c)}},{key:"render",value:function(){return r.a.createElement("div",{className:"calendar"},this.renderHeader(),this.renderDays(),this.renderCells(),r.a.createElement("div",null,r.a.createElement("div",{className:"instructions"}," ",r.a.createElement("div",{className:"colorInstruction",style:{background:"#00DFAD"}}," "),r.a.createElement("h3",{className:"textInstruction"}," M\xe5nga lediga tider ")," "),r.a.createElement("div",{className:"instructions"}," ",r.a.createElement("div",{className:"colorInstruction",style:{background:"#F3B02E"}}," "),r.a.createElement("h3",{className:"textInstruction"}," M\xe5nga Upptagna tider ")," "),r.a.createElement("div",{className:"instructions"}," ",r.a.createElement("div",{className:"colorInstruction",style:{background:"#E74C3C"}}," "),r.a.createElement("h3",{className:"textInstruction"}," Fullbokat ")," ")))}}]),t}(n.Component),I=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={checkoutMethod:null,term:""},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"onInputChange",value:function(e){console.log(e.length),this.setState({term:e}),e.length>1?(console.log("I AM BIG"),this.props.onClick("checkoutContainer",e)):0===e.length&&this.props.onClick("removeCheckoutContainer",e)}},{key:"renderPayment",value:function(e){var t=this;return console.log(e),"pay"===e?r.a.createElement("div",{className:"formContainer"},r.a.createElement("form",null,r.a.createElement("h3",null,"Credit Card Number"),r.a.createElement("input",{className:"checkOutInput",placeholder:"name@domain.com",type:"email"})),r.a.createElement("form",null,r.a.createElement("h3",null,"Expiration Date"),r.a.createElement("input",{className:"checkOutInput",placeholder:"050-32303",type:"tel"})),r.a.createElement("form",null,r.a.createElement("h3",null,"Expiration Date"),r.a.createElement("input",{className:"checkOutInput",placeholder:"050-32303",type:"tel"}))):"book"===e?r.a.createElement("div",{className:"formContainer"},r.a.createElement("form",null,r.a.createElement("h3",null,"Name *"),r.a.createElement("input",{className:"checkOutInput",placeholder:"name",type:"text",required:!0,onChange:function(e){return t.onInputChange(e.target.value)}})),r.a.createElement("form",null,r.a.createElement("h3",null,"Email"),r.a.createElement("input",{className:"checkOutInput",placeholder:"name@domain.com",type:"email"})),r.a.createElement("form",null,r.a.createElement("h3",null,"Phone Number"),r.a.createElement("input",{className:"checkOutInput",placeholder:"050-32303",type:"tel"}))):null}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"checkoutContainer"},r.a.createElement("div",{className:"checkoutButtonContainer"},r.a.createElement("div",{className:"checkoutButton",onClick:function(){return e.setState({checkoutMethod:"book"})}}," Betala p\xe5 plats "),r.a.createElement("div",{className:"checkoutButton",onClick:function(){return e.setState({checkoutMethod:"pay"})}}," Betala direkt ")),this.renderPayment(this.state.checkoutMethod))}}]),t}(n.Component),x=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(i.a)(t).call(this))).onDateClick=function(t){console.log("onDateClick",p.a.format(e.state.selectedDate,"dddd, MMMM Do")),e.setState({selectedDate:t,displayedDate:p.a.format(t,"dddd, MMMM Do")})},e.state={styleCard:[{style:"Herr Klippning",cardSubheader:"360kr/30min"},{style:"Dam Klippning",cardSubheader:"360kr/30min"},{style:"Permentera",cardSubheader:"360kr/30min"},{style:"Rakning",cardSubheader:"360kr/30min"},{style:"Herr Klippning",cardSubheader:"360kr/30min"},{style:"Herr Klippning",cardSubheader:"360kr/30min"}],potraitCard:[{name:"Johanna Dahl"},{name:"Peter Fiskare"},{name:"Kajsa Jonsson"},{name:"Hanna Petterson"},{name:"Johan Karlsson"},{name:"Margaretha Kaj"}],selectedDate:new Date,displayedDate:p.a.format(new Date,"dddd, MMMM Do"),progressBar:0,savedStyle:"Damklippning",savedBarber:"Undefined",whatState:0,time:null},e.onCardClick=e.onCardClick.bind(Object(h.a)(Object(h.a)(e))),e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){var e,t,a,n;e=window,t=document,e.hj=e.hj||function(){(e.hj.q=e.hj.q||[]).push(arguments)},e._hjSettings={hjid:1071700,hjsv:6},a=t.getElementsByTagName("head")[0],(n=t.createElement("script")).async=1,n.src="https://static.hotjar.com/c/hotjar-"+e._hjSettings.hjid+".js?sv="+e._hjSettings.hjsv,a.appendChild(n)}}]),Object(m.a)(t,[{key:"onCardClick",value:function(e,t){if("card"===e)console.log("whatStyle === CARD",t),this.setState({savedStyle:t,progressBar:this.state.progressBar+25,whatState:this.state.whatState+1}),o.a.findDOMNode(this.refs.chooseBarber).scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"});else if("timeButton"===e){this.setState({progressBar:this.state.progressBar+25,time:t,whatState:this.state.whatState+1}),o.a.findDOMNode(this.refs.choosePayment).scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}else if("checkoutContainer"===e)console.log("CHECKOUT"),this.state.whatState>=4?this.setState({whatState:4}):this.setState({progressBar:this.state.progressBar+25,whatState:this.state.whatState+1});else if("removeCheckoutContainer"===e)this.setState({progressBar:this.state.progressBar-25,whatState:this.state.whatState-1});else{console.log("WhatBarber",t),this.setState({savedBarber:t,progressBar:this.state.progressBar+25,whatState:this.state.whatState+1}),o.a.findDOMNode(this.refs.chooseTime).scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}}},{key:"onScrollArrowClick",value:function(e){console.log("onScrollArrowClick",window.innerHeight,window.pageYOffset,window.pageYOffset-200);var t=window.pageYOffset;"upp"===e?window.scroll({top:t-700,behavior:"smooth",block:"end",inline:"nearest"}):window.scroll({top:t+700,behavior:"smooth",block:"end",inline:"nearest"})}},{key:"render",value:function(){return console.log(this.state.selectedDate),r.a.createElement("div",{className:"App"},r.a.createElement(j,{progressBar:this.state.progressBar,onScrollArrowClick:this.onScrollArrowClick,state:this.state.whatState,barber:this.state.savedBarber,style:this.state.savedStyle,date:this.state.displayedDate,time:this.state.time}),r.a.createElement("div",{className:"sectionContainer chooseStyle"},r.a.createElement(E,{header:"1. Vilken typ av klippning vill du ha?"}),r.a.createElement(C,{data:this.state.styleCard,cardHeader:"Damklippning",cardSubheader:"360kr/30min",img:b.a,whatStyle:"card",onClick:this.onCardClick})),r.a.createElement("div",{className:"sectionContainer chooseBarber",ref:"chooseBarber"},r.a.createElement(E,{header:"2.Vem vill du ska klippa dig?",color:"white"}),r.a.createElement(C,{data:this.state.potraitCard,img:v.a,whatStyle:"card potraitCard",onClick:this.onCardClick})),r.a.createElement("div",{className:"sectionContainer chooseDate",ref:"chooseTime"},r.a.createElement(E,{header:"3.N\xe4r vill du klippa dig?",color:"white"}),r.a.createElement(A,{selectedDate:this.state.selectedDate,onDateClick:this.onDateClick,scrollDown:this.onCalanderClick}),r.a.createElement(E,{header:this.state.displayedDate,color:"white",align:"headerCenter"}),r.a.createElement(M,{selectedDate:p.a.format(this.state.selectedDate,"DDDD"),ref:"chooseClock",onClick:this.onCardClick})),r.a.createElement("div",{className:"sectionContainer choosePayment",ref:"choosePayment"},r.a.createElement(E,{header:"4.Betala p\xe5 plats eller p\xe5 direkten."}),r.a.createElement(I,{onClick:this.onCardClick})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},3:function(e,t,a){},32:function(e,t,a){e.exports=a.p+"static/media/damklippning.6b2a4d66.svg"},69:function(e,t,a){e.exports=a.p+"static/media/potraitImage.7e9a6a66.jpg"},70:function(e,t,a){e.exports=a.p+"static/media/arrow.51574c43.svg"},71:function(e,t,a){e.exports=a.p+"static/media/blackArrow.7f639a48.svg"},72:function(e,t,a){e.exports=a(184)},77:function(e,t,a){},79:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"}},[[72,2,1]]]);
//# sourceMappingURL=main.fb4e822b.chunk.js.map