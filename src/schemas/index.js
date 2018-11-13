import api from '../api.json';

import {normalize, schema} from 'normalizr';

//const media = new shema.Entity(key, definicion del esquema, opciones);
const media = new schema.Entity('media', {}, {
	idAttribute: 'id',
	processStrategy: (value, partent, key) => {
		return {
			...value,
			category: parent.id 
		}
	} 
});

const category = new schema.Entity('categories', {
	playlist: new schema.Array(media)
});

const categories = { categories: new schema.Array(category)}

const normalizeData = normalize(api, categories);

export default normalizeData;