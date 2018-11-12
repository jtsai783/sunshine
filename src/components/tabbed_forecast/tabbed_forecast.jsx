import React from 'react'
import './tabbed_forecast.css'
import Tab from './tab/tab'

class tabbedForecast extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			chosenTab: 0
		}
		this.switchTab = this.switchTab.bind(this);
		this.renderTab = this.renderTab.bind(this);
	}

	switchTab(i){
		this.setState({
			chosenTab: i
		})
	}

	renderTab(i, dayData){
		return(
			<Tab
				selected={i === this.state.chosenTab}
				switchTab={this.switchTab}
				index={i}
				dayData={dayData}
				key={i}
			/>
		);
	}

	renderTabs(){
		var tabsArr=[];
		for(var i = 0; i < this.props.days.length; i++){
			tabsArr.push(this.renderTab(i, this.props.days[i]));
		}

		return(
			<div className="tabs-container">
				{tabsArr}
			</div>
		)
	}

	renderContent(){
		if(this.props.days){
			let daySelected = this.props.days[this.state.chosenTab];

			return(
				<div className="forecast-container">	
					{this.renderTabs()}
					<div className="detail-pane">
						<div>
							<div>
								Wind
							</div>
							<div>
								{daySelected.speed} m/h
							</div>
						</div>
						<div>
							<div>
								Humidity
							</div>
							<div>
								{daySelected.humidity}%
							</div>
						</div>
						<div>
							<div>
								Pressure
							</div>
							<div>
								{daySelected.pressure} kPa
							</div>
						</div>
						<div>
							<div>
								Description
							</div>
							<div>
								{daySelected.weather[0].description}
							</div>
						</div>
					</div>
				</div>
			);
		}else{
			return(
				<div className="forecast-container">

				</div>
			);
		}
	}

	render(){
		let renderedContent = this.renderContent();

		return(
			<div className="tabbed-forecast">
				<div className="title">
					5 Days Forecast
				</div>
				{renderedContent}
			</div>
		);
	}
}

export default tabbedForecast;