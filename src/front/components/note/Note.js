// react
import React from 'react';

// css
import './note.css';

export default function Note(props) {
	return (
		<div className="note" onClick={ () => props.onClick(props.data.id) }>
			<div className="note-title">
				{<h4>{props.data.title}</h4>}
			</div>

			<div className="note-body">
				<p>
					{props.data.body}
				</p>
			</div>

			<div className="note-footer">
				<small>
					Click Note to Expand
				</small>
			</div>
		</div>
	);
}