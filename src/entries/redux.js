import { createStore } from 'redux';
import data from '../api2.json';

const $form = document.getElementById('form');
const $container = document.getElementById('playlist');

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
	
	const payload = {
		type: 'ADD_TITLE',
		payload: {title}
	}

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

render();

function render() {
	const playlist = store.getState();
	$container.innerHTML = '';
	playlist.forEach( item => {
		const $htmlElement = document.createElement('p');
		$htmlElement.textContent = item.title;
		$container.appendChild($htmlElement);
	})
}

function handleChange(){
	
	render();
}


store.subscribe(handleChange);
