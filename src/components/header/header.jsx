import React from 'react';
import './header.css'
import menu from '../../icons/menu.svg'

const header = props => (
	<div className="nav-header">
		<img id="header-icon" src={menu} className="sidebar-open-button" onClick={props.openSidebar}/>
		SUNSHINE
		<div className="nav-items">
			<div>
				<div className="nav-item">Section1</div>
			</div>
			<div>
				<div className="nav-item">Section2</div>
			</div>
			<div>
				<div className="nav-item">Section3</div>
			</div>
		</div>
	</div>
);

export default header;