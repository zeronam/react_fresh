import React, { Component } from 'react';
import { connect } from 'react-redux';

import Controller from '../reducers/updown_points';

class AppCount extends Component{

	render(){
    const color = this.props.myHighLight ? 'blue' : 'black';
		return(
			<div>
			<h1 style={{color}}>{this.props.myValue}</h1>
			<Controller />
			</div>
		);
	}
}

function mapStateToProps(state) {
	console.log(state);
	return {
      myValue: state.value,
      myHighLight: state.highlight
    };
}
export default connect(mapStateToProps)(AppCount);