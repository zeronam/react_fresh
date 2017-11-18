import React, { Component } from 'react';
import { connect } from 'react-redux';

class ChangeColor extends Component {
  render(){
    return (
      <button onClick={ () => this.props.dispatch({ type: 'CHANGE_COLOR' }) }>Change Color</button>
    )
  }
}
 export default connect(
   function(state){
    return {myHighLight: state.highlight}
   }
 )(ChangeColor);