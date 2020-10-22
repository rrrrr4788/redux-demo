const initState = {
	count: 0,
};

export function reducer(state = initState, action) {
	console.log('reducer: ', action);
	switch (action.type) {
		case 'increment':
			return {
				count: state.count + 1,
			};
		default:
			return state;
	}
}
