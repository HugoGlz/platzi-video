import normalizeData from '../schemas/'

import { fromJS } from 'immutable';

import { SEARCH_ENTITIES } from '../action-types';

const initalState = fromJS({
	entities: normalizeData.entities,
	categories: normalizeData.result.categories,
	search: ''
})

function data (
	state = initalState, 
	action){
	
	switch (action.type){
		case SEARCH_ENTITIES: {
			const newState = action.payload.query ? state.set('search', action.payload.query) : state;
			return newState;
		}
		default:
			return state
	}
}

export default data;