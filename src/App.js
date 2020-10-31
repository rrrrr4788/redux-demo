import React from 'react';
import './App.css';

import Boy from './pages/boy';
import Girl from './pages/girl';
import { Provider } from 'react-redux';
import store from './store';

function App() {
	return (
		<Provider store={store}>
			<div className='App'>
				<div className='boy'>
					<Boy></Boy>
				</div>

				<div className='girl'>
					<Girl></Girl>
				</div>
			</div>
		</Provider>
	);
}

export default App;
