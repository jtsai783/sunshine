import React from 'react'
import './desktop_day_banner.css'
import '../mobile_day_banner/mobile_day_banner.css'
import IconLookup from '../../icons/icon_lookup.js'
import GetCardinal from '../../util/getCardinal.js'
import moment from 'moment'

class desktopDayBanner extends React.Component {
	renderContent(){
		if(this.props.dayWeather){
			let iconId = this.props.dayWeather.weather[0].icon;
			let iconFileName = IconLookup[iconId];

			return(
				<div className="desktop-day-banner">
					<div className="daybanner-left-col">
						<div className="day-banner-city day-banner-city-desktop">
							{this.props.dayWeather.name}
						</div>
						<div className="day-banner-temp">
							{Math.ceil(this.props.dayWeather.main.temp)}°
						</div>
						<div className="day-banner-feeling">
							Sun Set: {moment(this.props.dayWeather.sys.sunset).format('H:mm a')}
						</div>
					</div>
					<div className="daybanner-right-col">
						<div className="day-banner-weather">
							<img className="day-banner-weather-icon inline-block" src={iconFileName} alt=""/>{this.props.dayWeather.weather[0].main}
						</div>
						<div className="desktop-day-info">
							<div>
								<div className="info-title">Wind</div>
								<div>
									{GetCardinal(this.props.dayWeather.wind.deg)} {this.props.dayWeather.wind.speed} m/h
								</div>
							</div>
							<div>
								<div className="info-title">Humidity</div>
								<div>
									{this.props.dayWeather.main.humidity}%
								</div>
							</div>
							<div>
								<div className="info-title">Pressure</div>
								<div>
									{this.props.dayWeather.main.pressure} hPa
								</div>
							</div>
							<div>
								<div className="info-title">Visibility</div>
								<div>
									{this.props.dayWeather.wind.deg} m
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		} else {
			return(
				<div className="desktop-day-banner">
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

export default desktopDayBanner;