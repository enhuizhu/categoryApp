'use strict';

import React, {Component} from 'react';

class Header extends Component {
	constructor(props) {
		super(props)
		
		this.state = {
			showLng: false,
			showSearch: false
		};
		
		this.toogleLng = this.toogleLng.bind(this);
		this.toogleSearch = this.toogleSearch.bind(this);
	}

	toogleLng() {
		this.setState({showLng: !this.state.showLng});
	}

	toogleSearch() {
		this.setState({showSearch: !this.state.showSearch});
	}
	
	render() {
		let lngClass = this.state.showLng ? 'show' : '';
		let searchBoxClass = this.state.showSearch ? 'show' : '';

		return (
			<div className='header'>
				<div className='title-bar'>
					<div className='search-icon' onClick={this.toogleSearch}></div>
					<div className='title'>UENI</div>
				</div>
				<div className={`search-box ${searchBoxClass}`}>
					<input type='text' placeholder='search'/>
				</div>
				<div className='lng-bar'>
					<label>LANGULAGE</label>
					<div className='lng-wrapper'>
						<span onClick={this.toogleLng}>Select Your Language</span>
						<span className='arrow-down'></span>
						
						<div className={`lng-list ${lngClass}`}>
							<div className='lng-item'>English</div>
							<div className='lng-item'>Spain</div>
							<div className='lng-item'>German</div>
							<div className='lng-item'>France</div>
						</div>
					</div>
					<div className='clear'></div>
				</div>
			</div>
		)

	}
}

export default Header;