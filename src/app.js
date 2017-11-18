import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import AppCount from "./components/appCount";

const defaultStateCount = {value: 0, highlight: false, size: true};
const reducerCount = (state = defaultStateCount, action) => {
	if (action.type === 'UP' ){ 
		return {value: state.value + 1, highlight: state.highlight, size: state.size}
	};
	if (action.type === 'DOWN' ){ 
		return {value: state.value - 1, highlight: state.highlight, size: state.size}
	};
	if (action.type === 'CHANGE_COLOR' ){ 
		return {value: state.value, highlight: !state.highlight, size: state.size}
	};
	if(action.type === 'CHANGE_SIZE'){
		return {value: state.value, hightlight: state.hightlight, size: !state.size}
	}
	return state;
}

const arrState = {arr: ['Android', 'iOS', 'NodeJS', 'React'], isAdding: true};

const reducerClass = (state = arrState, action)=>{
	switch(action.type){
		case 'TOGGLE_IS_ADDING':
			return {...state, isAdding: !state.isAdding}
		case 'ADD_ITEM':
			return {...state, arr: [...state.arr, action.item]}
		case 'REMOVE_ITEM':
			return {...state, arr: state.arr.filter( (e,i) => i != action.index )}
		default:
			return state;
	}
}



class App extends Component {
	render(){
		return (
			<div><h1>Hello</h1></div>
		)
	}
}



ReactDOM.render(
	<Provider store={createStore(reducerCount)}><AppCount /></Provider>
	, document.querySelector('.container')
);