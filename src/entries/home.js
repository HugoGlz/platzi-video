import React from 'react';
import { hydrate } from 'react-dom';
import Home from '../pages/containers/home';
// import Playlist from './src/playlist/components/playlist';
// import data from '../api.json';
// console.log('Hola mundo!' )

import normalizeData from '../schemas/'

import { Provider } from 'react-redux';

import { createStore } from 'redux';

import reducerFn from '../reducers/data'

console.log('normalizer', normalizeData);

const initialState = {
	data: {
		entities: normalizeData.entities,
		categories: normalizeData.result.categories
	},
	search: []
}


const store = createStore(
	reducerFn,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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

