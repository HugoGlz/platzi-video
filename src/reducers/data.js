function data (state, action){
	switch (action.type){
		case 'SEARCH_VIDEO': {
			if (!action.payload.query){
				return {
					...state,
					search: []
				}
			}
			
			const list = state.data.categories[2].playlist;
			
			const upperCaseValue = action.payload.query.toUpperCase();
			
			const results = list.filter( item => {
				return item.author.toUpperCase().includes(upperCaseValue)
			})
			
			return {
				...state,
				search: results
			}
		}
		default:
			return state
	}
}

export default data;