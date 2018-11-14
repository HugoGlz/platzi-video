import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';
import { List as list, fromJS } from 'immutable';
import * as actions from '../../actions/';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

class Home extends Component {
 
	handleCloseModal = () => {
		this.props.actions.closeModal()
  	}
  
	handleOpenModal = (id) => {
		this.props.actions.openModal(id)
	}
	
  render() {
    return (
      <HandleError>
        <HomeLayout>
          <Related />
          <Categories
            categories={this.props.categories}
            handleOpenModal={this.handleOpenModal}
			search={this.props.search}
          />
          {
            this.props.modal.get('visibility') &&
            <ModalContainer>
              <Modal
                handleClick={this.handleCloseModal}
              >
                <VideoPlayer
                 	autoplay
					
					id={this.props.modal.get('mediaId')}
                  /*
				  src={this.props.media.src}
                  title={this.props.media.title}
				*/
                />
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    )
  }
}

function mapStateToProps(state, props){
	const data = state.get('data');

	const categories = data.get('categories').map( categoryId => data.get('entities').get('categories').get(categoryId) )
	
	const mediaList = data.get('entities').get('media');

	const search = data.get('search');

	let searchResults = !search ? list() : 
							mediaList.filter( 
								item => item.get('author')
									.toUpperCase()
									.includes(search.toUpperCase())
							).toList();
							
	console.log('modal', state.get('modal') );
	
	return {
		categories,
		search: searchResults,
		modal: state.get('modal') 
	}
}

function mapDispatchToProps(dispatch){
	return {
		//actions: bindActionCreators(actions, dispatch)
		actions: bindActionCreators(actions, dispatch)
	}
	
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
