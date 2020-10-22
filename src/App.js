import React from 'react';
import './App.css';

import store from './store';
import { Provider } from 'react-redux';
import ComA from './pages/ComA';
import ComB from './pages/ComB';

function App() {
	return (
		<Provider store={store}>
			<div className='App'>
				<ComA></ComA>
				<ComB></ComB>
			</div>
		</Provider>
	);
}

export default App;
