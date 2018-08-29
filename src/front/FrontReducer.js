// reducer for login operations
const frontReducer = (state = {
	notes: [
		{
			id: 1,
			title: "Introduction to Noter",
			body: "Welcome to Noter!"
		},
		{
			id: 2,
			title: "Introduction to Noter",
			body: "Welcome to Noter!"
		}
	]
}, action) => {
	switch (action.type) {
		case 'FRONT_ADD_NOTE':
			break;
		default:
			break;
	}
	return state;
};

export default frontReducer;