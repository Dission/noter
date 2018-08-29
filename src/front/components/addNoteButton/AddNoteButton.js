// react
import React from 'react';

//css
import './addNoteButton.css';

export default function AddNoteButton(props) {
	return (
		<button id="addNoteButton" onClick={ props.onClick }>
			Add Note
		</button>
	);
}