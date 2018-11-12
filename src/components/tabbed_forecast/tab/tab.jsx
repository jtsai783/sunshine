import React from 'react'
import './tab.css'
import IconLookup from '../../../icons/icon_lookup.js'
import moment from 'moment'

const tab = (props) => {
	let iconId = props.dayData.weather[0].icon;
	let iconFileName = IconLookup[iconId];
	let day = moment.unix(props.dayData.dt).format('dddd');

	return(
		<div className={ "desktop-tabs " + (props.selected ? 'selected' : '')} onClick={props.switchTab.bind(this,props.index)}>
			<div className="tab-day">
				{day}
			</div>
			<div className="tab-icon">
				<img src={iconFileName}/>
			</div>
			<div className="high-low clear-fix">
				<div className="inline-block">{Math.ceil(props.dayData.temp.max)}°</div>
				<div className="high-low-separator inline-block"></div>
				<div className="inline-block">{Math.ceil(props.dayData.temp.min)}°</div>
			</div>
			<div className={ "tab-connector " + (props.selected ? 'selected' : '')}>
			</div>
		</div>
	);
}

export default tab;