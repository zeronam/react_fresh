import React, { Component } from 'react';
import { connect } from 'react-redux';

import Controller from '../reducers/updown_points';

class AppCount extends Component{

	render(){
	const color = this.props.myHighLight ? 'blue' : 'black';
	const size = this.props.mySize ? '18px': '30px';
		return(
			<div>
			<h1 style={{color: color, fontSize: size}}>{this.props.myValue}</h1>
			<Controller />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
      myValue: state.value,
	  myHighLight: state.highlight,
	  mySize: state.size
    };
}
export default connect(mapStateToProps)(AppCount);