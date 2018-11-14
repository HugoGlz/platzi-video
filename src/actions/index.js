import { OPEN_MODAL, CLOSE_MODAL, SEARCH_ENTITIES } from '../action-types';

export function closeModal(){
	return {
	  type: CLOSE_MODAL
	}
}

export function openModal(mediaId){
	return {
		type: OPEN_MODAL,
		payload: {
			mediaId
		}
	}
}

export function searchEntities(query){
	return {
		type: SEARCH_ENTITIES,
		payload: {
			query
		}
	}
}


export function searchAsyncEntities(query){
	
	return ( dispatch ) => {
		
		setTimeout ( () => {
			dispatch(searchEntities(query))
		}, 5000);
	}
}