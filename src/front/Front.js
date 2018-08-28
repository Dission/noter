// react
import React from 'react';

// css
import './front.css';

export default class Front extends React.Component {
	render() {
		return (
			<div id="note-container">

				<div className="note">
					<div className="note-header">
						<h1>header</h1>
					</div>

					<div className="note-body">
						<p>
							test note body text
						</p>
					</div>

					<div className="note-footer">
						<small>
							note footer
						</small>
					</div>
				</div>

				<div className="note">
					<div className="note-header">
						<h1>header</h1>
					</div>

					<div className="note-body">
						<p>
							test note body text
						</p>
					</div>

					<div className="note-footer">
						<small>
							note footer
						</small>
					</div>
				</div>

				<div className="note">
					<div className="note-header">
						<h1>header</h1>
					</div>

					<div className="note-body">
						<p>
							test note body text
						</p>
					</div>

					<div className="note-footer">
						<small>
							note footer
						</small>
					</div>
				</div>

				<div className="note">
					<div className="note-header">
						<h1>header</h1>
					</div>

					<div className="note-body">
						<p>
							test note body text
						</p>
					</div>

					<div className="note-footer">
						<small>
							note footer
						</small>
					</div>
				</div>

			</div>
		);
	}
}