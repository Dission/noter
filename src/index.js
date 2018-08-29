// react
import React from 'react';
import ReactDOM from 'react-dom';

// redux
import { Provider } from 'react-redux';
import store from './store';

// css
import './index.css';

// containers
import Front from './front/Front';

ReactDOM.render(
	<Provider store={ store }>
		<Front />
	</Provider>,
	document.getElementById('root')
);