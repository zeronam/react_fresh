import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import AppCount from "./components/appCount";

const defaultStateCount = {value: 0, highlight: false};
const reducerCount = (state = defaultStateCount, action) => {
	if (action.type === 'UP' ){ return {value: state.value + 1, highlight: state.highlight}};
	if (action.type === 'DOWN' ){ return {value: state.value - 1, highlight: state.highlight}};
	if (action.type === 'CHANGE_COLOR' ){ return {value: state.value, highlight: !state.highlight}};
	return state;
}

class App extends Component {
	render(){
		return (
			<div><h1>Hello</h1></div>
		)
	}
}



ReactDOM.render(
	<Provider store={createStore(reducerCount)}>
    <AppCount />
  </Provider>, document.querySelector('.container')
);