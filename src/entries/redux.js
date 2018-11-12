import { createStore } from 'redux';
import data from '../api.json';

const $form = document.getElementById('form');

$form.addEventListener('submit', handleSubmit)

const titles = [];

data.categories.forEach( category => {
	category.playlist.forEach( item => {
		titles.push(item);
	})
})

function handleSubmit (event) {
	event.preventDefault();
	const data = new FormData($form);
	const title = data.get('title');
	console.log(title);
	
	const payload = {
		type: 'ADD_TITLE',
		payload: {title}
	}

	console.log(payload)

	store.dispatch(payload)
}

const reducerFn = (state, action) => {
	switch (action.type){
		case 'ADD_TITLE': return [...state, action.payload]
	default:
		return state
	}
}

const initialState = [...titles];

const store = createStore(
	reducerFn,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

console.log(store.getState())

const $container = document.getElementById('playlist');
const playlist = store.getState();

titles.forEach( item => {
	const $htmlElement = document.createElement('p');
	$htmlElement.textContent = item.title;
	$container.appendChild($htmlElement);
})
