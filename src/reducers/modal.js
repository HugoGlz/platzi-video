import { fromJS } from 'immutable';

import { OPEN_MODAL, CLOSE_MODAL } from '../action-types';


const initialState = fromJS({
	visibility: false,
	mediaId: null
})

function modal(state = initialState, action){
	switch (action.type){
		case OPEN_MODAL: {
			const newState = state.merge({
				visibility: true,
				mediaId: action.payload.mediaId
			})
			
			console.log('state',newState)
			
			return newState;
		}
		case CLOSE_MODAL: {
			return initialState;		
		}
			
		default:
			return state;		
			
		
	}
}

export default modal;