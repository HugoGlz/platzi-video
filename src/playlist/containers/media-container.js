import React, { Component } from 'react';
import Media from '../components/media';
import { connect } from 'react-redux';

class MediaContainer extends Component{
	
	render() {
		return <Media 
				cover={this.props.data.get('cover')}
				title={this.props.data.get('title')}
				author={this.props.data.get('author')}
				id={this.props.id}
				openModal={this.props.handleOpenModal}
			/>
	}
	
	
}

function mapStateProps(state, props){
	return {
		data: state.get('data').get('entities').get('media').get(props.id)
	}
}


export default connect(mapStateProps)(MediaContainer);