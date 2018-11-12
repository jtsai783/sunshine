import React from 'react'
import MobileDayBanner from '../mobile_day_banner/mobile_day_banner'
import MobileForecastContainer from '../mobile_forecast_container/mobile_forecast_container'
import './mobile_content.css'

const mobileContent = (props) => (
	<div>
		<MobileDayBanner dayWeather={props.dayWeather}/>
		<div className="forecast-title">
			5-Day Forecast
		</div>
	    <MobileForecastContainer days={props.days}/>
    </div>
)

export default mobileContent