import React from 'react';
import './sidebar.css'

class sideBar extends React.Component {
	componentWillUnmount(){
		this.props.closeSidebar();
	}

	render(){
		return(
			<div className={"nav-sidebar " + (this.props.closed ? 'closed' : '')}>
				<div className="sidebar-close-button" onClick={this.props.closeSidebar}>
					✕
				</div>
				<div className="sidebar-items-container">
					<div>
						Section1
					</div>
					<div>
						Section2
					</div>
					<div>
						Section3
					</div>
				</div>
			</div>
		)
	}
}

export default sideBar;