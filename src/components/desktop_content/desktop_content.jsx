import React from 'react'
import DesktopDayBanner from '../desktop_day_banner/desktop_day_banner'
import TabbedForecast from '../tabbed_forecast/tabbed_forecast'
import Radar from '../radar/radar'
import './desktop_content.css'

const desktopContent = (props) => (
	<div className="desktop-container">
		<div className="left-col">
			<DesktopDayBanner dayWeather={props.dayWeather}/>
			<TabbedForecast days={props.days}/>	
		</div>
		<div className="right-col">
			<Radar dayWeather={props.dayWeather}/>
		</div>
		
	</div>
)

export default desktopContent;