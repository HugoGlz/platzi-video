import React, { Component } from 'react';
import Search from '../components/search';

import { connect } from 'react-redux';

class SearchContainer extends Component {
  state = {
    value: 'Luis Fonsi'
  }
  handleSubmit = event => {
    event.preventDefault();
	const inputValue = this.input.value;
    console.log(inputValue, 'submit')
	this.props.dispatch({
		type: 'SEARCH_VIDEO',
		payload: {
			query: inputValue
		}
	})
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

export default connect()(SearchContainer);
