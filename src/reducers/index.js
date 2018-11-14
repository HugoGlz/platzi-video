import data from './data';
import modal from './modal';

//import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';

const rootReducers = combineReducers({
	data,
	modal
})

export default rootReducers;