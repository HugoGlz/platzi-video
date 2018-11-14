import React from 'react';
import { hydrate } from 'react-dom';
import Home from '../pages/containers/home';
// import Playlist from './src/playlist/components/playlist';
// import data from '../api.json';
// console.log('Hola mundo!' )

import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';

import reducerFn from '../reducers/'

import { Map as map } from 'immutable';

import reduxLogger from 'redux-logger';

import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

//console.log('normalizer', normalizeData);

/*
const initialState = {
	data: {
		entities: normalizeData.entities,
		categories: normalizeData.result.categories,
		search: [],
	},
	modal: {
		visibility: false,
		mediaId: null
	}
}*/


function loggerOld (objeto){
	console.log('objeto',objeto);
	let {getState, dispatch} = objeto;
	return (next) => {
		return (action) => {
			console.log('este es mi viejo estado', getState().toJS())
			console.log('vamos a enviar esta accion', action)
			const response = next(action);
			console.log('este es mi nuevo estado', getState().toJS())
			return response;
		}
	}
}

const logger = ({getState, dispatch}) => next => action => {
	console.log('este es mi viejo estado', getState().toJS())
	console.log('vamos a enviar esta accion', action)
	const response = next(action);
	console.log('este es mi nuevo estado', getState().toJS())
	return response;
}


const store = createStore(
	reducerFn,
	map(),
	composeWithDevTools(
		applyMiddleware(reduxLogger, thunk)
	)
	//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState());

const homeContainer = document.getElementById('home-container')

// ReactDOM.render(que voy a renderizar, donde lo haré);
// const holaMundo = <h1>hola Estudiante!</h1>;

hydrate(
	<Provider store={store}>
		<Home/>
	</Provider> 
	, homeContainer);

