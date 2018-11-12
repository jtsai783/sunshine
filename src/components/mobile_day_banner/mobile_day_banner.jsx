import React from 'react'
import './mobile_day_banner.css'
import IconLookup from '../../icons/icon_lookup.js'


class mobileDayBanner extends React.Component {
	
	renderContent(){
		if(this.props.dayWeather){
			let iconId = this.props.dayWeather.weather[0].icon;
			let iconFileName = IconLookup[iconId];

			return (
				<div className="mobile-day-banner">
					<div className="day-banner-city">
						{this.props.dayWeather.name}
					</div>
					<div className="day-banner-weather">
						<img className="day-banner-weather-icon inline-block" src={iconFileName} alt=""/>{this.props.dayWeather.weather[0].main}
					</div>
					<div className="day-banner-temp">
						{Math.ceil(this.props.dayWeather.main.temp)}°
					</div>
					<div className="day-banner-feeling">
						Humidity: {this.props.dayWeather.main.humidity}%
					</div>
				</div>
			);
		} else{
			return(
				<div className="mobile-day-banner">
				</div>
			);
		}
	}

	render(){
		let bannerContent = this.renderContent();

		return(
			<div>
				{bannerContent}
			</div>
		);
	}
}

export default mobileDayBanner;