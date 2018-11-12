import React from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { Marker } from 'google-maps-react';
import './radar.css'

const mapStyles = {
  width: '100%',
  height: '100%'
};

class Radar extends React.Component {

	coord(){
		if(this.props.dayWeather){
			return({
				lat: this.props.dayWeather.coord.lat,
				lng: this.props.dayWeather.coord.lon,
			});
		} else {
			return({
				lat: 33.75,
				lon: -84.39
			});
		}
	}

	render(){
		return(
			<div className="map-container">
				<div className="title">
					Radar
				</div>
				<div className="map-container-inner">
					<Map
			        google={this.props.google}
			        zoom={14}
			        style={mapStyles}
			        initialCenter={this.coord()}
			    	>
				      <Marker/>
			      	</Map>	
				</div>
				
			</div>
		);
	}
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAS5aUv_awaV0x1OeLGfpuQteSzNUVfLI0' //please dont abuse ;)
})(Radar);