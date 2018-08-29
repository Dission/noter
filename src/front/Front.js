// react
import React from 'react';

// react-redux
import { connect } from 'react-redux';

// css
import './front.css';

// components
import AddNoteButton from './components/addNoteButton/AddNoteButton';
import Note from './components/note/Note';

class Front extends React.Component {
	onAddNote =() => {
		console.log('add note');
	}

	onNoteClick = note_id => {
		console.log('note clicked, id:', note_id);
	}

	render() {
		return (
			<div>
				<AddNoteButton onClick={ this.onAddNote }/>
				<div id="note-container">
					{this.props.FrontReducer.notes.map((note, key) => <Note data={ note } key={ key } onClick={ this.onNoteClick }/>)}
				</div>
			</div>
		);
	}
}

// specify which sets of data (from specific reducers) you want from the store in this component
const mapStateToProps = (state) => {
	return {
		FrontReducer: state.FrontReducer
	}
};

// create dispatches to actions
const mapDispatchToProps = (dispatch) => {
	return {
	}
};

// this makes this component a smart component
// connect react to redux and pass login component as default
export default connect(mapStateToProps, mapDispatchToProps)(Front);