// react
import React from 'react';

// css
import './newNote.css';

export default class NewNote extends React.Component {
	render() {
		return (
			<form>
				<input type="text" placeholder="Enter title" />
				<textarea placeholder="Note content goes here"></textarea>
				<button>Create Note</button>
			</form>
		);
	}
}