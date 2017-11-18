import React, {Component} from 'react';
import {connect} from 'react-redux';

class ChangeSize extends Component {
    changeTextSize(){
        this.props.dispatch({type: 'CHANGE_SIZE'});
    }
    render(){
        return(
            <button onClick={ this.changeTextSize.bind(this) }>Change size</button>
        )
    }
}

export default connect(
    function(state){
        return {mySize: state.size}
    }
)(ChangeSize)