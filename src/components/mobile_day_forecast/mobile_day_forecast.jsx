import React from 'react'
import './mobile-day-forecast.css'
import IconLookup from '../../icons/icon_lookup.js'
import moment from 'moment'

class MobileDayForecast extends React.Component {

	render () {
		let iconId = this.props.dayData.weather[0].icon;
		let iconFileName = IconLookup[iconId];
		let day = moment.unix(this.props.dayData.dt).format('dddd');
		
		return(
			<div
				className={"mobile-day-forecast " + (this.props.expanded ? "expanded" : "") }
				onClick={this.props.setExpanded.bind(this, this.props.index)}
			>
				<div>
					<img className="weather-icon inline-block" src={iconFileName} alt=""/>
					<div className="forecast-day-container inline-block">
						<div className="clear-fix">
							<div className="forecast-week-day inline-block">
								{day}
							</div>
							<div className="forecast-day-high float-right inline-block">
								{Math.ceil(this.props.dayData.temp.max)}°
							</div>
						</div>
						<div className="forecast-day-weather">
							<div className="inline-block">
								{this.props.dayData.weather[0].main}
							</div>
							<div className="forecast-day-low float-right inline-block">
								{Math.ceil(this.props.dayData.temp.min)}°
							</div>
						</div>
					</div>
					<div className="expanded-info">
						<div>Humidity: {this.props.dayData.humidity}%</div>
						<div>Pressure: {this.props.dayData.pressure} hpa</div>
						<div>Wind: {this.props.dayData.speed} m/h</div>
					</div>
				</div>
			</div>	
		)
	}
}

export default MobileDayForecast;