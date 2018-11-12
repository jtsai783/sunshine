import React from 'react'
import MobileDayForecast from '../mobile_day_forecast/mobile_day_forecast'
import './mobile_forecast_container.css'

class mobileForecastContainer extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			expanded: -1
		}
		this.setExpanded = this.setExpanded.bind(this);
	}

	setExpanded(i){
		if(i === this.state.expanded){
			this.setState({
				expanded: -1
			})	
		}else {
			this.setState({
				expanded: i
			})	
		}
		
	}

	renderDayForecast(i, dayData){
		return(
			<MobileDayForecast
				expanded={i === this.state.expanded}
				setExpanded={this.setExpanded}
				index={i}
				dayData={dayData}
				key={i}
			/>
		)
	}

	render(){
		let daysArr = [];
		if(this.props.days && this.props.days.length){
			for(var i = 0; i < this.props.days.length; i++){
				daysArr.push(this.renderDayForecast(i, this.props.days[i]))
			}	
		}

		return(
			<div className="mobild-forecast-container">
				{daysArr}
			</div>
		);
	}
}


export default mobileForecastContainer;