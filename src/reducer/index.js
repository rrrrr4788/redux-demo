// Girl component's state is false at its default
const initState = {
	status: false,
};
export function gifReducer(state = initState, action) {
	console.log('reducer: ', action);
	switch (action.type) {
		case 'activate_gif':
			return {
				status: true,
			};
		case 'deactivate_gif':
			return {
				status: false,
			};
		default:
			return state;
	}
}
