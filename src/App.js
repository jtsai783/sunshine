import React, { Component } from 'react';
import TopHeader from './components/header/header'
import Sidebar from './components/sidebar/sidebar'
import MediaQuery from 'react-responsive'

import MobileContent from './components/mobile_content/mobile_content'
import DesktopContent from './components/desktop_content/desktop_content'

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      sideBarClosed: true,
      dayList: null,
      dayWeather: null
    };
    this.closeSidebar = this.closeSidebar.bind(this);
    this.openSidebar = this.openSidebar.bind(this);
    this.getForecast = this.getForecast.bind(this);
    this.getForecast();
    this.getDailyWeather = this.getDailyWeather.bind(this);
    this.getDailyWeather();
  }

  getForecast = async () => {

    const api_call = await fetch('http://api.openweathermap.org/data/2.5/forecast/daily?q=Atlanta&mode=json&cnt=5&units=imperial&apikey=3aa158b2f14a9f493a8c725f8133d704');
    
    const response = await api_call.json();

    this.setState({
      dayList: response.list.slice()
    })
  }

  getDailyWeather = async () => {

    const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Atlanta&mode=json&cnt=5&units=imperial&apikey=3aa158b2f14a9f493a8c725f8133d704');
    
    const response = await api_call.json();

    this.setState({
      dayWeather: response
    })
  }

  openSidebar(){
    this.setState({
      sideBarClosed: false  
    })
  }

  closeSidebar(){
    this.setState({
      sideBarClosed: true  
    })
  }

  render() {
    return (
      <div className="App">
        <TopHeader openSidebar={this.openSidebar}/>
        <MediaQuery maxWidth={768}>
          <MobileContent days={this.state.dayList} dayWeather={this.state.dayWeather}/>  
          <Sidebar 
            closed={this.state.sideBarClosed}
            closeSidebar={this.closeSidebar}
          />
        </MediaQuery>
        <MediaQuery minWidth={769}>
          <DesktopContent days={this.state.dayList} dayWeather={this.state.dayWeather}/>  
        </MediaQuery>
      </div>
    );
  }
}

export default App;
