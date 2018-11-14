import React, { Component } from 'react';
import Search from '../components/search';

import * as actions from '../../actions/';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class SearchContainer extends Component {
  state = {
    value: 'Luis Fonsi'
  }
  
  handleSubmit = event => {
    event.preventDefault();
	const inputValue = this.input.value;

	this.props.actions.searchAsyncEntities(inputValue)
  }
  
  setInputRef = element => {
    this.input = element;
  }
  handleInputChange = event => {
    this.setState({
      value: event.target.value.replace(' ', '-')
    })
  }
  render() {
    return (
      <Search
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange}
        value={this.state.value}
      />
    )
  }
}

function mapDispatchToProps(dispatch){
	//return {actions: bindActionCreators(actions, dispatch)}
	return {
		//actions: bindActionCreators(actions, dispatch)
		actions: bindActionCreators(actions, dispatch)
	}
}


export default connect(null, mapDispatchToProps)(SearchContainer);
